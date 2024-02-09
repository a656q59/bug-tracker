import { Table } from "@radix-ui/themes";
import React from "react";
import BugStatusBadge from "../components/BugStatusBadge";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BugsAction from "./BugsAction";

const loadingBugsPage = () => {
  const bugs = [1, 2, 3, 4, 5];
  return (
    <div>
      <BugsAction />

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
            <Table.Row key={bug}>
              <Table.Cell>
                <Skeleton />
                <div className="md:hidden block">
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default loadingBugsPage;
