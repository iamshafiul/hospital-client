import React from "react";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import TestimonialInfo from "../TestimonialsInfo/TestimonialInfo";
import BlogsInfo from "../BlogsInfo/BlogsInfo";

const Blogs = () => {
  const blogData = [
    {
      title: "Check at least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      author: "Dr. Caudi",
      authorImg: wilson,
      date: "23 April 2019",
    },
    {
      title: "Check at least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      author: "Dr. Caudi",
      authorImg: ema,
      date: "23 April 2019",
    },
    {
      title: "Check at least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      author: "Dr. Caudi",
      authorImg: aliza,
      date: "23 April 2019",
    },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center">
          <h2>Our Blog</h2>
        </div>
        <div className="row mt-5">
          {blogData.map((blog) => (
            <BlogsInfo blog={blog}></BlogsInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
