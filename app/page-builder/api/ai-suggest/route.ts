import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { context } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return new Response("Missing OPENAI_API_KEY in environment", {
      status: 500,
    });
  }

  if (!context || typeof context !== "string") {
    return new Response("Missing or invalid `context` in body.", {
      status: 400,
    });
  }

  return streamText({
    model: openai("gpt-4-turbo"),
    messages: [
      {
        role: "user",
        content: `Suggest a short, clear page title for a form page about: "${context}"`,
      },
    ],
  });
}
