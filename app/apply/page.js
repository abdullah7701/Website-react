"use client";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function ApplicationFormPage() {
  useEffect(() => {
    window.location.href = "https://app.elitefunders.com"; // Immediate redirect
  }, []);

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
        <div>Redirecting...</div>
      </div>
    </Layout>
  );
}