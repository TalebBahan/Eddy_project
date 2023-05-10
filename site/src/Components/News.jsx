import React from "react";
import { motion } from "framer-motion";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";

const News = () => {
  const latestNewsObj = [
    {
      img: "Images/Ltnews1@2x.jpg",
      title: "Networking",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.",
      buttontext: "Read More",
    },
    {
      img: "Images/LTnews2@2x.jpg",
      title: "Security",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.",
      buttontext: "Read More",
    },
    {
      img: "Images/LTnews3@2x.jpg",
      title: "Robotics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.",
      buttontext: "Read More",
    },
  ];
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

          {/* <Splide
            options={{
              rewind: true,
              gap: "1rem",
              perPage: 1,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide> */}
          <div className="ltnewscontainer">
            {latestNewsObj.map((item, index) => {
              return (
                <>
                  <div className="ltnews1" key={index}>
                    <img className="ltnews1-child" alt="" src={item.img} />
                    <div className="frame-group">
                      <div className="title-parent">
                        <b className="title">{item.title}</b>
                        <div className="text3">{item.description}</div>
                      </div>
                      <button className="read-more-wrapper">
                        <b className="read-more">{item.buttontext}</b>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* </SplideSlide>
          </Splide> */}

          <div className="ltswipers">
            <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltleftswiper.svg"
            />
            <img
              className="ltleftswiper-icon"
              alt=""
              src="Images/ltrightswiper.svg"
            />
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
