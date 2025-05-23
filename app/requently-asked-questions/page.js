"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: null,
  });

  const handleToggle = (key) => {
    setIsActive({
      status: isActive.key === key ? !isActive.status : true,
      key: key,
    });
  };

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          id: 1,
          question: "Will applying affect my credit?",
          answer: "No. We only use a soft credit pull to check your eligibility, which means there’s absolutely no impact on your credit score.",
        },
        {
          id: 2,
          question: "How fast can I get funded?",
          answer: "You can get approved the same day and funded in as little as 24–48 hours after selecting your offer.",
        },
        {
          id: 3,
          question: "What do I need to apply?",
          answer: "You’ll just need your business details and 3–6 months of recent bank statements. No collateral or lengthy paperwork required.",
        },
        {
          id: 4,
          question: "How much can I get approved for?",
          answer: "You can get approved for anywhere from $5,000 to $2,000,000, based on your business’s revenue, cash flow, and deposit activity.",
        },
        {
          id: 5,
          question: "Can I get funding if I already have other loans or advances?",
          answer: "Yes. Many of our lenders offer second, third, or even fourth position funding—even if you already have active advances—depending on your cash flow.",
        },
        {
          id: 6,
          question: "How do repayments work?",
          answer: "Most repayment plans involve daily or weekly ACH deductions, automatically pulled from your business account. We’ll match you with a program that fits your cash flow.",
        },
        {
          id: 7,
          question: "Why choose Elite Funders?",
          answer: "Elite Funders gives you access to 100+ trusted lenders, fast approvals, and personalized support—all with one application and zero pressure.",
        },
        {
          id: 8,
          question: "Do I need collateral?",
          answer: "No. Most of our programs are unsecured, which means you don’t need to pledge any assets or collateral to qualify.",
        },
        {
          id: 9,
          question: "Can I apply with bad credit?",
          answer: "Yes. Even if your credit isn’t perfect, we work with lenders who focus more on your revenue and business performance.",
        },
        {
          id: 10,
          question: "What can I use the funds for?",
          answer: "Use your funds for whatever your business needs—payroll, inventory, marketing, equipment, or growth. It’s your capital, your way.",
        },
      ],
    },
    {
      title: "Application & Eligibility",
      questions: [
        {
          id: 11,
          question: "Can I apply if I’ve been turned down elsewhere?",
          answer: "Yes. Many of our clients were declined by banks or other lenders before getting funded through our network.",
        },
        {
          id: 12,
          question: "Do you fund sole proprietors or DBAs?",
          answer: "Yes. We work with all legal business types including sole proprietors, LLCs, corporations, and DBAs.",
        },
        {
          id: 13,
          question: "Can I apply if my business is home-based or mobile?",
          answer: "Absolutely. As long as you have consistent revenue and a business bank account, we can work with you.",
        },
        {
          id: 14,
          question: "What are the minimum qualifications to apply?",
          answer: "Most lenders require at least 3–6 months in business, $10K+ in monthly revenue, and a U.S. business checking account.",
        },
      ],
    },
    {
      title: "Funding & Offers",
      questions: [
        {
          id: 15,
          question: "How many offers will I receive?",
          answer: "Usually 1–3 pre-qualified offers based on your profile, industry, and deposit activity.",
        },
        {
          id: 16,
          question: "Can I choose my lender?",
          answer: "Yes. You’ll be presented with matched offers and can select whichever is the best fit.",
        },
        {
          id: 17,
          question: "Do you share my info with lots of lenders?",
          answer: "No. We don’t blast your file. We route it only to lenders who fit your profile based on our matching engine.",
        },
        {
          id: 18,
          question: "How does your lender matching system work?",
          answer: "Our platform reviews your cash flow, deposit trends, industry, and other criteria to match you with funders most likely to approve and fund you.",
        },
        {
          id: 19,
          question: "Do you offer multiple funding types?",
          answer: "Yes. We offer MCAs, term loans, revenue-based financing, lines of credit, and more—based on what’s best for your business.",
        },
      ],
    },
    {
      title: "Repayment & Terms",
      questions: [
        {
          id: 20,
          question: "Can I pay off early?",
          answer: "Yes. Many of our lenders offer early payoff discounts or reduced rates.",
        },
        {
          id: 21,
          question: "How often are payments made?",
          answer: "Most programs deduct payments daily or weekly via ACH. Some lenders offer monthly terms or holdback models for MCAs.",
        },
        {
          id: 22,
          question: "What happens if I miss a payment?",
          answer: "If something unexpected happens, we or your lender can often arrange a short-term solution. Communication is key.",
        },
      ],
    },
    {
      title: "Security & Privacy",
      questions: [
        {
          id: 23,
          question: "Is my information secure?",
          answer: "Yes. We use bank-level encryption and secure servers to protect your personal and business data.",
        },
        {
          id: 24,
          question: "Will I ever get a hard credit pull?",
          answer: "Only if you decide to move forward with a lender who requires one. Pre-qualification is always soft pull only.",
        },
        {
          id: 25,
          question: "Can I remove my application data if I don’t move forward?",
          answer: "Yes. Just contact our team and we’ll permanently delete your data and opt you out of future communications.",
        },
      ],
    },
    {
      title: "Support & Communication",
      questions: [
        {
          id: 26,
          question: "What happens after I apply?",
          answer: "You’ll receive a call, text, or email from our team. Once your statements are submitted, we begin the matching process.",
        },
        {
          id: 27,
          question: "Will I have a dedicated rep?",
          answer: "Yes. A funding specialist will be assigned to you and stay with you through the full process.",
        },
        {
          id: 28,
          question: "Can I talk to someone before I apply?",
          answer: "Absolutely. You can call or message us anytime to speak with a live representative.",
        },
        {
          id: 29,
          question: "How do I track my application status?",
          answer: "We update you by text and email. You can also reach out to your rep at any time for real-time updates.",
        },
      ],
    },
    {
      title: "Other",
      questions: [
        {
          id: 30,
          question: "Are there any upfront fees?",
          answer: "No. There are no fees to apply, review offers, or get pre-qualified. We are paid by the funder only when a deal funds.",
        },
      ],
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Frequently Asked Questions">
        <section className="faq-page">
          <div className="container">
            <div className="faq-page__text-box" style={{ position: 'relative', marginBottom: '40px' }}>
              <div className="faq-page__text-box-shape-1">
                <img src="assets/images/shapes/faq-page-text-box-shape-1.png" alt="" />
              </div>
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <p className="section-title__tagline">Our Question and Answer</p>
                </div>
                <h2 className="section-title__title">
                  Elite Funders
                  <br /> Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="faq-page__bottom">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="faq-page__bottom-left">
                    <div className="faq-page__search" style={{ marginBottom: '30px' }}>
                      <form action="#" className="faq-page__search-form" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <input
                          type="search"
                          placeholder="Search FAQs..."
                          style={{
                            width: '100%',
                            padding: '12px 50px 12px 20px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                          }}
                        />
                        <button
                          type="submit"
                          style={{
                            position: 'absolute',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <i className="icon-search-1" style={{ fontSize: '20px', color: '#555' }}></i>
                        </button>
                      </form>
                    </div>
                    <div className="faq-page__contact-box" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Need More Help?</h3>
                      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                        Contact our team for personalized assistance:<br />
                        <strong>📞</strong> <Link href="tel:8888965559">(888) 896-5559</Link><br />
                        <strong>📧</strong> <Link href="mailto:support@elitefunders.com">support@elitefunders.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="faq-page__bottom-right">
                    {faqSections.map((section, index) => (
                      <div key={index} style={{ marginBottom: '40px' }}>
                        <h3
                          style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#003087',
                          }}
                        >
                          <span style={{ marginRight: '10px' }}>🟦</span> {section.title}
                        </h3>
                        <div className="accrodion-grp faq-one-accrodion" data-grp-name={`faq-one-accrodion-${index}`}>
                          {section.questions.map((faq) => (
                            <div
                              key={faq.id}
                              className={isActive.key === faq.id && isActive.status ? "accrodion active" : "accrodion"}
                              style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                marginBottom: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                              }}
                              onClick={() => handleToggle(faq.id)}
                            >
                              <div
                                className="accrodion-title"
                                style={{
                                  padding: '15px 20px',
                                  cursor: 'pointer',
                                  background: isActive.key === faq.id && isActive.status ? '#f0f4ff' : '#fff',
                                  transition: 'background 0.3s',
                                }}
                              >
                                <h4 style={{ fontSize: '18px', margin: 0, fontWeight: '600' }}>{faq.question}</h4>
                              </div>
                              <div
                                className="accrodion-content"
                                style={{
                                  display: isActive.key === faq.id && isActive.status ? 'block' : 'none',
                                  padding: '15px 20px',
                                  background: '#fff',
                                }}
                              >
                                <div className="inner">
                                  <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                                    {faq.answer.includes("Apply here") ? (
                                      <>
                                        {faq.answer.split("Apply here")[0]}
                                        <Link href="/apply">Apply here</Link>
                                        {faq.answer.split("Apply here")[1]}
                                      </>
                                    ) : (
                                      faq.answer
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-one cta-five" style={{ marginTop: '40px' }}>
          <div className="container">
            <div
              className="cta-one__inner"
              style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', position: 'relative' }}
            >
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage: "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get <span>Peace of Mind</span> Right Now
                </h3>
                <p>Only a Few Minutes Away From a Better Future - Apply Now</p>
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