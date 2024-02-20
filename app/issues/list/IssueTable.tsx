import { BugStatusBadge } from "@/app/components";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import NextLink from "next/link";
import { Bug, Status } from "@prisma/client";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Bug;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  bugs: Bug[];
}

const IssueTable = ({ searchParams, bugs }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
              <NextLink
                href={{
                  query: { ...searchParams, orderBy: column.value },
                }}
              >
                {" "}
                {column.label}
              </NextLink>
              {column.value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {bugs?.map((bug) => (
          <Table.Row key={bug.id}>
            <Table.Cell>
              <Link href={`/issues/${bug.id}`}>{bug.title}</Link>
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
  );
};

const columns: { label: string; value: keyof Bug; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
];

export const columnNames = columns.map((column) => column.value);

export default IssueTable;
