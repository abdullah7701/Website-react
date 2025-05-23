"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function BusinessLinesOfCredit() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Business Lines of Credit">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">BUSINESS LINES OF CREDIT</p>
                    </div>
                    <h2 className="section-title__title">
                      Flexible Business Lines
                      <br /> of Credit for Small Businesses
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Need flexible access to working capital? Elite Funders helps businesses unlock fast, revolving lines of credit — with approvals in 24 hours and credit limits up to $250,000. Use what you need, when you need it — and only pay interest on what you draw. Whether you're covering payroll, buying inventory, or managing seasonal swings, our business lines of credit give you the control and flexibility to keep your business moving forward.
                  </p>

                  {/* Centered Apply Now Button */}
                  <div className="about-three__btn-and-client" style={{ textAlign: 'center', margin: '30px 0' }}>
                    <div className="about-three__btn-box">
                      <Link href="/apply" className="about-three__btn thm-btn">
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">What Is a Business Line of Credit?</h3>
                    <p className="about-three__text">
                      A business line of credit is a revolving funding option that allows you to borrow, repay, and reuse funds as needed — similar to a business credit card, but often with higher limits and lower rates. You’re approved for a set credit limit, and you can draw any amount up to that limit at any time. As you repay the balance, your available credit is restored. Unlike traditional loans, you only pay interest on the portion you actually use — not the entire credit line.
                    </p>

                    <h3 className="about-three__sub-title">How It Works</h3>
                    <ul className="about-three__list">
                      <li><strong>Apply Online</strong> – Submit a quick application and recent bank statements.</li>
                      <li><strong>Get Approved</strong> – Receive a revolving credit line up to $250,000.</li>
                      <li><strong>Draw Funds Anytime</strong> – Use the capital when you need it — for any purpose.</li>
                      <li><strong>Only Pay for What You Use</strong> – Interest only accrues on drawn funds.</li>
                      <li><strong>Replenish As You Repay</strong> – Reuse the line again and again.</li>
                    </ul>

                    <h3 className="about-three__sub-title">Benefits of a Business Line of Credit</h3>
                    <ul className="about-three__list">
                      <li>Flexible Capital Access – Draw funds when needed</li>
                      <li>Only Pay Interest on What You Use</li>
                      <li>Revolving Credit – Replenishes as you repay</li>
                      <li>Helps Manage Cash Flow</li>
                      <li>Use for Any Business Purpose</li>
                      <li>No Prepayment Penalties</li>
                      <li>Fast Approvals – 24–72 Hours</li>
                      <li>Soft Credit Pull for Pre-Approval</li>
                    </ul>

                    <h3 className="about-three__sub-title">Who Qualifies?</h3>
                    <p className="about-three__text">
                      Our lines of credit are available to a wide range of businesses. Minimum criteria include:
                    </p>
                    <ul className="about-three__list">
                      <li>$10,000+ monthly business revenue</li>
                      <li>6+ months in business</li>
                      <li>U.S. business checking account</li>
                      <li>Fair to excellent credit (typically 600+ FICO)</li>
                      <li>Low to moderate risk industries preferred</li>
                    </ul>

                    <h3 className="about-three__sub-title">Common Use Cases</h3>
                    <ul className="about-three__list">
                      <li>Purchasing inventory or supplies</li>
                      <li>Meeting payroll or vendor obligations</li>
                      <li>Bridging seasonal slowdowns</li>
                      <li>Emergency expenses</li>
                      <li>Marketing and customer acquisition</li>
                      <li>Business expansion or upgrades</li>
                    </ul>

                    <h3 className="about-three__sub-title">Compare: Line of Credit vs. Term Loan</h3>
                    <div className="table-responsive" style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0', overflowX: 'auto' }}>
                      <table className="table table-striped table-bordered" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f8f9fa' }}>
                          <tr>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Feature</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Business Line of Credit</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Term Loan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: '12px' }}>Fund Access</td>
                            <td style={{ padding: '12px' }}>On-demand, flexible draws</td>
                            <td style={{ padding: '12px' }}>Full lump sum upfront</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Repayment</td>
                            <td style={{ padding: '12px' }}>Only on what you use</td>
                            <td style={{ padding: '12px' }}>Full loan with fixed terms</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Flexibility</td>
                            <td style={{ padding: '12px' }}>High</td>
                            <td style={{ padding: '12px' }}>Low</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Best For</td>
                            <td style={{ padding: '12px' }}>Ongoing working capital needs</td>
                            <td style={{ padding: '12px' }}>One-time major expenses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="about-three__sub-title">Industries We Support</h3>
                    <p className="about-three__text">
                      Elite Funders works with a wide range of industries including:
                    </p>
                    <ul className="about-three__list" style={{ columnCount: 2, columnGap: '20px' }}>
                      <li>Retail & eCommerce</li>
                      <li>Professional Services</li>
                      <li>Construction & Contractors</li>
                      <li>Medical & Healthcare Practices</li>
                      <li>Marketing & Agencies</li>
                      <li>Transportation & Logistics</li>
                      <li>Food Services</li>
                      <li>Beauty & Salons</li>
                      <li>And more…</li>
                    </ul>

                    <h3 className="about-three__sub-title">Why Choose Elite Funders</h3>
                    <ul className="about-three__list">
                      <li>Access to 100+ business credit lenders</li>
                      <li>Soft credit pull for pre-approval</li>
                      <li>Funding in as little as 1–3 business days</li>
                      <li>Transparent terms — no hidden fees</li>
                      <li>Dedicated funding advisors to guide you</li>
                      <li>Custom credit options based on your business profile</li>
                    </ul>

                    <h3 className="about-three__sub-title">Frequently Asked Questions</h3>
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How does a business line of credit work?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              You’re approved for a set credit limit. Draw what you need, when you need it. Repay and reuse as needed.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How is this different from a business loan?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              A loan gives you a lump sum upfront. A line of credit gives you ongoing access to funds as needed — with interest only on the amount used.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How fast can I get approved and funded?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Pre-approvals are often same-day. Most clients are fully funded within 24 to 72 hours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Will this affect my credit?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Our pre-approval uses a soft pull, so there’s no impact on your credit score.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Can I pay off early or reuse the funds?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Yes. You can repay early without penalties and reuse your credit line as much as needed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="about-three__sub-title">Have Questions or Ready to Apply?</h3>
                    <p className="about-three__text">
                      Call us anytime at <Link href="tel:8888965559">(888) 896-5559</Link><br />
                      Our funding advisors are available to help you unlock flexible capital fast.
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Contact Us</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> <Link href="tel:8888965559">(888) 896-5559</Link><br />
                        <strong>📧</strong> <Link href="mailto:Loans@EliteFunders.com">Loans@EliteFunders.com</Link><br />
                        <strong>🕒</strong> 9 am – 6 pm, Monday – Friday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-one cta-five" style={{ marginTop: '40px' }}>
          <div className="container">
            <div className="cta-one__inner" style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', position: 'relative' }}>
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage: "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get <span>Flexible Capital</span> Today
                </h3>
                <p>
                  Apply Now and Access Your Credit Line in as Little as 24 Hours
                </p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/apply" className="cta-one__btn thm-btn">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}