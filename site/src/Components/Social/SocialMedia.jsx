import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import InstaCard from "./InstaCard";
import LinkedInCard from "./LinkedInCard";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
import "./Social.css";
import Post1 from "../../assets/social/post1.jpg";
import Post2 from "../../assets/social/post2.jpg";
import Post3 from "../../assets/social/post3.jpg";
import Slider from "react-slick";
import YoutubeCard from "./YoutubeCard";
const SocialMedia = ({ youtube }) => {
console.log('====================================');
console.log(youtube);
console.log('====================================');
  const socialmediaObj = [
    {
      img: Post1,
      name: "Ravi Dubey",
      userName: "Ravi@123",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      socialMedia: "Instagram",
    },
    {
      img: Post2,
      name: "Suraj Yadav",
      userName: "Suraj@123",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      socialMedia: "Youtube",
    },
    {
      img: Post3,
      name: "Neeraj Yadav",
      userName: "Neeraj@123",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      socialMedia: "LinkedIn",
    },
  ];

  const socialLink = [
    // {
    //   icon: <FaInstagram />,
    //   link: "",
    //   id: "insta-btn",
    // },
    {
      icon: <FaLinkedin />,
      link: "",
      id: "linkedin-btn",
    },
    // {
    //   icon: <FaTwitter />,
    //   link: "",
    //   id: "twitter-btn",
    // },
  ];

  const [socialmediaObjList] = useState(socialmediaObj);

  var settings = {
    dots: true,
    arrows: false,
    arrow: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    cssEase: "linear",
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="social-area"
      >
        <section className="latest-news">
          <div className="ltnewsheader">
            <div style={{ color: "#fff" }} className="book-a-lecture-container">
              Social Media
            </div>
            <div className="ltnewsheader-child"></div>
          </div>

          <div className="catButton">
            {socialLink.map(({ icon, link, id }) => (
              <button id={id} className="social-btn">
                {icon}
              </button>
            ))}
          </div>
          <div className="social-slider-wrapper" style={{}}>
            <Slider {...settings}>
              {youtube?.map((card, index) => (
                <LinkedInCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  publishedAt={card.publishedAt}
                  videoId={card.videoId}
                />
              ))}
              {youtube?.map((card, index) => (
                <LinkedInCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  publishedAt={card.publishedAt}
                  videoId={card.videoId}
                />
              ))}
            </Slider>
            
          </div>

        </section>
      </motion.div>
    </>
  );
};

export default SocialMedia;
