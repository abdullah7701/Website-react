"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function BankStatement() {
  const [formData, setFormData] = useState({
    month1: null,
    month2: null,
    month3: null,
    consent: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : null,
    }));
  };

  const handleDrop = (e, month) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prev) => ({ ...prev, [month]: file }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    // Validate form
    if (!formData.month1 || !formData.month2 || !formData.month3) {
      setError("All three bank statements are required.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.consent) {
      setError("You must agree to data processing.");
      setIsSubmitting(false);
      return;
    }

    // Validate file types and sizes
    const maxSize = 100 * 1024 * 1024; // 100MB
    for (const file of [formData.month1, formData.month2, formData.month3]) {
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

    try {
      const submitData = new FormData();
      submitData.append("month1", formData.month1);
      submitData.append("month2", formData.month2);
      submitData.append("month3", formData.month3);
      submitData.append("consent", formData.consent.toString());

      const response = await fetch("/api/hubspot", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();
      if (result.error) {
        setError(result.error);
      } else {
        // Store file IDs in localStorage
        localStorage.setItem("hubspotFileIds", JSON.stringify(result.fileIds));
        setSuccess("Bank statements uploaded successfully!");
      }
    } catch (err) {
      setError("Failed to upload statements. Please try again.");
      console.error(err);
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
                <div className="bank-statement-page__form">
                  <h3 className="comment-one__title">Upload Last 3 Months Bank Statements</h3>
                  <p>
                    Upload PDF bank statements for the last three months (max 100MB each). Required fields are marked *.
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
                    {/* Month 1 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Month 1 Bank Statement*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "month1")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="month1"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="month1"
                              className="file-upload-input"
                            />
                            <label htmlFor="month1" className="file-upload-label">
                              {formData.month1 ? (
                                <span>{formData.month1.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Month 2 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Month 2 Bank Statement*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "month2")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="month2"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="month2"
                              className="file-upload-input"
                            />
                            <label htmlFor="month2" className="file-upload-label">
                              {formData.month2 ? (
                                <span>{formData.month2.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Month 3 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Month 3 Bank Statement*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "month3")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="month3"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="month3"
                              className="file-upload-input"
                            />
                            <label htmlFor="month3" className="file-upload-label">
                              {formData.month3 ? (
                                <span>{formData.month3.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Consent Checkbox */}
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
                    {/* Submit Button */}
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}