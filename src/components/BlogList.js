import React from "react";
import "./BlogList.css";
import { Box, Container } from "@mui/system";
import Img1 from "../images/image_1.jpg.webp";
import Img2 from "../images/image_2.jpg.webp";
import Img3 from "../images/image_3.jpg.webp";
import Img4 from "../images/image_4.jpg.webp";
import Img5 from "../images/image_5.jpg.webp";
import Img6 from "../images/image_6.jpg.webp";
import Img7 from "../images/image_7.jpg.webp";
import Img8 from "../images/image_8.jpg.webp";
import Img9 from "../images/image_9.jpg.webp";

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img1,
    },
    {
      id: 2,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img2,
    },
    {
      id: 3,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img3,
    },
    {
      id: 4,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img4,
    },
    {
      id: 5,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img5,
    },
    {
      id: 6,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img6,
    },
    {
      id: 7,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img7,
    },
    {
      id: 8,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img8,
    },
    {
      id: 9,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      img: Img9,
    },
  ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <Container fixed>
      <div className="home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <p>{getText(post.desc)}</p>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default BlogList;
