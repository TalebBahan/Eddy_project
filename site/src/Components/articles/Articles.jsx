import React from 'react';
import Card from './Card';
import './style.css';
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
const Articles = ({ articles }) => {
    const chunkSize = 5; // Number of articles per slide
    const slideCount = Math.ceil(articles.length / chunkSize); // Calculate the number of slides

    // Create an array of arrays, where each subarray contains chunkSize number of articles
    const articleChunks = Array.from({ length: slideCount }, (_, index) =>
        articles.slice(index * chunkSize, (index + 1) * chunkSize)
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            id="articles"
        >
            <section className="latest-news">
                <img
                    className="latest-news-child"
                    alt=""
                    src="Images/LTnewsdesign1@2x.png"
                />
                <div className="ltnewsheader">
                    <div className="booking-meeting-text">Articles</div>
                    <div className="ltnewsheader-child"></div>
                </div>
                <Splide
                    options={{
                        rewind: false,
                        arrows: true,
                        perPage: 1,
                        pagination: false, // Remove dots navigation
                        autoplay: false,
                        gap: "1rem",
                    }}
                    aria-label="My Favorite Images"
                >
                    {articleChunks.map((articlesChunk, index) => (
                        <SplideSlide key={index}>
                            <div className="searchresultsarea">
                                {articlesChunk.map((article, articleIndex) => (
                                    <Card key={articleIndex} {...article} />
                                ))}
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <img
                    className="latest-news-item"
                    alt=""
                    src="Images/LTnewsdesign3.svg"
                    style={{ zIndex: -1 }}
                />
                <img
                    className="latest-news-inner"
                    alt=""
                    src="Images/LTnewsdesign2@2x.png"
                />
            </section>
        </motion.div>
    );
};


export default Articles;
