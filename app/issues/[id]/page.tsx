import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
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
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect bug={bug} />
            <EditIssueButton bugId={bug.id} />
            <DeleteIssueButton bugId={bug.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const issue = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: issue?.title,
    description: "details of issue" + issue?.id,
  };
}
