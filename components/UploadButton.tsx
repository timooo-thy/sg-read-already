"use client";
import { select } from "@nextui-org/react";
import React from "react";
import { FileTrigger, Button } from "react-aria-components";

interface ButtonTextProps {
  selectText: string;
  uploadText: string;
  noFileText: string;
}

export function UploadButton({
  selectText,
  uploadText,
  noFileText,
}: ButtonTextProps) {
  const [file, setFile] = React.useState<string[] | null>(null);
  const [fileURL, setFileURL] = React.useState<string | null>(null);

  const isDisabled = !file || file.length === 0;

  return (
    <>
      <FileTrigger
        acceptedFileTypes={[
          "image/png",
          "image/heic",
          "image/jpeg",
          "image/jpg",
          "application/pdf",
        ]}
        onSelect={(e) => {
          let files = Array.from(e || []);
          let filenames = files.map((file) => file.name);

          const file = URL.createObjectURL(files[0]);
          setFileURL(file);
          setFile(filenames);
        }}
      >
        <Button className="hover:bg-primary/90d h-8 w-[200px] rounded-md bg-primary px-3 text-primary-foreground shadow">
          {selectText}
        </Button>
        <Button
          isDisabled={isDisabled}
          className={`${isDisabled && "bg-gray-400"} hover:bg-primary/90d h-8 w-[200px] rounded-md bg-primary px-3 text-primary-foreground shadow`}
        >
          {uploadText}
        </Button>
      </FileTrigger>
      <div>
        {file && file.length > 0 ? (
          file.join(", ")
        ) : (
          <span className="text-gray-400">{noFileText}</span>
        )}
      </div>
    </>
  );
}
