import styled from "styled-components";
import BoxBg from "assets/hero/vision-bg@2x.png";
import Bg from "assets/hero/HeaderBG.jpg";
export const SlideWrapper = styled.div`
  width: 100vw;
  background-image: url(${Bg}),
    linear-gradient(242.34deg, #9b56a6 1%, #2e208ecf 100%);
  background-color: linear-gradient(242.34deg, #9b56a6 0.72%, #2e208e 100%);
  background-size: cover;
  mix-blend-mode: hard-light;
  background-repeat: no-repeat;
  position: relative;
  font-family: inherit;
  overflow: hidden;
  max-height: 800px;
  height: 100vh;
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    min-height: 700px;
  }
`;
export const Container = styled.div`
  padding-top: 5%;
  height: 100%;
  max-width: 1400px;
  width: 90%;
  margin: auto;
  height: 100%;
  text-align: center;
  position: relative;
  @media screen and (max-width: 1100px) {
    padding-top: 10%;
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
  text-align: center;
  @media screen and (max-width: 1100px) {
    font-size: 4rem;
    line-height: 2rem;
  }
  @media screen and (max-width: 760px) {
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: center;
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
  text-align: center;
  margin: auto;
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

export const ImageBox = styled.div`
  box-sizing: border-box;
  max-width: 1100px;
  width: 80%;
  background-color: linear-gradient(242.34deg, #9b56a6 0.72%, #2e208e 100%);
  background-image: url(${BoxBg});
  mix-blend-mode: hard-light;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50%;
  border: 3px solid #e6c34b;
  border-radius: 28px;
  margin: 40px auto;
  display: flex;
  flex-grow: 1;
  @media screen and (max-width: 760px) {
    height: 40%;
    width: 100%;
    background-position: -100px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 52%;
  }
`;

export const BadgeArea = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  width: 80%;
  max-width: 900px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 760px) {
    width: 100%;
    bottom: -5px;
    overflow: hidden;
  }
`;
