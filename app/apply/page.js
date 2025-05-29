"use client";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";

const sanitizeEmail = (str) => {
  if (typeof str !== "string") return "";
  let email = str.trim().replace(/^"+|"+$/g, "").replace(/\\"/g, "");
  email = email.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9@.]+$/g, "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "";
  }
  return email;
};

export default function ApplicationFormPage() {
  const [pandaDocUrl, setPandaDocUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://snow-rodent-caraway.heyflow.site") return;
      const data = event.data;
      let email = null;
      if (typeof data === "string" && data.includes("customer-email2")) {
        const urlPart = data.includes("?") ? data.split("?")[1] : data;
        const urlParams = new URLSearchParams(urlPart);
        const rawEmail = urlParams.get("customer-email2");
        email = sanitizeEmail(rawEmail);
      } else if (data && (data.email || data.customerEmail2)) {
        const rawEmail = data.email || data.customerEmail2;
        email = sanitizeEmail(rawEmail);
      }
      if (email) {
        fetchPandaDoc(email);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const fetchPandaDoc = async (email) => {
    setIsLoading(true);
    const apiUrl = "https://hook.us2.make.com/v36k2flo1s0r4krz3rwp2439m42i4avz";
    const payload = { Company_Email: email };
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.PandaDoc_Share_URL) {
        setPandaDocUrl(data.PandaDoc_Share_URL);
      }
    } catch (error) {
      // Optionally, handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout isFunnel={1} footerStyle={1}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            height: "850px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              Loading PandaDoc...
            </div>
          ) : !pandaDocUrl ? (
            <iframe
              ref={iframeRef}
              src="https://snow-rodent-caraway.heyflow.site/elite-funders-application"
              width="100%"
              height="850"
              style={{ border: "none", borderRadius: "8px" }}
              title="Elite Funders Application"
            />
          ) : (
            <iframe
              ref={iframeRef}
              src={pandaDocUrl}
              width="100%"
              height="850"
              style={{ border: "none", borderRadius: "8px" }}
              title="PandaDoc Contract"
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
