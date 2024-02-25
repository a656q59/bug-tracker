import Image from "next/image";
import prisma from "@/prisma/client";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";

export default async function Home() {
  const open = await prisma.bug.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.bug.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.bug.count({ where: { status: "CLOSED" } });
  return <IssueSummary open={open} inProgress={inProgress} closed={5} />;
}
