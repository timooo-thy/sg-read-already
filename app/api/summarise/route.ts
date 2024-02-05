import OpenAI from "openai";
import { NextResponse } from "next/server";

interface BodyParams {
  file: string;
  language: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { file, language } = body as BodyParams;

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Elderies are having a hard time reading this document. I need to to summarise the document and translate it to ${language}, if necessary. Can you help me with that?
            Summarise the main points of the document, do not have any double quotations and ONLY RETURN just the translated summary.`,
          },

          {
            type: "image_url",
            image_url: {
              url: file,
            },
          },
        ],
      },
    ],
    max_tokens: 500,
    temperature: 0.3,
  });
  return NextResponse.json({ summary: response.choices[0].message.content });
}
