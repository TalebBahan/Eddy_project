import React from "react";
import { motion } from "framer-motion";
import Img1 from "assets/lecture/book-leacture-1.png";
import Img2 from "assets/lecture/book-leacture-2.png";
import { Link } from "react-router-dom";
import "./lecture.css";
import circle from "assets/lecture/layout/circle.png";
import triangle1 from "assets/lecture/layout/triangle1.png";
import triangle2 from "assets/lecture/layout/triangle2.png";
import shadowLeft from "assets/lecture/layout/shodow-left.png";
import shadowRight from "assets/lecture/layout/shadow-right.png";
import styled from "styled-components";
const Button = styled.button`
  background: #e6c34b;
  border-radius: 6px;
  padding: 1.1rem 2.5rem;
  font-size: 1.6rem;
  border: 1px solid #e6c34b;
  font-family: "Gilroy-Medium";
  align-items: center;
  text-transform: capitalize;
  color: #9426ba;
  cursor: pointer !important;
  @media screen and (min-width: 1100px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
`;

const YellowButton = ({ text }) => <Button>{text}</Button>;
const Lectures = ({isHeroLoadding}) => {
  if(isHeroLoadding) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        id="book"
        style={{ position: "relative" }}
      >
        <section className="book-a-lecture">
          <div className="bookcontianer">
            <div className="bookframe">
              <div className="frame-parent">
                <div className="book-a-lecture-section-parent">
                  <div className="book-a-lecture-container">
                    <p className="booking-meeting-text">Book A Meeting</p>
                  </div>
                  <div className="line-div"></div>
                </div>
                <div className="individual-membership-is-container">
                  <p className="transformative-knowledge">
                    Looking to take your leadership skills to the next level and
                    make a real impact? Let's work together to transform your
                    organization and/or your career. With a track record of
                    success and a commitment to ethical, legal, and economical
                    decision-making, I have helped dozens of executives and
                    organizations achieve their goals. Whether you're looking to
                    improve your team's performance, address a specific
                    challenge, or explore new opportunities, I am here to help.
                    Contact me today and let's start driving meaningful change
                    together.
                  </p>
                </div>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                target="_blank"
                to="/book"
                //scroll to top
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <YellowButton text="Reach Out" />
              </Link>
            </div>
            <div className="bookimgcontainer">
              <div className="lecture-img-wrapper">
                <div className="leture-img-area">
                  <img src={Img1} alt="" />
                </div>
                <div className="leture-img-area">
                  <img src={Img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="book-a-lecture-inner"></div>
        </section>
        <img className="circle" src={circle} />
        <img className="triangle1" src={triangle1} />
        <img className="triangle2" src={triangle2} />
        <img className="shadowLeft" src={shadowLeft} />
        <img className="shadowRight" src={shadowRight} />
      </motion.div>
    </>
  );
};

export default Lectures;
