import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const accessToken = "pat-na1-0ee45f8f-1493-4507-ba13-03f84a20d1cd";
  const formData = await request.formData();
  const month1 = formData.get("month1");
  const month2 = formData.get("month2");
  const month3 = formData.get("month3");
  const consent = formData.get("consent") === "true";

  if (!month1 || !month2 || !month3 || !consent) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    const uploadFile = async (file, fileName) => {
        const fileFormData = new FormData();
        fileFormData.append("file", file, fileName);
        fileFormData.append("options", JSON.stringify({
          access: "PUBLIC_INDEXABLE",
          overwrite: false,
          duplicateValidationStrategy: "NONE",
          duplicateValidationScope: "EXACT_FOLDER"
        }));
        fileFormData.append("folderId", "189156370602");
      
        const response = await axios.post(
          "https://api.hubapi.com/filemanager/api/v3/files/upload",
          fileFormData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response.data;
      };
      

    const timestamp = Date.now();
    const [file1, file2, file3] = await Promise.all([
      uploadFile(month1, `month1-${timestamp}.pdf`),
      uploadFile(month2, `month2-${timestamp}.pdf`),
      uploadFile(month3, `month3-${timestamp}.pdf`),
    ]);

    const fileIds = {
      month1: file1.id,
      month2: file2.id,
      month3: file3.id,
    };

    console.log("Files uploaded successfully:", fileIds);
    return NextResponse.json({ fileIds });
  } catch (error) {
    console.error("HubSpot API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      correlationId: error.response?.data?.correlationId,
    });
    return NextResponse.json(
      { error: error.response?.data?.message || "Failed to upload files." },
      { status: error.response?.status || 500 }
    );
  }
}