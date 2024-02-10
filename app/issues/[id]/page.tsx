import BugStatusBadge from "@/app/components/BugStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!bug) return notFound();
  await delay(2000);
  return (
    <div>
      <Heading>{bug.title}</Heading>
      <Flex className="space-x-3 " my="2">
        <BugStatusBadge status={bug.status} />
        <Text>{bug.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
