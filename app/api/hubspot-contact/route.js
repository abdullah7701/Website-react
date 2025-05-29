import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const apiUrl = "https://hook.us2.make.com/v36k2flo1s0r4krz3rwp2439m42i4avz";
    const payload = { Company_Email: email };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`PandaDoc API error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.PandaDoc_Share_URL) {
      throw new Error("PandaDoc_Share_URL not found in response");
    }

    return NextResponse.json({
      Session_Id: data.Session_Id,
      PandaDoc_Id: data.PandaDoc_Id,
      PandaDoc_Share_URL: data.PandaDoc_Share_URL,
    });
  } catch (error) {
    console.error("PandaDoc API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch PandaDoc URL." },
      { status: 500 }
    );
  }
}