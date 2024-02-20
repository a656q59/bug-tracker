"use client";

import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const BugsAction = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Link href="issues/new">
        <Button>create new</Button>
      </Link>
    </Flex>
  );
};

export default BugsAction;
