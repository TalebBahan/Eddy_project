import React from "react";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
import Slider from "react-slick";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from "./Card";
import { useEffect } from "react";
const Books = ({ books, setActive, active }) => {
  const chunkSize = 1; // Number of articles per slide
  const slideCount = Math.ceil(books.length / chunkSize); // Calculate the number of slides

  // Create an array of arrays, where each subarray contains chunkSize number of articles
  const booksChunks = Array.from({ length: slideCount }, (_, index) =>
    books.slice(index * chunkSize, (index + 1) * chunkSize)
  );

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
                perPage: 1,
                // disable the the swipe functionality
                drag: false,
                gap: '1rem',
                breakpoints: {
                  768: {
                    perPage: 1,
                  },
                  1000: {
                    perPage: 1,
                  }
                },
              }}
            >
              {booksChunks.map((articlesChunk, index) => (
                <SplideSlide key={index}>
                  {articlesChunk.map((article, articleIndex) => (
                    <Card key={articleIndex} {...article} />
                  ))}
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
