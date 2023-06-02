import styled from "styled-components";
import { Link } from "react-router-dom";
import Bg from "assets/hero/HeaderBG.jpg";
export const SlideWrapper = styled.div`
  width: 100vw;
  position: relative;
  font-family: inherit;
  overflow: hidden;
  background: black;
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
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    min-height: 700px;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: auto;
  display: flex;
  height: 100%;
`;
export const LeftArea = styled.div`
  width: 60%;
  padding-top: 15%;
  z-index: 1;
  @media screen and (max-width: 760px) {
    width: 98%;
    padding-top: 50%;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-size: 3.3rem;
  font-weight: bold;
  font-family: "Gilroy";
  @media screen and (max-width: 1100px) {
    font-size: 3.7rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 760px) {
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: center;
    display: block;
  }
`;

export const Line = styled.div`
  height: 5px;
  width: 100px;
  background: #fff;
  margin-top: 10px;
  @media screen and (max-width: 760px) {
    margin: 10px auto;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  margin-top: 20px;
  width: 80%;
  line-height: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  @media screen and (max-width: 1100px) {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 760px) {
    text-align: center;
    width: 100%;
  }
`;

export const ButtonArea = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
  }
`;

export const RightArea = styled.div`
  margin-left: auto;
  width: 40%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 760px) {
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 95%;
  z-index: 0;
  margin-left: -25%;
  position: absolute;
  bottom: 0px;
  @media screen and (max-width: 760px) {
    margin: auto;
    opacity: 0.4;
    width: 98%;
  }
`;

export const BottomArea = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

export const TagArea = styled.div`
  border-top-right-radius: 20px;
`;

export const SocialArea = styled(Link)`
  font-size: 30px;
  position: absolute;
  top: 25%;
  left: 70%;
  z-index: 999;
  padding: 10px;
  color: #fff;
  @media screen and (max-width: 760px) {
    top: 70%;
    /* background: gold !important; */
    left: 40%;
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
`