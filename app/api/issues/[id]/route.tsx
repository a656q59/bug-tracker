import { bugSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = bugSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!bug) {
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });
  }
  const updatedBug = await prisma.bug.update({
    where: { id: bug.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  console.log(updatedBug);
  return NextResponse.json(updatedBug);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) {
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });
  }

  await prisma.bug.delete({
    where: { id: bug.id },
  });
  return NextResponse.json({});
}
