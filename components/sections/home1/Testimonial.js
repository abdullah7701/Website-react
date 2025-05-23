"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};

export default function Testimonial() {
  return (
    <>
      {/* Testimonial One Start  */}
      <section className="testimonial-one">
        <div className="testimonial-one__shape-1 img-bounce">
          <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                OUR CLIENT AWESOME RIVEWS
              </p>
            </div>
            <h2 className="section-title__title">
              Trusted by <br /> Thousands of Business Owners
            </h2>
            <div className="section-title__trustpilot">
              <Link href="https://www.trustpilot.com/review/elitefunders.com" target="_blank">
                <img src="assets/images/resources/Trustpilot.webp" alt="Trustpilot" />
              </Link>
              <span>4.8/5</span>
            </div>
          </div>
          <div className="testimonial-one__bottom" style={{ position: "relative" }}>
            <Swiper
              {...swiperOptions}
              className="testimonial-one__carousel owl-carousel thm-owl__carousel"
            >
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “I needed $75,000 for expansion and got approved within 24 hours. The process was fast, simple, and fully transparent. Elite Funders delivered exactly what they promised.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5z8fpcIgbd8Ap3bv8zPiTx0DoHVKRPllLdw&s"
                          alt="Jason M."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">Jason M.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">Restaurant Owner</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “Elite Funders got us funded after our bank declined us. They matched us with a lender that approved $50K in two days. Total game-changer for our cash flow.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                          alt="Sarah L."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">Sarah L.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">Auto Repair Shop</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “Hands down the smoothest funding experience I’ve ever had. From application to funding, their team was professional and responsive. Highly recommend.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="David R."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">David R.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">eCommerce Business</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “We were struggling to cover inventory costs, but Elite Funders came through with $100K in just 48 hours. Their support made all the difference.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwn-t7RuDfaNRSps4SJ-_ABdpBgJUb7jYsg&s"
                          alt="Michael T."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">Michael T.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">Retail Store</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “Elite Funders’ team was amazing. They helped us secure $30,000 for new equipment with no hassle. I’ll be coming back for future funding needs.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4g_gODjnPpsxLhBOy97gswVqX6u5SbNgJw&s"
                          alt="Lisa K."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">Lisa K.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">Construction Company</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <img src="assets/images/icon/quote-icon-2.png" alt="" />
                    </div>
                    <div className="testimonial-one__text-box">
                      <p className="testimonial-one__text">
                        “After being turned down elsewhere, Elite Funders got us $25,000 to boost our marketing. The process was quick, and their team was super helpful.”
                      </p>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtA8ZH2gT93yOOvBbdk22Bq9WyQJv9eR9Gw&s"
                          alt="Emma S."
                        />
                      </div>
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonial">Emma S.</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">Salon Owner</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Navigation Arrows */}
            <div
              className="srp"
              style={{
                position: "absolute",
                top: "50%",
                left: "-50px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 10,
                background: "#fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="srn"
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 10,
                background: "#fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial One End  */}
    </>
  );
}