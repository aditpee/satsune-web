import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import useOutsideClick from "./useOutsideClick";

import logo from "./img/logo.svg";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("articles")) setActiveNav("articles");
    else if (pathname.includes("about")) setActiveNav("about");
    else if (pathname.includes("blogs")) setActiveNav("blogs");
    else setActiveNav("home");

    window.scrollTo(0, 0);
  }, [pathname]);

  const handleMenuClick = (e) => {
    const menuToggle = e.target;
    const nav = menuToggle.nextElementSibling;

    menuToggle.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  };

  const handleOutsideClick = () => {
    const nav = ref.current;
    const menuToggle = nav.previousElementSibling;

    if (!nav.classList.contains("hidden")) {
      nav.classList.add("hidden");
      menuToggle.classList.add("hidden");
    }
  };
  const ref = useOutsideClick(handleOutsideClick);

  const handleLinkClick = (e) => {
    const nav = e.currentTarget.parentElement.parentElement;
    const menuToggle = nav.previousElementSibling;

    nav.classList.add("hidden");
    menuToggle.classList.add("hidden");
  };

  const handleScroll = () => {
    const siteHeader = document.querySelector(".site-header");

    if (window.scrollY > 45) {
      siteHeader.classList.add("box-shadow");
    } else {
      siteHeader.classList.remove("box-shadow");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <header onScroll={handleScroll} className="site-header bg-primary-600">
      <div className="wrap container">
        <Link to={"/"} className="logo">
          <img src={logo} alt="site header logo" />
        </Link>

        <button
          onClick={handleMenuClick}
          className="menu-toggle hidden"
        ></button>

        <nav ref={ref} className="nav bg-primary-600 hidden">
          <span className="line-accessory"></span>
          <ul className="clr-primary-000">
            <li
              onClick={handleLinkClick}
              className={`${activeNav === "home" ? "active" : ""}`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={handleLinkClick}
              className={`${activeNav === "articles" ? "active" : ""}`}
            >
              <Link to={"/articles"}>Articles</Link>
            </li>
            <li
              onClick={handleLinkClick}
              className={`${activeNav === "about" ? "active" : ""}`}
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              onClick={handleLinkClick}
              className={`${activeNav === "blogs" ? "active" : ""}`}
            >
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
          <span className="line-accessory line-2"></span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
