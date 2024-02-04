import logo from "./img/logo.svg";
import arrow from "./img/icons/arrow.svg";
import data from "./data/about.json";

const About = () => {
  const about = data.about;

  const handleClick = (e) => {
    const aboutList = e.currentTarget;
    const wrapper = e.currentTarget.lastElementChild;
    aboutList.classList.toggle("expanded");

    const isExpanded = e.currentTarget.classList.contains("expanded");

    if (isExpanded) {
      wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
    } else wrapper.style.maxHeight = `0px`;
  };

  return (
    <main className="about section">
      <section className="about-section container small flow  margin-block-start-12">
        <h1 className="about-logo">
          <img className="img-size-logo-about" src={logo} alt="" />
        </h1>
        <p className="fs-300 fw-regular">{about.brand_desc}</p>
        {about.contents.map((content) => {
          return (
            <div
              key={content.id}
              className="about-list flow-sm"
              onClick={handleClick}
            >
              <div className="heading-2 margin-block-end-8">
                <h2 className="fs-600 fw-bold">{content.title}</h2>
                <img className={"img-size-subtitle-arrow"} src={arrow} alt="" />
              </div>
              <div className="wrapper flow-sm">
                {content.content.map((c) => {
                  return (
                    <p key={c} className="fs-300 fw-regular">
                      {c}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default About;
