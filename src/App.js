import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Articles from "./Articles";
import ArticlesDetails from "./ArticlesDetails";
import About from "./About";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound errorMessage="page not found" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
