import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!bug) return notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails bug={bug} />
      </Box>
      <Box>
        <EditIssueButton bugId={bug.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
