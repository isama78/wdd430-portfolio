import { getProjects } from "@/lib/projects-db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    if (type) {
        return NextResponse.json(await getProjects(type));
    }
  return NextResponse.json(await getProjects());
}
