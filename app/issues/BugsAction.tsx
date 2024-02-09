import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BugsAction = () => {
  return (
    <div className="mb-5">
      <Link href="issues/new">
        <Button>create new</Button>
      </Link>
    </div>
  );
};

export default BugsAction;
