import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json(
        { error: "No email provided." },
        { status: 400 }
      );
    }
    const webhookUrl = "https://hook.us2.make.com/v36k2flo1s0r4krz3rwp2439m42i4avz";
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Company_Email: email }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "Failed to get PandaDoc contract from webhook.", webhookStatus: response.status, webhookBody: errorText },
        { status: 500 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", details: error.message },
      { status: 500 }
    );
  }
}
