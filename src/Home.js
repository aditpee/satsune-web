import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import title from "./img/logo.svg";
import satsuneIcon from "./img/icons/satsune.svg";
import data from "./data/home.json";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Home = () => {
  const home = data.home;
  const [isEndIntro, setIsEndIntro] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Stage 1: Bring the image in from left with a bounce effect
    tl.to(".img-size-title", {
      x: 0,
      delay: 1,
      duration: 3,
      ease: "elastic.out(1, 0.5)",
      rotation: 10,
      onComplete: () => {
        // Add a subtle pulse/glow effect while centered
        gsap.to(".img-size-title", {
          scale: 1.2,
          filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
          duration: 0.8,
          yoyo: true,
          repeat: 1,
        });
      },
    })

      // Stage 2: Scale the image down and move it to top
      .to(".img-size-title", {
        scale: 1,
        // y: "-20vh",
        rotation: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setIsEndIntro(true);
        },
      });
  }, []);

  return (
    <main className={"main hero " + (isEndIntro && "end-intro")}>
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
          <h2 className="hero-subtitle fw-default fs-100 clr-primary-000 text-right">
            {home.subtitle}
          </h2>
        </div>
        <div className="hero-button">
          <Link to={"/articles"}>
            <button className="button primary fs-400 clr-accent-800 fw-bold box-shadow-1 margin-block-start-12">
              See our articles
            </button>
          </Link>
        </div>
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
          speed={7000}
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
