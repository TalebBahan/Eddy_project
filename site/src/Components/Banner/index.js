import Slider from "react-slick";
import { Wrapper } from "./BannerElement";
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";
import Slide3 from "./Slides/Slide3/Slide3";
import Slide4 from "./Slides/Slide4/Slide4";

const Hero = ({data}) => {
  const filterbytype = () => data?.filter(item => item.type === 'carousel');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Wrapper id="home" className="hero-section">
      <Slider {...settings}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </Slider>
    </Wrapper>
  );
};

export default Hero;
