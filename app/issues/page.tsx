import React from "react";
import { Badge, Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import BugStatusBadge from "../components/BugStatusBadge";

const IssuesPage = async () => {
  console.log("prisma");
  const bugs = await prisma.bug.findMany();

  return (
    <div>
      <div className="mb-5">
        <Link href="issues/new">
          <Button>create new</Button>
        </Link>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs?.map((bug) => (
            <Table.Row key={bug.id}>
              <Table.Cell>
                {bug.title}
                <div className="md:hidden block">
                  <BugStatusBadge status={bug.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <BugStatusBadge status={bug.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {bug.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
