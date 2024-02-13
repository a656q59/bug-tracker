import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
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
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-3">
        <IssueDetails bug={bug} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton bugId={bug.id} />
          <DeleteIssueButton bugId={bug.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
