"use client";

import {
  TextFieldRoot,
  TextFieldInput,
  TextArea,
  Button,
  Callout,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { bugSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import delay from "delay";
import { Bug } from "@prisma/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
type IssueFormData = z.infer<typeof bugSchema>;

interface Props {
  bug?: Bug;
}

const IssueForm = ({ bug }: Props) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(bugSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (bug) {
        await axios.patch("/api/issues/" + bug.id, data);
        // console.log("bug" + bug + "data" + data);
      } else await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);

      setError("An unexpected error occured");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3" onSubmit={onSubmit}>
        <TextFieldRoot>
          <TextFieldInput
            defaultValue={bug?.title}
            placeholder="Title…"
            {...register("title")}
          />
        </TextFieldRoot>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={bug?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          {bug ? "Update the issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
