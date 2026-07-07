import { getProjectById } from "@/lib/projects-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
  }
  const project = getProjectById(Number(id));
  if (project) {
    return NextResponse.json(project);
  }
  return NextResponse.json({ error: "Project not found" }, { status: 404 });
}
