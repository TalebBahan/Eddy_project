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
import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/data/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      {data && (
        <>
          <Hero data={data.content} />
          <About visionData={data.content} images={data.aboutImages} />
          <Achievements />
          <Lectures />
          <SocialMedia youtube={data.youtube}/>
          <News latestNewsObj={data.content}/>
          <NewsLetter  />
          <Footer />
          <ContactPopup />
        </>
      )}
    </>
  );
};

export default Home;
