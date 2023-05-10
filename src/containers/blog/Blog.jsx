import React from "react";
import "./Blog.css";
import { Article } from "../../components";

import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="gpt3_-blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog1} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog2} />
          <Article imgUrl={blog3} />
          <Article imgUrl={blog4} />
          <Article imgUrl={blog5} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
