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
const SocialMedia = ({ youtube, linkedin }) => {


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

  const cardsData = [
    {
      title: 'The Timbers',
      videoId: 'DQ6Cjq6diLk',
      description:
        'THE TIMBERS’ thumping rhythms and big misty mountain melodies will cast you away to a sweaty, smoky, melting-pot of folk, roots and Celtic bushman brassy punk. They rollick and hammer their way through live gigs with abundant energy and have become festival favourites throughout Australia.',
    },
    {
      title: 'Z-STAR Trinity',
      videoId: 'LR6xXs4lDsA',
      description:
        'Shaking up the Australian blues scene, award-winning international artist Zee Gachette will be setting the stage alight with her high octane energy modern blues, psyche rock, folk n’ funk. Zee’s inimitable talent for improvising onstage is simply exhilarating to watch, inspiring standing ovations from music legends like Jimmy Page (Led Zeppelin), Roger Daltrey (The Who) and Amy Winehouse. A show not to be missed!',
    },
    {
      title: 'Dubarray',
      videoId: 'JAdVqLMdDhY',
      description:
        'Uplifting, Soulful & Euphoric, Dubarray combine a fresh fusion of boundary bending world music that infuses such styles as trip-hop, funk, reggae, dancehall, drum & bass, house and tribal grooves layered on a bed electronic ambience and organic undertones.',
    },
    {
      title: 'The Sexicclesiastes',
      videoId: 'HUC7nfQxVDI',
      description:
        'Having been described as a "raucous circus of hyper speed gypsy rock” embracing "just about every element of theatrical rock & roll in existence”, this psychedelic punk folk outfit has been bringing their vigorous foot stomping hectic good times tunage to Palm Creek for at least 15 years. The heat has caused their memories to be a little hazy.',
    },
  ];

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
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>



          <div className="social-slider-wrapper" style={{}}>
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
