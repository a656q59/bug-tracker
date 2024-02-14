"use client";
// import { AlertDialogRoot, Button, Flex } from ;
import { Button, Flex } from "@radix-ui/themes";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";

// import {
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@radix-ui/react-alert-dialog";

const DeleteIssueButton = ({ bugId }: { bugId: number }) => {
  const router = useRouter();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button
          color="red"
          onClick={async () => {
            await axios.delete("/api/issues/" + bugId);
            router.push("/issues");
            router.refresh();
          }}
        >
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content>
          <div>
            <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>

            <AlertDialog.Description>
              Are you sure? This action cannot be undone.
            </AlertDialog.Description>

            <Flex mt="4" gap="3">
              <AlertDialog.Cancel asChild>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button variant="solid" color="red">
                  Delete
                </Button>
              </AlertDialog.Action>
            </Flex>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
