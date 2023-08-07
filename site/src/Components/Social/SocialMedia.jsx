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
import { Splide, SplideSlide } from '@splidejs/react-splide';
const SocialMedia = ({youtube,linkedin}) => {




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
    arrows: true,
    arrow: true,
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

  const options = {
    rewind: false,
    arrows: true,
    pagination: false,
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    breakpoints: {
      768: {
        perPage: 1,
      },
      1000: {
        perPage: 2,
      }
    },
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
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
              <a href={link} target="_blank">
                <button id={id} className="social-btn">
                  {icon}
                </button>
              </a>

            ))}
          </div>
          <div className="social-slider-wrapper" style={{}}>
            <Splide
              options={options}
            >
              {linkedin?.map((card, index) => (
                <SplideSlide>
                  <LinkedInCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    publishedAt={card.publishedAt}
                    link={card.link}
                    postImage={card.postImage}
                    tags={card.tags}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="social-slider-wrapper afds" style={{
            maxWidth: '1090px !important',

          }}>
            <Splide
              options={options}
            >
              {youtube?.map((card, index) => (
                <SplideSlide>
                  <YoutubeCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    publishedAt={card.publishedAt}
                    videoId={card.videoId}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>





        </section>
      </motion.div>
    </>
  );
};

export default SocialMedia;
