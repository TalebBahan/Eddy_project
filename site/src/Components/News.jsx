import React from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";

const News = ({ latestNewsObj }) => {
  const filterByType = () => latestNewsObj.filter(item => item.type === 'media');

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
            <div className="book-a-lecture-container">
              Media Coverage and Articles
            </div>
            <div className="ltnewsheader-child"></div>
          </div>

          <Splide
            options={{
              rewind: false,
              gap: "10px",
              perPage: 3,
            }}
            aria-label="My Favorite Images"
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
                      <button className="read-more-wrapper">
                        <a className="read-more" href={item.link}>
                          Read More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="ltswipers">
            {/* <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltleftswiper.svg"
            />
            <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltrightswiper.svg"
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
