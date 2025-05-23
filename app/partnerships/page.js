"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PartnerWithUs() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Partner With Us">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">PARTNER WITH US</p>
                    </div>
                    <h2 className="section-title__title title-highlight">
                      Partner With Elite Funders
                    </h2>
                  </div>

                  <div className="about-three__iframe" style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <iframe
                      src="https://mini-serve.prd.heyflow.com/PBJMUnngd0Ioyd4RrdIP#start"
                      width="100%"
                      height="900"
                      frameBorder="0"
                      allowFullScreen
                      title="Partner With Us Form"
                      style={{ borderRadius: '8px' }}
                    ></iframe>
                  </div>

                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">Why Partner with Elite Funders?</h3>
                    <p className="about-three__text">
                      Elite Funders is built for ISOs, affiliates, and referral partners who want a smarter, faster, and more profitable way to fund deals. With access to 100+ lenders and an automated matching platform, we make it easy for you to close more business with less friction.
                    </p>

                    <h3 className="about-three__sub-title">What You Get as a Partner</h3>
                    <ul className="about-three__list">
                      <li>
                        <strong>Access to 100+ Lenders</strong>
                        <p className="about-three__text">Get unmatched reach across MCA, term loan, SBA, and line of credit products.</p>
                      </li>
                      <li>
                        <strong>Fast Approvals & High Approval Rates</strong>
                        <p className="about-three__text">Pre-qualify your clients with soft pulls and fund in 24–48 hours.</p>
                      </li>
                      <li>
                        <strong>Real-Time Deal Tracking</strong>
                        <p className="about-three__text">Stay updated on every stage of your submission with full transparency.</p>
                      </li>
                      <li>
                        <strong>Dedicated Partner Manager</strong>
                        <p className="about-three__text">Get hands-on support from our in-house team to maximize your results.</p>
                      </li>
                      <li>
                        <strong>Flexible Commission Options</strong>
                        <p className="about-three__text">Earn top-tier payouts with no volume requirements.</p>
                      </li>
                    </ul>

                    <h3 className="about-three__sub-title">Who It's For</h3>
                    <ul className="about-three__list">
                      <li>Independent Sales Organizations (ISOs)</li>
                      <li>Affiliate marketers with business owner traffic</li>
                      <li>CPAs, brokers, consultants, and service providers</li>
                      <li>Anyone with business owner referrals looking to monetize</li>
                    </ul>

                    <h3 className="about-three__sub-title">Why Elite Funders?</h3>
                    <ul className="about-three__list">
                      <li>Proprietary lender-matching system</li>
                      <li>White-label and co-branded tools available</li>
                      <li>High-converting funnel and funding experience</li>
                      <li>Support for stacked, first-time, or challenged credit deals</li>
                    </ul>

                    <h3 className="about-three__sub-title">Ready to Get Started?</h3>
                    <p className="about-three__text">
                      Submit the form above and our team will reach out with next steps. No upfront commitment. No minimums. Just results.
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Contact Us</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> (888) 343-1156<br />
                        <strong>📧</strong> <Link href="mailto:Partnerships@EliteFunders.com">Partnerships@EliteFunders.com</Link><br />
                        <strong>🕒</strong> 9 am – 6 pm (Monday – Friday)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}