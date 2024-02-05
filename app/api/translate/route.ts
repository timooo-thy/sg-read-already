interface BodyParams {
  data: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { data } = body as BodyParams;
  const options = {
    method: "POST",
    headers: {
      "xi-api-key": process.env.ELEVENLABS_API_KEY as string,
      "Content-Type": "application/json",
    },
    body: `{"model_id":"eleven_multilingual_v2","text":"${data}","voice_settings":{"stability":0.7,"similarity_boost":0.7}}`,
  };

  const response = await fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream",
    options,
  );

  if (!response.ok) {
    return new Response("Error fetching audio", { status: 500 });
  }

  const blob = await response.blob();

  const headers = new Headers();
  headers.append("Content-Type", "audio/mp3");

  return new Response(blob, {
    status: 200,
    headers: headers,
  });
}
