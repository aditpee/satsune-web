import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import data from "./data/data.json";

const Articles = () => {
  const comingSoon = data.coming_soon;
  const articles = data.articles;
  const [activeArticle, setActiveArticle] = useState(articles[0]);
  useEffect(() => {
    setActiveArticle(articles[0]);
  }, [articles]);

  return (
    <main className="articles">
      <section className="articles-section section text-center padding-block-end-14">
        <div className="articles-container mx-auto">
          <Swiper
            onSlideChange={(swiper) => {
              const articleId = parseInt(
                swiper.slides[swiper.activeIndex].dataset.article
              );
              const article = articles.find(
                (article) => articleId === article.id
              );
              setActiveArticle(article);
            }}
            slidesPerView={1.5}
            centeredSlides={true}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: false,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              480: {
                navigation: {
                  enabled: true,
                },
              },
              720: {
                slidesPerView: 2.5,
                navigation: {
                  enabled: true,
                },
              },
            }}
            className="articles-slider container margin-block-start-13"
          >
            {articles.map((article) => {
              return (
                <SwiperSlide data-article={article.id} key={article.id}>
                  <img
                    className="img-slider"
                    src={require(`${article.cover}`)}
                    alt=""
                  />
                  <img
                    className="img-slider-hover"
                    src={require(`${article.preview}`)}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <img
                className="img-slider"
                src={require(`${comingSoon.img}`)}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <article
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove("fade-in");
          }}
          onLoad={(e) => {
            e.currentTarget.classList.add("fade-in");
          }}
          className="articles-desc text-center container"
        >
          <div className="article-bg">
            <img
              src={activeArticle ? require(`${activeArticle.bg}`) : ""}
              alt=""
            />
          </div>
          <h1 className="fs-800 fw-default uppercase text-center">
            {activeArticle ? activeArticle.name : comingSoon.title}
          </h1>
          <p className="fs-300 text-center mx-auto margin-block-start-2">
            {activeArticle ? activeArticle.quote : comingSoon.desc}
          </p>
        </article>
        <Link to={`/articles/${activeArticle ? activeArticle.id : ""}`}>
          <button className="button primary fs-400 clr-accent-800 fw-bold box-shadow-1 margin-block-start-11">
            check article
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Articles;
