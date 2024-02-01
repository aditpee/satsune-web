import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import title from "./img/logo.svg";
import satsuneIcon from "./img/icons/satsune.svg";
import data from "./data/data.json";

const Home = () => {
  const home = data.home;

  return (
    <main className="main">
      <section className="hero-section section text-center">
        <div
          className="headline mx-auto margin-block-start-15"
          style={{ width: "max-content" }}
        >
          <img
            className="img-size-title margin-block-end-2"
            src={title}
            alt=""
          />
          <h2 className="fw-default fs-100 clr-primary-000 text-right">
            {home.subtitle}
          </h2>
        </div>
        <Link to={"/articles"}>
          <button className="button primary fs-400 clr-accent-800 fw-bold box-shadow-1 margin-block-start-12">
            See our articles
          </button>
        </Link>
        <div className="satsune-icon left">
          <img src={satsuneIcon} alt="" />
          <div className="line"></div>
        </div>
        <div className="satsune-icon right">
          <img src={satsuneIcon} alt="" />
          <div className="line"></div>
        </div>
      </section>
      <section className="gallery-slider section padding-block-end-14">
        <Swiper
          // watchSlidesProgress={true}
          slidesPerView={2}
          // freeMode={true}
          centeredSlides={true}
          allowTouchMove={false}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1,
            // pauseOnMouseEnter: true,
            disableOnIteration: false,
          }}
          breakpoints={{
            540: {
              slidesPerView: 3,
            },
            720: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {home.preview_paths.map((path) => {
            return (
              <SwiperSlide key={path} className="img-slider">
                <img src={require(`${path}`)} alt="" />
              </SwiperSlide>
            );
          })}
          {home.preview_paths.map((path) => {
            return (
              <SwiperSlide key={path} className="img-slider">
                <img src={require(`${path}`)} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Home;
