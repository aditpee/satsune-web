import { Link } from "react-router-dom";

import data from "./data/data.json";

const Blogs = () => {
  const blogs = data.blogs;

  return (
    <main className="blogs container">
      <section className="blogs-section section">
        <h1 className="heading-1 fs-900 uppercase fw-default">Blogs</h1>
        <div className="blogs-list">
          {blogs.map((blog) => {
            return (
              <Link key={blog.id} to={`/blogs/${blog.id}`}>
                <div>
                  <img
                    className="cover-blog"
                    src={require(`${blog.cover}`)}
                    alt=""
                  />
                </div>
                <div className="blog-desc flow">
                  <h2 className="fs-700 uppercase fw-default">{blog.title}</h2>
                  <p className="author fs-100 clr-primary-000">{blog.author}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
