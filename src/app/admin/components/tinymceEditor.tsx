"use client";

import { Editor } from "@tinymce/tinymce-react";

interface TinymceEditorProps {
  value: string;
  handleChange: (content: string) => void;
  disabled?: boolean;
}

export default function TinymceEditor({
  value,
  handleChange,
  disabled = false,
}: TinymceEditorProps) {
  return (
    <Editor
      value={value}
      onEditorChange={handleChange}
      disabled={disabled}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      init={{
        elementpath: true,
        height: 300,
        menubar: "file edit view insert format table tools help",
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "print",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "paste",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent | removeformat | table | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

        // ✅ disable branding/footer
        branding: false,
        statusbar: false,
        browser_spellcheck: true,
        spellchecker_language: "en",
      }}
    />
  );
}
