import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ bugId }: { bugId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${bugId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
