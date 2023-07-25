import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";



const News = ({ latestNewsObj }) => {
  const splideRef = useRef(null);

  const filterByType = () => latestNewsObj.filter(item => item.type === 'media');

  const handleSwipeLeft = () => {
    if (splideRef.current) {
      splideRef.current.go('-1');
    }
  };

  const handleSwipeRight = () => {
    if (splideRef.current) {
      splideRef.current.go('+1');
    }
  };
  const breakpoints = {
    768: {
      perPage: 1,
    },
    1000: {
      perPage: 2,
    },
    1600: {
      perPage: 3,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        id="news-and-article"
      >
        <section className="latest-news">
          <img
            className="latest-news-child"
            alt=""
            src="Images/LTnewsdesign1@2x.png"
          />
          <div className="ltnewsheader">
            <div className="booking-meeting-text">
              Media Coverage and Articles
            </div>
            <div className="ltnewsheader-child"></div>
          </div>
          <div className="ltnewsbody">
          <Splide
            options={{
              rewind: false,
              arrows: true,
              perPage: 3,
              breakpoints: breakpoints,
              pagination: false, // Remove dots navigation
              autoplay: false,
              gap: "1rem",
            }}
            aria-label="My Favorite Images"
            ref={splideRef}
          >
            {filterByType().map((item, index) => (
              <SplideSlide key={index}>
                <div className="ltnewscontainer">
                  <div className="ltnews1">
                    <img
                      className="ltnews1-child"
                      alt=""
                      src={`${process.env.REACT_APP_API}/images/${item.image}`}
                    />
                    <div className="frame-group">
                      <div className="title-parent">
                        <b className="title">{item.h_text}</b>
                        <div className="text3">{item.s_text}</div>
                      </div>
                      <div className="read-more-wrapper">
                        <button className="read-more-button">
                          <a className="read-more" href={item.link}>
                            Read More
                          </a>
                         
                        </button>
                        <div>
                           {new Date(item.date).toLocaleDateString()}
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          </div>

          <div className="ltswipers">
            {/* <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltleftswiper.svg"
              onClick={handleSwipeLeft}
            />
            <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltrightswiper.svg"
              onClick={handleSwipeRight}
            /> */}
          </div>
          <img
            className="latest-news-item"
            alt=""
            src="Images/LTnewsdesign3.svg"
          />
          <img
            className="latest-news-inner"
            alt=""
            src="Images/LTnewsdesign2@2x.png"
          />

        </section>
      </motion.div>
    </>
  );
};

export default News;
