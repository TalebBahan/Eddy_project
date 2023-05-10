import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./vision.css";
import Img1 from "assets/vision/1.jpg";
import Img2 from "assets/vision/2.jpg";
import Img3 from "assets/vision/3.jpg";
import LeftCircle from "assets/vision/layout/left-circle.png";
import LeftShadow from "assets/vision/layout/left-shadow.png";
import RigthtShadow from "assets/vision/layout/right shadow.png";
import RigthCircle from "assets/vision/layout/right-circle.png";
const Vision = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        id="about"
        style={{ position: "relative" }}
      >
        <section className="vision-statement2">
          <div className="visiondiv">
            <div className="visition-mission-text-wrapper">
              <div>
                <h1 className="voilet-heading">Vision</h1>
                <img
                  className="visiontexthighlighted-child"
                  alt=""
                  style={{
                    margin: "10px 2px",
                    padding: 0,
                    display: "block",
                  }}
                  src="Images/hrline1@2x.png"
                />
                <p className="common-para">
                  To be a leading force in driving positive transformation and
                  growth for individuals and organizations, creating a brighter
                  future together.
                </p>
              </div>
              <div>
                <h1 className="voilet-heading">Mission</h1>
                <img
                  className="visiontexthighlighted-child"
                  alt=""
                  style={{
                    margin: "10px 2px",
                    padding: 0,
                    display: "block",
                  }}
                  src="Images/hrline1@2x.png"
                />
                <p className="common-para">
                  Leading the transformation of individuals and corporations for
                  a sustainable future, one ethical, legal, and economical
                  decision at a time.
                </p>
              </div>
            </div>
            <div className="slider-wrapper-visition">
              <Slider style={{ width: "100%" }} {...settings}>
                <img className="visionimgcontainer-icon" alt="" src={Img1} />
                <img className="visionimgcontainer-icon" alt="" src={Img2} />
                <img
                  id="slid3-img"
                  className="visionimgcontainer-icon"
                  alt=""
                  src={Img3}
                />
              </Slider>
            </div>
          </div>
        </section>
        <img className="left-shadow" src={LeftShadow} />
        <img className="left-circle" src={LeftCircle} />
        <img className="right-shadow" src={RigthtShadow} />
        <img className="right-circle" src={RigthCircle} />
      </motion.div>
    </>
  );
};

export default Vision;
