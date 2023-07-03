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
import {Splide , SplideSlide}  from '@splidejs/react-splide';
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
            options={{
              rewind: false,
              arrows:true,
              pagination:false,
              perPage: 1,
              perMove: 1,
              gap: '1rem',
              breakpoints: {
                768: {
                  perPage: 1,
                },
                1000: {
                  perPage: 2,
                },
                1600: {
                  perPage: 3,
                },
              },
            }}
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
                />
                </SplideSlide>
              ))}
            </Splide>
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
