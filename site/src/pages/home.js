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
  const { data, isLoading } = useGetDataQuery()
  if (isLoading) {
    return <div></div>
  }
  const media = data?.content.filter((item) => item.type === "media")
  
  return (
    <>
      
      {data && (
        <>
          <Navbar />
          <Hero data={data.heroLinks} />
          <About visionData={data.content} images={data.aboutImages} />
          <Achievements />
          <Lectures />
          <SocialMedia youtube={data.youtube} linkedin={data.linkedin} />
          <News latestNewsObj={data.content} />
          <Books books={data.books}/>
          <Articles articles={data.articles} />
          <NewsLetter interestsData={data.interests}/>
          <Footer />
          <ContactPopup />
          <SearchPopup media={media} books={data.books} articles={data.articles} youtube={data.youtube}  linkedin={data.linkedin}/>
        </>
      )}
    </>
  );
};

export default Home;
