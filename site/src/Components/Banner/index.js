import Slider from "react-slick";
import { Wrapper } from "./BannerElement";
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";
import Slide3 from "./Slides/Slide3/Slide3";
import Slide4 from "./Slides/Slide4/Slide4";

const Hero = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Wrapper id="home" className="hero-section">
      <Slider {...settings}>
        <Slide1 data={data[0]} />
        <Slide2 data={data[1]} />
        <Slide3 data={data[2]} />
        <Slide4 data={data[3]} />
      </Slider>
    </Wrapper>
  );
};

export default Hero;
