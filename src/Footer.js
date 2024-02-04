import { Link } from "react-router-dom";

import data from "./data/footer.json";

const Footer = () => {
  const footer = data.footer;

  return (
    <footer className="footer-section section box-shadow-2">
      <div className="site-footer container padding-block-end-2 ">
        <div className="footer-card margin-block-end-10">
          <h2 className="fw-bold fs-600 uppercase margin-block-end-2">
            Satsune
          </h2>
          <p className="fs-200">{footer.brand_desc}</p>
        </div>
        <div className="wrapper flow">
          <div className="footer-card">
            <h3 className="fw-bold fs-500 uppercase margin-block-end-2">
              Content
            </h3>
            <ul>
              <li className="fs-200 clr-primary-000">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to={"/articles"}>Articles</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to={"/blogs"}>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-card">
            <h3 className="fw-bold fs-500 uppercase margin-block-end-2">
              Social Media
            </h3>
            <ul>
              {footer.social_media.map((social) => {
                return (
                  <li key={social.name} className="fs-200 clr-primary-000">
                    <Link target={"_blank"} to={social.link}>
                      {social.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-card">
            <h3 className="fw-bold fs-500 uppercase margin-block-end-2">
              Contact us
            </h3>
            <ul>
              {footer.contact_us.map((contact) => {
                return (
                  <li key={contact.name} className="fs-200 clr-primary-000">
                    <Link target={"_blank"} to={contact.link}>
                      {contact.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
