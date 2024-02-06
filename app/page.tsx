"use client";
import { useState, FC } from "react";
import { LanguageButton } from "@/components/LanguageButton";
import { UploadButton } from "@/components/UploadButton";
import { translations } from "@/app/translations";
import type { Language } from "@/types/Language";

const Home: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <main className="flex h-[calc(100dvh-64px)]  flex-col items-center justify-evenly">
      <div className="w-8/12">
        <h1 className=" text-center text-3xl font-bold">
          {translations[selectedLanguage].title}
        </h1>
        <p className="mt-4 text-center text-lg">
          {translations[selectedLanguage].subtitle}
        </p>
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
};

export default Home;
