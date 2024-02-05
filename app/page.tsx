"use client";
import React from "react";
import { LanguageButton } from "@/components/LanguageButton";
import { UploadButton } from "@/components/UploadButton";

export default function Home() {
  type Language = "english" | "chinese" | "malay" | "tamil";

  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>("english");
  const translations: {
    [key in Language]: {
      title: string;
      subtitle: string;
      select: string;
      upload: string;
      noFileText: string;
    };
  } = {
    english: {
      title: "Welcome to SG read already?",
      subtitle: "Summarise and translate your documents with ease.",
      select: "Select a File",
      upload: "Upload",
      noFileText: "No file selected",
    },
    chinese: {
      title: "欢迎来到 SG read already?",
      subtitle: "轻松总结和翻译您的文件.",
      select: "选择文件",
      upload: "上传",
      noFileText: "没有选择文件",
    },
    malay: {
      title: "Selamat datang ke SG read already?",
      subtitle: "Ringkaskan dan terjemahkan dokumen anda dengan.",
      select: "Pilih Fail",
      upload: "Muat naik",
      noFileText: "Tiada fail yang dipilih",
    },
    tamil: {
      title: "SG வாசித்தாயா?",
      subtitle: "உங்கள் ஆவணங்களை சுருக்கம் செய்து மொழிபெயர்க்கவும்.",
      select: "ஒரு கோப்பை தேர்ந்தெடு",
      upload: "பதிவேற்று",
      noFileText: "கோப்பு தேர்ந்தெடுக்கப்படவில்லை",
    },
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)]  flex-col items-center justify-evenly">
      <div className="w-8/12">
        <div className="max-h-12">
          <h1 className=" text-center text-3xl font-bold">
            {translations[selectedLanguage].title}
          </h1>
          <p className="mt-4 text-center text-lg">
            {translations[selectedLanguage].subtitle}
          </p>
        </div>
      </div>
      <div className="flex w-8/12 flex-col items-center justify-center gap-6">
        <LanguageButton onLanguageChange={handleLanguageChange} />
        <UploadButton
          selectText={translations[selectedLanguage].select}
          uploadText={translations[selectedLanguage].upload}
          noFileText={translations[selectedLanguage].noFileText}
          language={selectedLanguage}
        />
      </div>
    </main>
  );
}
