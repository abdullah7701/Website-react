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
        Trusted by <br /> Thousands of Customers
      </h2>
      <div className="section-title__trustpilot">
        <Link href="https://www.trustpilot.com/review/elitefunders.com" target="_blank">
          <img src="assets/images/resources/Trustpilot.webp" alt="Trustpilot" />
        </Link>
        <span>4.8/5</span>
      </div>
    </div>
    <div className="testimonial-one__bottom">
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Ononto Khan"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">Ononto Khan</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                    alt="Smith S.R"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">Smith S.R</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Alisha Martin"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">Alisha Martin</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                    alt="David Koper"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">David Koper</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4g_gODjnPpsxLhBOy97gswVqX6u5SbNgJw&s"
                    alt="Jecika Brown"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">Jecika Brown</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
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
                  Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu
                </p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtA8ZH2gT93yOOvBbdk22Bq9WyQJv9eR9Gw&s"
                    alt="Harbert Spenser"
                  />
                </div>
                <h3 className="testimonial-one__client-name">
                  <Link href="testimonial">Harbert Spenser</Link>
                </h3>
                <p className="testimonial-one__client-sub-title">Developer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>
  </div>
</section>
      {/* Testimonial One End  */}
    </>
  );
}
