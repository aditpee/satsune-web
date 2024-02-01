import { Link } from "react-router-dom";

const NotFound = ({ errorMessage }) => {
  return (
    <main className="not-found">
      <section
        className="not-found-section section container padding-block-14"
        style={{ paddingBottom: "clamp(1rem, 27vw, 30rem)" }}
      >
        <h4 className="fs-900 fw-default uppercase">
          error 404: {errorMessage}
        </h4>
        <Link
          className="fs-400 clr-primary-000"
          style={{ textDecoration: "underline" }}
          to={"/"}
        >
          go to home page
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
