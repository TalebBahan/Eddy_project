import Navbar from "../Components/Navbar/index";
import Hero from "../Components/Banner/index";
import About from "../Components/Vision/About";
import Achievements from "../Components/Achievements";
import Lectures from "../Components/Lecture/Lectures";
import SocialMedia from "../Components/Social/SocialMedia";
import News from "../Components/News";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Fotter/Fotter";
import ContactPopup from "../Components/ContactPopup";
import Articles from "Components/articles/Articles";
import React from "react";
import { useGetDataQuery } from "apiSlice";
import SearchPopup from "Components/SearchPoppup";
import Books from "Components/books/Books";


const Home = () => {
  const { data, isLoading } = useGetDataQuery();

  if (isLoading) {
    return <div></div>
  }

  const media = data?.content.filter((item) => item.type === "media")

  return (
    <>

      {data && (
        <>
          <Navbar />
          <section id="home">
            <Hero data={data.heroLinks} />
          </section>
          <section id="about">
            <About visionData={data.content} images={data.aboutImages} />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="lectures">
            <Lectures />
          </section>
          <section id="social">
            <SocialMedia youtube={data.youtube} linkedin={data.linkedin} />
          </section>
          <section id="news">
            <News latestNewsObj={data.content} />
          </section>
          <section id="books">
            <Books books={data.books} active={false} />
          </section>
          <section id="articles">
            <Articles articles={data.articles} />
          </section>
          <section id="newsletter">
            <NewsLetter interestsData={data.interests} />
          </section>
            <Footer />
            <ContactPopup />
            <SearchPopup media={media} books={data.books} articles={data.articles} youtube={data.youtube} linkedin={data.linkedin} />
          </>
      )}
        </>
      );
};

      export default Home;
