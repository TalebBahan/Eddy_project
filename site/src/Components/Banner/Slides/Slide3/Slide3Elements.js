import styled from "styled-components";
import Bg from "assets/hero/HeaderBG.jpg";
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
  @media screen and (max-width: 600px) {
    height: 100vh;
    overflow: hidden;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    min-height: 700px;
  }
`;

export const Container = styled.div`
  padding-top: 7%;
  height: 100%;
  max-width: 1400px;
  width: 90%;
  margin: auto;
  height: 100%;
  text-align: center;
  @media screen and (max-width: 1100px) {
    padding-top: 10%;
  }
  @media screen and (max-width: 760px) {
    padding-top: 20%;
  }
`;

export const Heading = styled.h1`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 3.3rem;
  line-height: 70px;
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
  margin-top: 10px;
  width: 80%;
  line-height: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 1100px) {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 760px) {
    text-align: center;
    width: 100%;
  }
`;

export const ImageSection = styled.div`
  display: grid;
  gap: 20px;
  width: max-content;
  margin: 10px auto;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    bottom: 10px;
    width: 80%;
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-height: 300px;
  border-radius: 24px;
  mix-blend-mode: overlay;
  background: linear-gradient(242.34deg, #9b56a6 0.72%, #2e208e 100%);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 200px;
  }
`;

export const BadgeWrapper = styled.div`
  margin: 10px auto;
`;
