import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.QUOTES_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing Quotes API key" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    return NextResponse.json({
      text: data[0].quote,
      author: data[0].author,
    });
  } catch (error) {
    console.error("Error fetching quote:", error);
    return NextResponse.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}
