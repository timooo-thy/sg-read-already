"use client";
import React from "react";
import { FileTrigger, Button } from "react-aria-components";
import { Progress } from "@/components/ui/progress";

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
  const [progress, setProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);

  const isDisabled = !file || file.length === 0;

  React.useEffect(() => {
    if (isUploading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 5;
          return nextProgress;
        });
      }, 100);

      return () => clearInterval(timer);
    }

    if (progress == 100) {
      setIsUploading(false);
    }
  }, [isUploading, progress]);

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
      </FileTrigger>
      <Button
        isDisabled={isDisabled}
        onPress={() => {
          setIsUploading(true);
          setProgress(-10);
        }}
        className={`${isDisabled ? "bg-gray-400" : "bg-primary"} hover:bg-primary/90d h-8 w-[200px] rounded-md  px-3 text-primary-foreground shadow`}
      >
        {uploadText}
      </Button>
      <div>
        {file && file.length > 0 ? (
          file.join(", ")
        ) : (
          <span className="text-gray-400">{noFileText}</span>
        )}
      </div>
      <Progress value={progress} className="transition-wid" />
    </>
  );
}
