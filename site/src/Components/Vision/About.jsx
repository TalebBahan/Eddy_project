import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./About.css";
import LeftCircle from "assets/vision/layout/left-circle.png";
import LeftShadow from "assets/vision/layout/left-shadow.png";
import RigthtShadow from "assets/vision/layout/right shadow.png";
import RigthCircle from "assets/vision/layout/right-circle.png";

const About = ({visionData,images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!visionData || !images) {
    return <div>Loading...</div>;
  }
  const filterbytype = () => visionData.filter(item => item.type === 'about');
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
              {filterbytype().map(item =>
                <div>
                  <h1 className="voilet-heading">{item.h_text}</h1>
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
                  <p className="common-para">{item.s_text}</p>
                </div>)}
            </div>
            <div className="slider-wrapper-visition">
              <Slider style={{ width: "100%" }} {...settings}>

                {images.map(image => <img className="visionimgcontainer-icon" alt="" src={`http://localhost:3500/images/${image.image}`} />)}
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

export default About;
