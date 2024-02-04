import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import NotFound from "./NotFound";
import cartIcon from "./img/icons/cart.svg";
import arrow from "./img/icons/arrow.svg";
import data from "./data/articles.json";

const ArticlesDetails = () => {
  const { id } = useParams();
  const articles = data.articles;
  const article = articles.find((article) => article.id.toString() === id);

  const [sizeActive, setSizeActive] = useState("s");
  const [stock, setStock] = useState(article ? article.sizes.s : null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSizeBtnClick = (e) => {
    const char = e.currentTarget.textContent;
    setSizeActive(char);
    setStock(article.sizes[char]);
  };

  const handleDetailsClick = (e) => {
    const details = e.currentTarget;
    const wrapper = e.currentTarget.lastElementChild;
    details.classList.toggle("expanded");

    const isExpanded = e.currentTarget.classList.contains("expanded");

    if (isExpanded) {
      wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
    } else wrapper.style.maxHeight = `0px`;
  };

  if (!article) return <NotFound errorMessage={"article not found"} />;

  return (
    <main className="articles-details">
      <section className="articles-details-section section padding-block-end-14">
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation, Thumbs]}
          breakpoints={{
            720: {
              navigation: {
                enabled: false,
              },
              allowTouchMove: false,
              slidesPerView: 4,
            },
          }}
          className="articles-details-photos margin-block-start-10"
        >
          <SwiperSlide className="">
            <img src={require(`${article.cover}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={require(`${article.sticker}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="can-hover">
            <img src={require(`${article.preview_front}`)} alt="" />
            {article.preview_back && (
              <img
                className="img-hover"
                src={require(`${article.preview_back}`)}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={require(`${article.preview}`)} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          preventClicksPropagation={false}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="articles-details-thumbs container margin-block-start-6"
        >
          <SwiperSlide className="">
            <img src={require(`${article.cover}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={require(`${article.sticker}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={require(`${article.preview_front}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={require(`${article.preview}`)} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="articles-details-desc container flow margin-block-start-6">
          <h1 className="fs-700 fw-default uppercase margin-block-end-6">
            {article.name}
          </h1>
          <p className="fs-200">{article.desc}</p>
          <div className="sizes-stock flow-sm">
            <h4 className="fs-200 fw-default">Sizes:</h4>
            <div>
              <div className="sizes flow-sm">
                <div>
                  <button
                    className={`${article.sizes.s === 0 ? "disable" : ""} ${
                      sizeActive === "s" ? "active" : ""
                    } uppercase fw-bold clr-primary-000 bg-primary-300`}
                    onClick={handleSizeBtnClick}
                  >
                    s
                  </button>
                  <button
                    className={`${article.sizes.m === 0 ? "disable" : ""} ${
                      sizeActive === "m" ? "active" : ""
                    } uppercase fw-bold clr-primary-000 bg-primary-300`}
                    onClick={handleSizeBtnClick}
                  >
                    m
                  </button>
                  <button
                    className={`${article.sizes.l === 0 ? "disable" : ""} ${
                      sizeActive === "l" ? "active" : ""
                    } uppercase fw-bold clr-primary-000 bg-primary-300`}
                    onClick={handleSizeBtnClick}
                  >
                    l
                  </button>
                  <button
                    className={`${article.sizes.xl === 0 ? "disable" : ""} ${
                      sizeActive === "xl" ? "active" : ""
                    } uppercase fw-bold clr-primary-000 bg-primary-300`}
                    onClick={handleSizeBtnClick}
                  >
                    xl
                  </button>
                </div>
              </div>
              <h4 className="stock fw-default">
                Stock: <span className="fw-bold">{stock}</span>
              </h4>
            </div>
          </div>
          <p className="price fw-bold">
            Price: {article.price}
            <span className="fw-default">{article.diskon}</span>
          </p>
          <div>
            <Link target={"_blank"} to={article.shopee_path}>
              <button className="button shop primary fs-400 clr-accent-800 fw-bold box-shadow-1 ">
                order by shopee
                <div>
                  <img src={cartIcon} alt="" />
                </div>
              </button>
            </Link>
            <Link target={"_blank"} to={article.whatsapp_path}>
              <button className="button shop primary fs-400 clr-accent-800 fw-bold box-shadow-1 margin-block-start-8">
                order by whatsapp
                <div>
                  <img src={cartIcon} alt="" />
                </div>
              </button>
            </Link>
          </div>
          <div className="details" onClick={handleDetailsClick}>
            <div className="heading-2 margin-block-end-8">
              <h2 className="fw-default">Details</h2>
              <img className={"img-size-subtitle-arrow"} src={arrow} alt="" />
            </div>
            <div className="wrapper">
              <ul className="flow-sm margin-inline-start-4">
                {article.details.map((detail) => {
                  return (
                    <li key={detail} className="fs-300">
                      - {detail}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlesDetails;
