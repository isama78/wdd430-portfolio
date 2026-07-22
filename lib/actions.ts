// app/lib/actions.ts
"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const currentYear = new Date().getFullYear();

// Esquema Zod con mensajes accesibles
const CreateProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  technologies: z.string().min(2, "Add at least one technology."),
  link: z.string().optional().or(z.literal("")),
  year_completed: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`)
    .optional()
    .or(z.literal(""))
    .or(z.literal(NaN)),
});

// 1. Tipo State que expone 'errors' y 'message' de forma opcional
export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    year_completed?: string[];
    link?: string[];
  };
  message?: string | null;
};

// 2. La función SIEMPRE devuelve Promise<State> (incluso dentro de la validación o try/catch)
export async function createProject(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = CreateProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    year_completed: formData.get("year_completed"),
    link: formData.get("link"),
  });

  // Si falla la validación de Zod, retornamos los errores estructurados
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create project.",
    };
  }

  const { title, description, technologies, year_completed } =
    validatedFields.data;

  const techList = technologies
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);
  const formattedTechArray = `{${techList.join(",")}}`;
  const yearValue =
    typeof year_completed === "number" && !isNaN(year_completed)
      ? year_completed
      : null;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, year_completed)
      VALUES (${title}, ${description}, ${formattedTechArray}::text[], ${yearValue})
    `;
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to create project.",
    };
  }

  revalidatePath("/projects");
  redirect("/projects");
}

export async function deleteProject(id: number) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath("/projects");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project.");
  }
  redirect("/projects");
}

export async function updateProject(id: number, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    year_completed: formData.get("year_completed"),
    link: formData.get("link"),
  };
  console.log("rawww", raw);
  const parsed = CreateProjectSchema.safeParse(raw);
  if (!parsed.success) {
    console.error("Zod Validation Errors:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, link, year_completed } =
    parsed.data;

  const techList =
    typeof technologies === "string"
      ? technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean)
      : technologies;

  const formattedTechArray = `{${techList.join(",")}}`;
  const yearValue =
    typeof year_completed === "number" && !isNaN(year_completed)
      ? year_completed
      : null;

  try {
    await sql`
      UPDATE projects
      SET title = ${title}, description = ${description}, technologies = ${formattedTechArray}::text[], link = ${link}, year_completed = ${yearValue}
      
      WHERE id = ${id}
    `;
    revalidatePath("/projects");
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project.");
  }
  redirect("/projects");
}
