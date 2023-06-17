import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import YoutubeCard from "./YoutubeCard";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
import "./Social.css";
import LinkedInCard from "./LinkedInCard";
import Slider from "react-slick";

const SocialMedia = ({ youtube,linkedin }) => {


  const socialLink = [
    // {
    //   icon: <FaInstagram />,
    //   link: "https://www.instagram.com/eddyabboud/",
    //   id: "insta-btn",
    // },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/eddyabboud/",
      id: "linkedin-btn",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@eddymabboud",
      id: "youtube-btn",
    },
  ];


  var settings = {
    dots: true,
    arrows: false,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
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
              <a href={link}>
              <button id={id} className="social-btn">
                {icon}
              </button>
              </a>
              
            ))}
          </div>
          <div className="social-slider-wrapper" style={{}}>
            <Slider {...settings}>
              {linkedin?.map((card, index) => (
                <LinkedInCard
                  key={index}
                  title={card.title}
                  tags={card.tags}
                  link={card.link}
                  postImage={card.postImage}
                />
              ))}
            </Slider>
          </div>
          {
            youtube?.length > 0 &&
            <div className="social-slider-wrapper" style={{}}>
            <Slider {...settings}>
              {youtube?.map((card, index) => (
                <YoutubeCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  publishedAt={card.publishedAt}
                  videoId={card.videoId}
                />
              ))}
            </Slider>
          </div>

          }
          
          

        </section>
      </motion.div>
    </>
  );
};

export default SocialMedia;
