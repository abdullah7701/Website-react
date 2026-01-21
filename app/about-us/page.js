"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function AboutEliteFunders() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Elite Funders">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">ABOUT US</p>
                    </div>
                    <h2 className="section-title__title">
                      Welcome to Elite Funders
                      <br /> Your Trusted Financing Partner
                    </h2>
                  </div>
                  <p className="about-three__text">
                    We specialize in providing customized funding options for entrepreneurs and small business owners across various industries. Our mission is simple: to empower businesses like yours with the financial resources needed to grow, scale, and succeed in today’s competitive market.
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
                    <h3 className="about-three__sub-title">Why Choose Elite Funders?</h3>
                    <ul className="about-three__list">
                      <li>
                        <strong>Tailored Financing Solutions</strong>: Every business is unique, and so are its financial needs. At Elite Funders, we offer personalized funding options designed to align with your specific goals—whether it’s expansion, inventory, payroll, or working capital.
                      </li>
                      <li>
                        <strong>Fast and Hassle-Free Process</strong>: We know that time is money in business. That’s why our streamlined application process ensures quick decisions and fast funding, often on the same day as approval. No unnecessary paperwork, no lengthy waits—just the capital you need, when you need it.
                      </li>
                      <li>
                        <strong>Transparent and Honest Approach</strong>: We believe in 100% transparency. You’ll always receive clear terms, no hidden fees, and straightforward communication at every step of the process. No surprises—just funding you can trust.
                      </li>
                      <li>
                        <strong>Dedicated Customer Support</strong>: Our team of experienced financial specialists is here to guide you through the funding process. Whether you need help choosing the right financing option or have questions about your application, we’re committed to providing the support and expertise you deserve.
                      </li>
                    </ul>

                    <h3 className="about-three__sub-title">Our Commitment to Your Success</h3>
                    <p className="about-three__text">
                      At Elite Funders, we don’t just provide financing—we build lasting relationships. We take pride in helping businesses navigate financial challenges, seize new opportunities, and achieve long-term success.
                    </p>

                    <h3 className="about-three__sub-title">Get Funded Today</h3>
                    <p className="about-three__text">
                      APPLY NOW to explore our financing options and see how we can help your business grow and thrive. Whether you’re looking to expand, improve cash flow, or invest in new opportunities, Elite Funders is here to support you every step of the way.
                    </p>
                    <p className="about-three__text">
                      Join thousands of entrepreneurs who trust Elite Funders as their go-to financial partner. Experience the difference that personalized service, speed, and expertise can make for your business.
                    </p>

                    <h3 className="about-three__sub-title">Talk to a Specialist</h3>
                    <p className="about-three__text">
                      Elite Funders is here to help you find the best financing solution for your business. Our team of specialists is ready to guide you through the process and answer your questions.
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Get in Touch</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> (888) 896-5559<br />
                        <strong>📧</strong> CustomerService@EliteFunders.com<br />
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