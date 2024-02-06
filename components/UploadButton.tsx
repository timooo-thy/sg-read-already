"use client";
import { Toaster, toast } from "sonner";
import React from "react";
import { FileTrigger, Button } from "react-aria-components";
import { Spinner } from "@nextui-org/react";
import type { SummariseResponse } from "@/types/SummariseResponse";

interface UploadButtonProps {
  selectText: string;
  uploadText: string;
  noFileText: string;
  language: string;
}

export function UploadButton({
  selectText,
  uploadText,
  noFileText,
  language,
}: UploadButtonProps) {
  const [file, setFile] = React.useState<string[] | null>(null);
  const [fileURL, setFileURL] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const isDisabled = !file || file.length === 0;

  const summarise = async (file: string, language: string) => {
    setLoading(true);
    const response = await fetch("/api/summarise", {
      method: "POST",
      body: JSON.stringify({ file, language }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Failed to summarise. Please try again.");
      setLoading(false);
    } else {
      const data: SummariseResponse = await response.json();
      translate(data.summary);
    }
  };

  const translate = async (data: string) => {
    const response = await fetch("/api/translate", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Failed to translate. Please try again.");
    }

    const blob = await response.blob();

    const audioURL = URL.createObjectURL(blob);
    const audio = document.getElementById("audioPlayer") as HTMLAudioElement;
    audio.src = audioURL;

    audio.load();
    audio
      .play()
      .catch(() => console.error("Failed to play audio. Please try again."));
    setLoading(false);
  };

  return (
    <>
      <FileTrigger
        acceptedFileTypes={["image/png", "image/jpeg", "image/jpg"]}
        onSelect={(e) => {
          let files = Array.from(e || []);
          let filenames = files.map((file) => file.name);
          const reader = new FileReader();
          reader.onloadend = (e) => {
            let prefix = "";
            let base64String = e.target?.result as string;
            if (
              files[0].type === "image/jpeg" ||
              files[0].type === "image/jpg"
            ) {
              prefix = "data:image/jpeg;base64,";
            } else if (files[0].type === "image/png") {
              prefix = "data:image/png;base64,";
            }

            if (!base64String?.startsWith(prefix)) {
              base64String = prefix + base64String;
            }
            setFileURL(base64String);
          };
          reader.readAsDataURL(files[0]);
          toast.success("Upload successfully.");
          setFile(filenames);
        }}
      >
        <Button className="hover:bg-primary/90d h-8 w-[200px] rounded-md bg-primary px-3 text-primary-foreground shadow">
          {selectText}
        </Button>
      </FileTrigger>
      <Button
        isDisabled={isDisabled}
        onPress={async () => {
          if (fileURL) {
            await summarise(fileURL, language);
          }
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
      {loading && <Spinner />}
      <audio id="audioPlayer" controls></audio>
      <Toaster richColors />
    </>
  );
}
