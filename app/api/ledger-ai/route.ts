import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const query = typeof body?.query === "string" ? body.query.trim() : "";

  if (!query) {
    return NextResponse.json({ error: "Please enter an accounting question." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        mode: "demo",
        answer:
          "Ledger AI is ready in demo mode. Add OPENAI_API_KEY to the server environment to enable live model responses.",
      },
      { status: 200 }
    );
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-5",
        input: [
          {
            role: "system",
            content:
              "You are The Ledger AI, an accounting technology explainer. Answer concisely and accurately through four lenses: workflow, controls, people, and financial reporting. Avoid giving personalized investment, tax, legal, or audit opinions. State when a point depends on jurisdiction or professional judgment.",
          },
          { role: "user", content: query },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "The AI service could not complete the request." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const answer =
      data.output_text ??
      data.output
        ?.flatMap((item: { content?: { text?: string }[] }) => item.content ?? [])
        ?.map((item: { text?: string }) => item.text ?? "")
        ?.join("\n") ??
      "No response was returned.";

    return NextResponse.json({ mode: "live", answer });
  } catch {
    return NextResponse.json(
      { error: "Ledger AI is temporarily unavailable. Please try again." },
      { status: 500 }
    );
  }
}
