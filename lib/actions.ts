// app/lib/actions.ts
"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
  link: z.string().url(),
});

export async function createProject(formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    link: formData.get("link"),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, link } = parsed.data;

  const techList =
    typeof technologies === "string"
      ? technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean)
      : technologies;

  const formattedTechArray = `{${techList.join(",")}}`;

  await sql`
    INSERT INTO projects (title, description, technologies, link)
    VALUES (${title}, ${description}, ${formattedTechArray}::text[], ${link})
  `;

  revalidatePath("/projects");
  redirect("/projects");
}

export async function deleteProject(id: number) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath("/projects");
  redirect("/projects");
}

export async function updateProject(id: number, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    link: formData.get("link"),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, link } = parsed.data;

  const techList =
    typeof technologies === "string"
      ? technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean)
      : technologies;

  const formattedTechArray = `{${techList.join(",")}}`;

  await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, technologies = ${formattedTechArray}::text[], link = ${link}
    WHERE id = ${id}
  `;

  revalidatePath("/projects");
  redirect("/projects");
}
