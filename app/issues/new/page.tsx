"use client";

import {
  TextFieldRoot,
  TextFieldInput,
  TextArea,
  Button,
} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const newBugsPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextFieldRoot>
        <TextFieldInput placeholder="Title…" />
      </TextFieldRoot>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newBugsPage;
