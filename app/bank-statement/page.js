"use client";
import Layout from "@/components/layout/Layout";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BankStatement() {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    statement1: null,
    statement2: null,
    statement3: null,
    statement4: null,
    consent: false,
    isCalifornia: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pandaDocUrl, setPandaDocUrl] = useState(null);
  const [showCompanyAlert, setShowCompanyAlert] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams.get("pandadoc_url");
    if (url) setPandaDocUrl(decodeURIComponent(url));
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleDrop = (e, statement) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prev) => ({ ...prev, [statement]: file }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);
    setShowCompanyAlert(false);

    const requiredStatements = formData.isCalifornia ? 4 : 3;
    const statements = [
      formData.statement1,
      formData.statement2,
      formData.statement3,
      ...(formData.isCalifornia ? [formData.statement4] : []),
    ].slice(0, requiredStatements);

    if (!formData.email) {
      setError("Email is required.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.companyName) {
      setError("Company Name is required.");
      setIsSubmitting(false);
      return;
    }
    if (statements.some((statement) => !statement)) {
      setError(`All ${requiredStatements} bank statements are required.`);
      setIsSubmitting(false);
      return;
    }
    if (!formData.consent) {
      setError("You must agree to data processing.");
      setIsSubmitting(false);
      return;
    }
    const maxSize = 100 * 1024 * 1024;
    for (const file of statements) {
      if (!file.type.includes("pdf")) {
        setError("Only PDF files are allowed.");
        setIsSubmitting(false);
        return;
      }
      if (file.size > maxSize) {
        setError("Each file must be under 100MB.");
        setIsSubmitting(false);
        return;
      }
    }

    let hubspotFailed = false;
    let hubspotErrorMsg = "";

    try {
      const submitData = new FormData();
      statements.forEach((statement, index) => {
        submitData.append(`statement${index + 1}`, statement);
      });
      submitData.append("consent", formData.consent.toString());
      submitData.append("isCalifornia", formData.isCalifornia.toString());

      const hubspotResponse = await fetch("/api/hubspot", {
        method: "POST",
        body: submitData,
      });
      const hubspotResult = await hubspotResponse.json();

      if (hubspotResult.error) {
        hubspotFailed = true;
        hubspotErrorMsg = "HubSpot: " + hubspotResult.error;
      } else {
        localStorage.setItem("hubspotFileIds", JSON.stringify(hubspotResult.fileIds));
      }

      if (!hubspotFailed) {
        const searchPayload = {
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "name",
                  operator: "EQ",
                  value: formData.companyName,
                },
              ],
            },
          ],
          properties: [
            "company_email",
            "name",
            "upload_bank_statements1",
            "upload_bank_statements2",
            "upload_bank_statements3",
            "upload_bank_statements4",
          ],
        };

        const searchResponse = await fetch("/api/hubspot-search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchPayload),
        });
        const searchResult = await searchResponse.json();

        if (!searchResult.results || searchResult.results.length === 0) {
          hubspotFailed = true;
          // hubspotErrorMsg = "HubSpot: Company not found. Please check the company name.";
          Swal.fire({
            icon: 'warning',
            title: 'Company Not Found',
            text: 'Please check the company name and try again.',
            timer: 3500,
            timerProgressBar: true,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            customClass: { popup: 'swal2-border-radius' }
          });
        } else {
          const companyId = searchResult.results[0].id;
          const fileUrls = hubspotResult.fileUrls || [];
          const patchPayload = {
            properties: {
              upload_bank_statements__1: fileUrls[0] || null,
              upload_bank_statements__2: fileUrls[1] || null,
              upload_bank_statements__3: fileUrls[2] || null,
              ...(formData.isCalifornia && fileUrls[3]
                ? { upload_bank_statements__4: fileUrls[3] }
                : {}),
            },
          };

          const patchResponse = await fetch("/api/hubspot-patch", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ companyId, payload: patchPayload }),
          });
          const patchResult = await patchResponse.json();

          if (patchResult.error) {
            hubspotFailed = true;
            hubspotErrorMsg = "HubSpot: Failed to associate files with company.";
          }
        }
      }
    } catch (err) {
      hubspotFailed = true;
      hubspotErrorMsg = "HubSpot: Exception - " + (err?.message || "");
    }

    try {
      const pandaDocResponse = await fetch("/api/hubspot-contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const pandaDocResult = await pandaDocResponse.json();

      if (pandaDocResult.PandaDoc_Share_URL && pandaDocResult.PandaDoc_Id) {
        if (hubspotFailed) {
          // alert("HubSpot Error: " + hubspotErrorMsg + "\nYou will still be redirected to contract signing.");
        }
        router.push(
          `/bank-statement?pandadoc_url=${encodeURIComponent(
            pandaDocResult.PandaDoc_Share_URL
          )}&pandadoc_id=${encodeURIComponent(pandaDocResult.PandaDoc_Id)}`
        );
        return;
      }

      if (pandaDocResult.error) {
        let combinedError = "";
        if (hubspotFailed) combinedError += hubspotErrorMsg + "\n";
        combinedError += "PandaDoc error: " + (pandaDocResult.error || "Unknown error") + (pandaDocResult.webhookBody ? ` (Details: ${pandaDocResult.webhookBody})` : "");
        setError(combinedError);
        return;
      }

      if (hubspotFailed) {
        setError(hubspotErrorMsg);
      } else {
        setSuccess("Bank statements uploaded and associated successfully!");
      }
    } catch (err) {
      let combinedError = "";
      if (hubspotFailed) combinedError += hubspotErrorMsg + "\n";
      combinedError += "PandaDoc: Failed to process the request. " + (err?.message || "");
      setError(combinedError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Upload Bank Statements">
        <section className="bank-statement-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {showCompanyAlert && (
                  <div
                    style={{
                      background: "#ff9800",
                      color: "white",
                      padding: "16px 24px",
                      borderRadius: 8,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                      margin: "16px 0",
                      position: "relative",
                      left: 0,
                      top: 0,
                      transition: "all 0.4s cubic-bezier(.43,.41,.22,.91)",
                      zIndex: 30,
                      fontWeight: 600,
                      fontSize: 17,
                      maxWidth: 430
                    }}
                  >
                    <span>
                      <i className="fas fa-exclamation-triangle" style={{marginRight: 8}} />
                      Company not found. Please check the company name!
                    </span>
                  </div>
                )}
                {pandaDocUrl ? (
                  <div style={{ margin: "40px 0" }}>
                    <h3 className="comment-one__title">Sign Your PandaDoc Contract</h3>
                    <iframe
                      src={pandaDocUrl}
                      width="100%"
                      height="800"
                      style={{ border: "none", borderRadius: "8px" }}
                      title="PandaDoc Contract"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="bank-statement-page__form">
                    <h3 className="comment-one__title">Upload Bank Statements</h3>
                    <p>
                      Upload PDF bank statements {formData.isCalifornia ? "for the last four months" : "for the last three months"} (max 100MB each). Required fields are marked *.
                      <br />
                      <strong>Note:</strong> Your data is secure. See our <a href="/privacy-policy">Privacy Policy</a>.
                    </p>
                    <form onSubmit={handleSubmit} className="comment-form">
                      {error && (
                        <p className="error-message">
                          <i className="fas fa-exclamation-circle"></i> {error}
                        </p>
                      )}
                      {success && (
                        <p className="success-message">
                          <i className="fas fa-check-circle"></i> {success}
                        </p>
                      )}
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box">
                            <label>Email*</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your email"
                              className="text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box">
                            <label>Company Name*</label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your company name"
                              className="text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box consent-box">
                            <label>
                              <input
                                type="checkbox"
                                name="isCalifornia"
                                checked={formData.isCalifornia}
                                onChange={handleInputChange}
                              />
                              California region (requires 4 bank statements)
                            </label>
                          </div>
                        </div>
                      </div>
                      {[1, 2, 3].map((num) => (
                        <div className="row" key={`statement${num}`}>
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <label>Bank Statement {num}*</label>
                              <div
                                className="file-upload-dropzone"
                                onDrop={(e) => handleDrop(e, `statement${num}`)}
                                onDragOver={handleDragOver}
                              >
                                <input
                                  type="file"
                                  name={`statement${num}`}
                                  accept=".pdf"
                                  onChange={handleInputChange}
                                  required
                                  id={`statement${num}`}
                                  className="file-upload-input"
                                />
                                <label htmlFor={`statement${num}`} className="file-upload-label">
                                  {formData[`statement${num}`] ? (
                                    <span>{formData[`statement${num}`].name}</span>
                                  ) : (
                                    <span>Drag & drop or click to upload PDF</span>
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {formData.isCalifornia && (
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <label>Bank Statement 4*</label>
                              <div
                                className="file-upload-dropzone"
                                onDrop={(e) => handleDrop(e, "statement4")}
                                onDragOver={handleDragOver}
                              >
                                <input
                                  type="file"
                                  name="statement4"
                                  accept=".pdf"
                                  onChange={handleInputChange}
                                  required
                                  id="statement4"
                                  className="file-upload-input"
                                />
                                <label htmlFor="statement4" className="file-upload-label">
                                  {formData.statement4 ? (
                                    <span>{formData.statement4.name}</span>
                                  ) : (
                                    <span>Drag & drop or click to upload PDF</span>
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box consent-box">
                            <label>
                              <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleInputChange}
                                required
                              />
                              I agree to the processing of my personal data.*
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__btn-box">
                            <button
                              type="submit"
                              className="thm-btn"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <i className="fas fa-spinner fa-spin"></i> Uploading...
                                </>
                              ) : (
                                "Upload Statements"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
