import { Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ bugId }: { bugId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
