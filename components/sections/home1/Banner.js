"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      <section className="main-slider">
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item">
            <div className="item main-slider__slide-1">
              <div className="main-slider__shape-1 img-bounce">
                <img
                  src="public/assets/images/icon/pricing-one-icon-1.png"
                  alt=""
                />
              </div>
              {/* <div className="main-slider__shape-2 img-bounce">
                <img src="assets/images/icon/pricing-one-icon-2.png" alt="" />
              </div> */}
              <div className="main-slider__shape-3 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt=""
                />
              </div>
              <div className="main-slider__img">
                <img src="assets/images/resources/slider-1-1.png" alt="" />
              </div>

              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__section-and-text">
  <div className="section-title text-left">
    <div className="section-title__tagline-box">
      <p className="section-title__tagline">
      Fast. Easy. Funded.
      </p>
    </div>
    <h2 className="section-title__title" style={{ fontFamily: 'Arial' }}>
    Business Funding
      <br /> Made Simple
    </h2>
  </div>
  <p className="main-slider__text">
  Get business funding up to $2M without a hard credit check. <br />Application only takes 2 minutes <br />
  </p>
</div>
<div className="main-slider__ratting">
  <Link href="https://www.trustpilot.com/review/elitefunders.com" target="_blank">
    <img src="assets/images/resources/Trustpilot.webp" alt="Trustpilot" />
  </Link>
  <span>600+ verified reviews</span>
</div>
                  <div className="main-slider__btn-and-ratting-box">
                    <div className="main-slider__btn-box">
                      <Link
                        href="apply"
                        className="main-slider__btn thm-btn "
                        style={{
                          borderRadius: "50rem",
                        }}
                      >
                        See My Funding Options
                      </Link>
                      <span>&nbsp; *No credit impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div className="item main-slider__slide-1">
              <div className="main-slider__shape-1 img-bounce">
                <img
                  src="assets/images/shapes/main-slider-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider__shape-2 img-bounce">
                <img
                  src="assets/images/shapes/main-slider-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider__shape-3 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt=""
                />
              </div>
              <div className="main-slider__img">
                <img src="assets/images/resources/slider-1-1.png" alt="" />
              </div>

              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__section-and-text">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box">
                        <p className="section-title__tagline">
                          RELIABLE. Simple. fAST
                        </p>
                      </div>
                      <h2 className="section-title__title" style={{ fontFamily: 'Arial' }}>
                        Life Funding
                        <br /> That Creates
                        <br /> Future
                      </h2>
                    </div>
                    <p className="main-slider__text">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames
                      <br /> ac turpis egestas. Proin elementum finibus lacus
                      quis hendrerit.
                    </p>
                  </div>
                  <div className="main-slider__btn-and-ratting-box">
                    <div className="main-slider__btn-box">
                      <Link href="about" className="main-slider__btn thm-btn">
                        get started
                      </Link>
                    </div>
                    <div className="main-slider__ratting">
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <span>Rated 5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div className="item main-slider__slide-1">
              <div className="main-slider__shape-1 img-bounce">
                <img
                  src="assets/images/shapes/main-slider-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider__shape-2 img-bounce">
                <img
                  src="assets/images/shapes/main-slider-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider__shape-3 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt=""
                />
              </div>
              <div className="main-slider__img">
                <img src="assets/images/resources/slider-1-1.png" alt="" />
              </div>

              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__section-and-text">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box">
                        <p className="section-title__tagline">
                          RELIABLE. Simple. fAST
                        </p>
                      </div>
                      <h2 className="section-title__title" style={{ fontFamily: 'Arial' }}>
                        Life Funding
                        <br /> That Creates
                        <br /> Future
                      </h2>
                    </div>
                    <p className="main-slider__text">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames
                      <br /> ac turpis egestas. Proin elementum finibus lacus
                      quis hendrerit.
                    </p>
                  </div>
                  <div className="main-slider__btn-and-ratting-box">
                    <div className="main-slider__btn-box">
                      <Link href="about" className="main-slider__btn thm-btn">
                        get started
                      </Link>
                    </div>
                    <div className="main-slider__ratting">
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <span>Rated 5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="owl-nav">
            <button type="button" className="owl-prev h1p">
              <span>‹</span>
            </button>
            <button type="button" className="owl-next h1n">
              <span>›</span>
            </button>
          </div> */}
        </Swiper>
      </section>
    </>
  );
}
