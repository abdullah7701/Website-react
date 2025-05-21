"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function MerchantCashAdvance() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Merchant Cash Advance">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">MERCHANT CASH ADVANCE</p>
                    </div>
                    <h2 className="section-title__title">
                      Fast, Flexible Funding
                      <br /> for Your Business
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Need fast capital for your business? Elite Funders provides quick, flexible Merchant Cash Advances — with approvals in 24–48 hours, minimal documentation, and no collateral required. Funding amounts range from $5,000 to $500,000+, based on your revenue and cash flow. We match you with the best offer from 100+ funders in our network using our proprietary lender-matching technology.
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
                    <h3 className="about-three__sub-title">What Is a Merchant Cash Advance?</h3>
                    <p className="about-three__text">
                      A Merchant Cash Advance (MCA) is an alternative financing option where your business receives a lump sum of capital in exchange for future business revenue. Unlike traditional loans, MCAs do not have fixed monthly payments or interest rates. Instead, the advance is repaid via fixed daily or weekly ACH payments automatically withdrawn from your business bank account. The repayment amount is determined based on your approved amount, term, and risk profile. MCAs are ideal for businesses needing working capital quickly, especially those who may not qualify for traditional loans.
                    </p>

                    <h3 className="about-three__sub-title">How It Works</h3>
                    <ul className="about-three__list">
                      <li><strong>Apply in Minutes</strong> – Submit a short application and 3–6 months of business bank statements.</li>
                      <li><strong>Get Matched</strong> – We instantly match you with the best MCA offers from 100+ direct funders.</li>
                      <li><strong>Review & Choose</strong> – Compare terms, fees, and funding amounts.</li>
                      <li><strong>Get Funded</strong> – Choose your offer and receive funds in as little as 24–48 hours.</li>
                    </ul>

                    <h3 className="about-three__sub-title">Key Benefits of Elite Funders MCAs</h3>
                    <ul className="about-three__list">
                      <li>Approvals within 24–48 hours</li>
                      <li>Funding amounts from $5,000 to $500,000+</li>
                      <li>No collateral or personal assets required</li>
                      <li>Soft credit pull — no impact on your score</li>
                      <li>Fixed daily or weekly ACH repayments</li>
                      <li>95% approval rate — we fund what banks decline</li>
                      <li>Minimal documentation required</li>
                    </ul>

                    <h3 className="about-three__sub-title">Who Qualifies for an MCA?</h3>
                    <p className="about-three__text">
                      Most businesses that meet the following criteria are eligible:
                    </p>
                    <ul className="about-three__list">
                      <li>Minimum $10,000+ in monthly revenue</li>
                      <li>At least 3–6 months in business</li>
                      <li>A U.S. business checking account</li>
                      <li>Consistent cash flow and deposit volume</li>
                      <li>Any credit profile — including challenged or high-risk</li>
                    </ul>

                    <h3 className="about-three__sub-title">Compare: MCA vs Traditional Loan</h3>
                    <div className="table-responsive" style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0', overflowX: 'auto' }}>
                      <table className="table table-striped table-bordered" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f8f9fa' }}>
                          <tr>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Feature</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Merchant Cash Advance</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Bank/Term Loan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: '12px' }}>Approval Time</td>
                            <td style={{ padding: '12px' }}>24–48 Hours</td>
                            <td style={{ padding: '12px' }}>Weeks–Months</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Credit Requirement</td>
                            <td style={{ padding: '12px' }}>Low</td>
                            <td style={{ padding: '12px' }}>High</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Collateral Needed</td>
                            <td style={{ padding: '12px' }}>No</td>
                            <td style={{ padding: '12px' }}>Usually Yes</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Repayment</td>
                            <td style={{ padding: '12px' }}>Daily/Weekly Fixed ACH</td>
                            <td style={{ padding: '12px' }}>Fixed Monthly Installments</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '12px' }}>Best For</td>
                            <td style={{ padding: '12px' }}>Fast capital, low credit, urgent needs</td>
                            <td style={{ padding: '12px' }}>Long-term use, low-risk profile</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="about-three__sub-title">Industries We Fund</h3>
                    <p className="about-three__text">
                      Elite Funders serves a wide range of industries, including but not limited to:
                    </p>
                    <ul className="about-three__list" style={{ columnCount: 2, columnGap: '20px' }}>
                      <li>Retail</li>
                      <li>Restaurants & Food Services</li>
                      <li>Auto Repair & Service</li>
                      <li>Transportation & Logistics</li>
                      <li>Construction & Contractors</li>
                      <li>Salons, Spas & Beauty</li>
                      <li>Healthcare & Medical Practices</li>
                      <li>eCommerce</li>
                      <li>Hospitality & Franchises</li>
                    </ul>
                    <p className="about-three__text">
                      If your business generates consistent revenue, we likely have a funding option for you.
                    </p>

                    <h3 className="about-three__sub-title">Why Choose Elite Funders</h3>
                    <ul className="about-three__list">
                      <li>Access to 100+ active MCA lenders</li>
                      <li>Proprietary matching algorithm to secure the best offers</li>
                      <li>High approval rates even for challenged credit</li>
                      <li>Fast, white-glove service with dedicated reps</li>
                      <li>Transparent pricing — no hidden fees</li>
                      <li>Repeat funding and renewal options available</li>
                    </ul>

                    <h3 className="about-three__sub-title">Frequently Asked Questions</h3>
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>What’s the difference between an MCA and a loan?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              An MCA is an advance based on your revenue, repaid via daily or weekly ACH withdrawals. It’s not a loan and doesn’t have fixed interest rates.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How quickly can I get funded?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Most businesses are approved same-day and funded within 24–48 hours after submitting complete docs.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>What are the repayment terms?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Repayments are made via fixed daily or weekly ACH payments from your business bank account over a term (typically 4–12 months).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Can I get approved with bad credit?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Yes. We work with all credit types. Approval is based more on revenue and cash flow than credit score.
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
                              No. We use a soft pull to check eligibility — it does not impact your personal or business credit score.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="about-three__sub-title">Have Questions or Ready to Apply?</h3>
                    <p className="about-three__text">
                      Call us anytime at <Link href="tel:8888965559">(888) 896-5559</Link><br />
                      Our funding advisors are ready to help you get approved and funded fast.
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
                  Get <span>Funded Fast</span> Today
                </h3>
                <p>
                  Apply Now and Receive Capital in as Little as 24 Hours
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