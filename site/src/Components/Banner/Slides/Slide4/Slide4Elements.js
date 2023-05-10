import styled from "styled-components";
import Bg from "assets/hero/HeaderBG.jpg";
import Slide4Image from "../../../../assets/hero/slide4.png";

export const SlideWrapper = styled.div`
  width: 100vw;
  background: url(${Bg}), linear-gradient(242.34deg, #9b56a6 1%, #2e208ecf 100%);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  font-family: inherit;
  overflow: hidden;
  max-height: 800px;
  height: 100vh;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    min-height: 700px;
  }
`;

export const Container = styled.div`
  padding-top: 6%;
  height: 100%;
  max-width: 1400px;
  width: 90%;
  margin: auto;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1100px) {
    padding-top: 10%;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding-top: 30%;
  }
`;

export const LeftArea = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0px;
  top: 0px;
  background: url(${Slide4Image});
  background-size: cover;
  mix-blend-mode: overlay;
  background-position: 0px 40%;
  background-repeat: no-repeat;
  @media screen and (max-width: 760px) {
    width: 100%;
    mix-blend-mode: overlay;
    background-position: 60% 0px;
  }
`;

export const RightArea = styled.div`
  position: absolute;
  right: 0px;
  width: 50%;
  text-align: left;
  padding: 5% 2%;
  @media screen and (max-width: 760px) {
    width: 100%;
    position: relative;
  }
`;

export const Heading = styled.h1`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 3.3rem;
  line-height: 4rem;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 1100px) {
    font-size: 4rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 760px) {
    font-size: 3rem;
    line-height: 3.5rem;
    display: block;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  margin-top: 20px;
  width: 80%;
  line-height: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 760px) {
    text-align: center;
    width: 100%;
  }
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  right: -10px;
  bottom: -2px;
`;
