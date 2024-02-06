import { Language } from "@/types/Language";

export const translations: {
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

export const frameworks: { value: Language; label: string }[] = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "chinese",
    label: "Chinese",
  },
  {
    value: "malay",
    label: "Malay",
  },
  {
    value: "tamil",
    label: "Tamil",
  },
];
