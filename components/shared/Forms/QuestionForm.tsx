"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { questionsSchema } from "@/lib/validations";

import Image from "next/image";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Badge } from "@/components/ui/badge";
import { createQuestion } from "@/lib/actions/question.actions";

const type: any = "edit";

const QuestionForm = () => {
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof questionsSchema>>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  async function onSubmit(values: z.infer<typeof questionsSchema>) {
    setIsSubmitting(true);

    try {
      // make call to create question
      await createQuestion(values);
    } catch (error) {
      // handle error
    }

    setIsSubmitting(false);
  }

  function onInputKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  }

  function handleTagRemove(tag: string, field: any) {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you're asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => {
                    field.onChange(content);
                  }}
                  value={field.value}
                  apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
                  init={{
                    menubar: false,
                    plugins:
                      "advlist autolink lists link image charmap preview anchor searchreplace visualblocks codesample fullscreen insertdatetime media table",
                    toolbar:
                      "undo redo | codesample | bold italic underline strikethrough forecolor | link image media table | checklist numlist bullist indent outdent",
                    content_style:
                      "body { font-family: Inter; font-size: 16px } ",
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum of 100 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    onKeyDown={(e) => onInputKeyDown(e, field)}
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  />
                  <div className="flex-start mt-2.5 gap-2.5">
                    {field.value.length > 0 &&
                      field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="background-light800_dark300 subtle-medium text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        >
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="close icon"
                            width={12}
                            height={12}
                            className="cursor-pointer object-contain invert-0 dark:invert"
                            onClick={() => handleTagRemove(tag, field)}
                          />
                        </Badge>
                      ))}
                  </div>
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to help others find your question and get help
                quicker.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="primary-gradient w-fit !text-light-900"
        >
          {isSubmitting ? (
            <>{type === "edit" ? "Updating..." : "Submitting..."}</>
          ) : (
            <>{type === "edit" ? "Update Question" : "Post Question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};
export default QuestionForm;
