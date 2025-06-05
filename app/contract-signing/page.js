"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

export default function ContractSigningPage() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = sanitizeEmail(searchParams.get("customer-email2"));
    if (!email) {
      setError("Invalid or missing email.");
      setIsLoading(false);
      return;
    }

    const fetchPandaDoc = async () => {
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
          window.location.href = data.PandaDoc_Share_URL; // Redirect to PandaDoc URL
        } else {
          throw new Error("PandaDoc URL not found in response.");
        }
      } catch (err) {
        setError("Failed to load document. Please try again.");
        console.error("PandaDoc API error:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPandaDoc();
  }, [searchParams]);

  return (
    <Layout isFunnel={1} footerStyle={1}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {isLoading ? (
          <div>Loading document...</div>
        ) : error ? (
          <div style={{ color: "red" }}>{error}</div>
        ) : (
          <div>Redirecting to document...</div>
        )}
      </div>
    </Layout>
  );
}