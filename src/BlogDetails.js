import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
import data from "./data/data.json";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = data.blogs;
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) return <NotFound errorMessage={"blog not found"} />;

  return (
    <main className="blog-details  ">
      <section className="blog-details-section section container medium">
        <h1 className="heading-1 fs-900 uppercase fw-default">{blog.title}</h1>
        <div>
          <img className="img-blog" src={require(`${blog.cover}`)} alt="" />
          <p className="author fs-100 clr-primary-000 margin-block-start-4">
            {blog.author}
          </p>
        </div>
        <div className="blog-contents flow">
          {blog.contents.map((content) => {
            return (
              <article key={content.content}>
                <h2 className="heading-2 fs-700 uppercase fw-default margin-block-8">
                  {content.title}
                </h2>
                <div className="blog-content flow">
                  <div>
                    <img src={require(`${content.img}`)} alt="" />
                  </div>
                  <p className="fs-400">{content.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
