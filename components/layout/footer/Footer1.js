import Link from "next/link";
import Image from "next/image";

export default function Footer1() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <img src="/assets/images/shapes/site-footer-shape-1.png" alt="" />
        </div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo">
                      <Link href="/">
                        <Image
                          width="54"
                          height="54"
                          src="/assets/images/resources/efg.svg"
                          alt=""
                        />
                        <span className="elite-footer__logo">
                          {" "}
                          Elite Funders
                        </span>
                      </Link>
                    </div>
                    <p className="footer-widget__about-text">
                      9840 S.W 77th Ave, ste 203 <br /> Miami, FL, 33156
                    </p>
                    <div className="footer-widget__emergency-call">
                      <Link href="tel:+18883431156">+1 888-343-1156</Link>
                    </div>
                    <div className="footer-widget__social">
                      <Link href="#">
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-instagram-1"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-tik-tok"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-youtube"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__navigation">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Navigation</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/terms-of-service">Terms of Service</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__company">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Company</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/partnerships">Partnerships</Link>
                      </li>
                      <li>
                        <Link href="/requently-asked-questions">FAQs</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-of-service">Terms of Service</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__products">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Products</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/merchant-cash-advance">Merchant Cash Advances</Link>
                      </li>
                      <li>
                        <Link href="/revenue-based-financing">Revenue Based Financing</Link>
                      </li>
                      <li>
                        <Link href="/term-loans">Term Loans</Link>
                      </li>
                      <li>
                        <Link href="/business-lines-of-credit">Business Lines of Credit</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="footer-widget__column footer-widget__trustpilot">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Trusted by Thousands</h3>
                    </div>
                    <div className="main-slider__ratting">
                      <Link href="https://www.trustpilot.com/review/elitefunders.com" target="_blank">
                        <img src="assets/images/resources/Trustpilot.webp" alt="Trustpilot" />
                      </Link>
                      <span style={{ color: "white" }}>600+ verified reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                Copyright © 2024 {" "}
                <Link href="#">Elite Funders </Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}