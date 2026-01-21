"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function SmsTerms() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SMS Terms & Conditions">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">SMS TERMS & CONDITIONS</p>
                    </div>
                    <h2 className="section-title__title">
                      Elite Funders – 
                      <br /> SMS Terms & Conditions
                    </h2>
                  </div>
                  <p className="about-three__text">
                    By opting in to receive SMS messages from Elite Funders, you agree to receive text messages related to application updates, account notifications, and customer support communications.
                  </p>

                  {/* Centered Apply Now Button */}
                  <div className="about-three__btn-and-client" style={{ textAlign: 'center', margin: '30px 0' }}>
                    <div className="about-three__btn-box">
                      <Link href="/apply" className="about-three__btn thm-btn">
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  {/* Detailed Content Section */}
                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">Message Frequency</h3>
                    <p className="about-three__text">
                      Up to 4 messages per month (may vary based on account activity).
                    </p>

                    <h3 className="about-three__sub-title">Pricing Disclosure / Costs</h3>
                    <p className="about-three__text">
                      Message and data rates may apply depending on your mobile carrier and plan.
                    </p>

                    <h3 className="about-three__sub-title">How to Opt-Out</h3>
                    <p className="about-three__text">
                      You may opt out at any time by replying STOP to any message. You will receive confirmation of your opt-out.
                    </p>

                    <h3 className="about-three__sub-title">Customer Support</h3>
                    <p className="about-three__text">
                      For assistance, reply HELP or contact us at support@elitefunders.com
                    </p>

                    <h3 className="about-three__sub-title">Privacy Policy</h3>
                    <p className="about-three__text">
                      <a href="https://elitefunders.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://elitefunders.com/privacy-policy</a>
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Contact Us</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> +1 (888) 896-5559<br />
                        <strong>📧</strong> Loans@EliteFunders.com<br />
                        <strong>🕒</strong> Hours: 9 am – 6 pm, Monday – Friday
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