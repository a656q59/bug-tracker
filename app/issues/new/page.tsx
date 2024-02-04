"use client";

import {
  TextFieldRoot,
  TextFieldInput,
  TextArea,
  Button,
} from "@radix-ui/themes";
import React from "react";

const newBugsPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextFieldRoot>
        <TextFieldInput placeholder="Title…" />
      </TextFieldRoot>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newBugsPage;
