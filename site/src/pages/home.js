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
import React from "react";
import { useGetDataQuery } from "apiSlice";
const Home = () => {
  const { data, isLoading } = useGetDataQuery()
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Navbar />
      {data && (
        <>
          <Hero data={data.heroLinks} />
          <About visionData={data.content} images={data.aboutImages} />
          <Achievements />
          <Lectures />
          <SocialMedia youtube={data.youtube} />
          <News latestNewsObj={data.content} />
          <NewsLetter />
          <Footer />
          <ContactPopup />
        </>
      )}
    </>
  );
};

export default Home;
