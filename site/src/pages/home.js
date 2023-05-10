import Navbar from "../Components/Navbar/index";
import Hero from "../Components/Banner/index";
import Vision from "../Components/Vision/Vision";
import Achievements from "../Components/Achievements";
import Lectures from "../Components/Lecture/Lectures";
import SocialMedia from "../Components/Social/SocialMedia";
import News from "../Components/News";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Fotter/Fotter";
import ContactPopup from "../Components/ContactPopup";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Achievements />
      <Lectures />
      <SocialMedia />
      <News />
      <NewsLetter />
      <Footer />
      <ContactPopup />
    </>
  );
};
export default Home;
