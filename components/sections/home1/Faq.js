"use client";
import { useState } from "react";

export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      {/* FAQ One Start  */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="faq-one__shape-1 float-bob-x">
                  <img
                    src="assets/images/shapes/open-account-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="faq-one__img-box">
                  <div className="faq-one__img">
                    <img
                      src="assets/images/resources/faq-one-img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="faq-one__quick-box">
                    <div className="faq-one__quick-icon">
                      <span className="icon-check"></span>
                    </div>
                    <h4 className="faq-one__quick-text">
                      Quick, Easy and
                      <br /> Hassle Free
                    </h4>
                  </div>
                  <div className="faq-one__policy">
                    <div className="faq-one__policy-icon">
                      <span className="icon-check"></span>
                    </div>
                    <h4 className="faq-one__policy-text">
                      Funding Within
                      <br /> 24 Hours
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      PEOPLE ASK QUESTION
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Offering Great
                    <br /> Funding Solutions
                  </h2>
                </div>
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1"
                >
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>Will applying affect my credit?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          No. We only use a soft credit pull to check your eligibility, which means there’s absolutely no impact on your credit score.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>How fast can I get funded?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          You can get approved the same day and funded in as little as 24–48 hours after selecting your offer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>What do I need to apply?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          You’ll just need your business details and 3–6 months of recent bank statements. No collateral or lengthy paperwork required.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>How much can I get approved for?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          You can get approved for anywhere from $5,000 to $2,000,000, based on your business’s revenue, cash flow, and deposit activity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 5 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(5)}
                  >
                    <div className="accrodion-title">
                      <h4>Can I get funding if I already have other loans or advances?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Yes. Many of our lenders offer second, third, or even fourth position funding—even if you already have active advances—depending on your cash flow.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 6 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <div className="accrodion-title">
                      <h4>How do repayments work?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Most repayment plans involve daily or weekly ACH deductions, automatically pulled from your business account. We’ll match you with a program that fits your cash flow.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 7 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(7)}
                  >
                    <div className="accrodion-title">
                      <h4>Why choose Elite Funders?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Elite Funders gives you access to 100+ trusted lenders, fast approvals, and personalized support—all with one application and zero pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 8 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(8)}
                  >
                    <div className="accrodion-title">
                      <h4>Do I need collateral?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          No. Most of our programs are unsecured, which means you don’t need to pledge any assets or collateral to qualify.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 9 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(9)}
                  >
                    <div className="accrodion-title">
                      <h4>Can I apply with bad credit?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Yes. Even if your credit isn’t perfect, we work with lenders who focus more on your revenue and business performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 10 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(10)}
                  >
                    <div className="accrodion-title">
                      <h4>What can I use the funds for?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Use your funds for whatever your business needs—payroll, inventory, marketing, equipment, or growth. It’s your capital, your way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ One End  */}
    </>
  );
}