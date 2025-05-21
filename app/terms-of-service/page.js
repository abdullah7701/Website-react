"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms of Service">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">TERMS OF SERVICE</p>
                    </div>
                    <h2 className="section-title__title">
                      Terms of Service
                      <br /> for Elite Funders
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Effective Date: April 25, 2024<br />
                    Last Updated: May 19, 2025
                  </p>
                  <p className="about-three__text">
                    These Terms of Service (“Terms”) govern your access to and use of www.elitefunders.com (the “Site”) and any related services (collectively, the “Services”) offered by Elite Funders (“Company,” “we,” “us,” or “our”). By accessing or using the Site, submitting an application, or engaging with our Services, you agree to be bound by these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree, do not use our Services.
                  </p>

                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">1. Eligibility</h3>
                    <p className="about-three__text">
                      Our Services are only available to individuals who are at least 18 years old and operate a business in the United States. By using our Site, you represent that you meet these criteria.
                    </p>

                    <h3 className="about-three__sub-title">2. Use of Services</h3>
                    <p className="about-three__text">
                      Elite Funders operates a business funding marketplace. We help connect small business owners, ISOs, and referral partners to potential funding opportunities via our lender network. We are not a direct lender, bank, or financial advisor.
                    </p>
                    <p className="about-three__text">
                      You understand and agree that:
                    </p>
                    <ul className="about-three__list">
                      <li>The information you provide must be complete, accurate, and truthful.</li>
                      <li>You authorize us to use, evaluate, and share your application data with lenders and funding partners in our network.</li>
                      <li>Submitting an application does not guarantee an offer or approval of funding.</li>
                    </ul>

                    <h3 className="about-three__sub-title">3. Consent to Communications</h3>
                    <p className="about-three__text">
                      By submitting your information through our Site or any application form, you expressly consent to receive calls, emails, and text messages (including autodialed or pre-recorded messages) from Elite Funders, its agents, and its funding partners regarding your inquiry and related services.
                    </p>
                    <p className="about-three__text">
                      You may opt out of marketing messages at any time by emailing <Link href="mailto:privacy@elitefunders.com">privacy@elitefunders.com</Link> or using unsubscribe links where applicable.
                    </p>

                    <h3 className="about-three__sub-title">4. Data Collection and Privacy</h3>
                    <p className="about-three__text">
                      We collect, store, and share user information in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>. This includes personal, business, and financial data that may be reviewed by funding partners. You acknowledge and agree that:
                    </p>
                    <ul className="about-three__list">
                      <li>We may request credit reports and banking information from third-party sources.</li>
                      <li>We may securely transmit this information to one or more lenders for consideration.</li>
                      <li>We take steps to protect your information but cannot guarantee absolute security.</li>
                    </ul>

                    <h3 className="about-three__sub-title">5. No Guarantee of Approval or Offers</h3>
                    <p className="about-three__text">
                      Elite Funders does not guarantee:
                    </p>
                    <ul className="about-three__list">
                      <li>Approval for any funding product</li>
                      <li>A specific rate, term, or funding amount</li>
                      <li>The success of an application through any lender</li>
                    </ul>
                    <p className="about-three__text">
                      Funding terms are determined solely by the third-party lender, and you are responsible for reviewing and understanding their terms before proceeding.
                    </p>

                    <h3 className="about-three__sub-title">6. Limitation of Liability</h3>
                    <p className="about-three__text">
                      To the fullest extent permitted by law, Elite Funders shall not be liable for any damages resulting from:
                    </p>
                    <ul className="about-three__list">
                      <li>Your use of the Site or Services</li>
                      <li>Interactions with any funding provider</li>
                      <li>Inaccuracies in any data or recommendations</li>
                      <li>Delays in funding, declined applications, or lost opportunities</li>
                    </ul>
                    <p className="about-three__text">
                      In no event shall our total liability exceed $100.00 USD.
                    </p>

                    <h3 className="about-three__sub-title">7. User Responsibilities</h3>
                    <p className="about-three__text">
                      By using our Services, you agree not to:
                    </p>
                    <ul className="about-three__list">
                      <li>Submit false, misleading, or incomplete information</li>
                      <li>Use the Site for fraudulent or unlawful purposes</li>
                      <li>Resell, reproduce, or exploit any portion of the Service without authorization</li>
                      <li>Interfere with system functionality or security</li>
                    </ul>

                    <h3 className="about-three__sub-title">8. Intellectual Property</h3>
                    <p className="about-three__text">
                      All content on our Site—including branding, logos, text, and designs—is the intellectual property of Elite Funders or its licensors. You may not copy, reproduce, or distribute any materials without written permission.
                    </p>

                    <h3 className="about-three__sub-title">9. Third-Party Links</h3>
                    <p className="about-three__text">
                      Our Site may include links to third-party websites or services. We are not responsible for the privacy, content, or practices of those external platforms.
                    </p>

                    <h3 className="about-three__sub-title">10. Modifications to Terms</h3>
                    <p className="about-three__text">
                      We may revise these Terms at any time. Updates will be posted on this page and apply upon posting. Your continued use of the Site means you accept the updated Terms.
                    </p>

                    <h3 className="about-three__sub-title">11. Termination</h3>
                    <p className="about-three__text">
                      We reserve the right to suspend or terminate your access to our Services at our discretion, without notice, for any violation of these Terms.
                    </p>

                    <h3 className="about-three__sub-title">12. Governing Law</h3>
                    <p className="about-three__text">
                      These Terms are governed by the laws of the State of Florida. Any legal claims must be filed in courts located in Miami-Dade County, Florida.
                    </p>

                    <h3 className="about-three__sub-title">13. Contact Information</h3>
                    <p className="about-three__text">
                      If you have any questions about these Terms, contact us at:<br />
                      Elite Funders<br />
                      9840 SW 77th Ave, STE 203<br />
                      Miami, FL 33156<br />
                      Email: <Link href="mailto:privacy@elitefunders.com">privacy@elitefunders.com</Link><br />
                      Phone: <Link href="tel:8888965559">(888) 896-5559</Link>
                    </p>
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