"use client";
// import { AlertDialogRoot, Button, Flex } from ;
import { Button, Flex } from "@radix-ui/themes";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

// import {
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@radix-ui/react-alert-dialog";

const DeleteIssueButton = ({ bugId }: { bugId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button color="red">Delete Issue</Button>
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
                  Revoke access
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

// import React from "react";
// import * as AlertDialog from "@radix-ui/react-alert-dialog";

// const DeleteIssueButton = ({ bugId }: { bugId: number }) => (
//   <AlertDialog.Root>
//     <AlertDialog.Trigger asChild>
//       <Button color="red">Delete Issue</Button>
//     </AlertDialog.Trigger>
//     <AlertDialog.Portal>
//       <AlertDialog.Overlay className="AlertDialogOverlay" />

//       <AlertDialog.Content className="AlertDialogContent">
//         <AlertDialog.Title className="AlertDialogTitle">
//           Are you absolutely sure?
//         </AlertDialog.Title>
//         <AlertDialog.Description className="AlertDialogDescription">
//           This action cannot be undone. This will permanently delete your
//           account and remove your data from our servers.
//         </AlertDialog.Description>
//         <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
//           <AlertDialog.Cancel asChild>
//             <Button variant="soft" color="gray">
//               Cancel
//             </Button>
//           </AlertDialog.Cancel>
//           <AlertDialog.Action asChild>
//             <Button variant="solid" color="red">
//               Revoke access
//             </Button>
//           </AlertDialog.Action>
//         </div>
//       </AlertDialog.Content>
//     </AlertDialog.Portal>
//   </AlertDialog.Root>
// );

// export default DeleteIssueButton;
