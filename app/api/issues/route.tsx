import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { bugSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = bugSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newBug = await prisma.bug.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(body, { status: 201 });
}
