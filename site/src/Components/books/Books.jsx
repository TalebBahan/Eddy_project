import React from "react";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
import Slider from "react-slick";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from "./Card";
import { useEffect } from "react";
const Books = ({ books,setActive,active }) => {

  // const searchBox = window.document.getElementById('searchBox');
  // const s = window.document.getElementById('s');
  // const str = window.document.getElementById('str');
  // if (window.scrollY > WINDOW_HEIGHT) {

  //   setActive(true);
  // } else {
  //   searchBox.classList.remove('redFill');
  //   s.classList.remove('redFill');
  //   str.classList.remove('t');
  //   setActive(false);
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const top =parseInt( window.document.scrollingElement.scrollTop);
  //     const component = document.getElementById('books-to-read')
  //     if (top >= component.offsetTop && top <= component.offsetTop + 10 ) {
  //       setActive();
  //     }
  //   });
  // }, [active]);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const top =parseInt( window.document.scrollingElement.scrollTop);
  //     const component = document.getElementById('books-to-read')
  //     if (top >= component.offsetTop && top <= component.offsetTop + 10 ) {
  //       setActive();
  //     }
  //   });
  // }, [active]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="social-area"
        id="books-to-read"
      >
        <section className="latest-news">
          <div className="ltnewsheader">
            <div style={{ color: "#fff" }} className="book-a-lecture-container">
              Books To Read
            </div>
            <div className="ltnewsheader-child"></div>
          </div>
          <div className="social-slider-wrapper" >
            <Splide
              options={{
                rewind: false,
                arrows: true,
                pagination: false,
                perPage: 2,
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
              }}
            >
              {books?.map((card, index) => (
                <SplideSlide>
                  <Card
                    key={index}
                    {...card}
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

export default Books;
