import { Link } from "react-router-dom";
import styled from "styled-components";
import Bg from "../../assets/hero/HeaderBG.jpg";
export const Wrapper = styled.div`
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  font-family: inherit;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    min-height: 600px;
  }
`;
export const SlideWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  font-family: inherit;
  overflow: hidden;
  @media screen and (min-width: 750px) and (min-height: 1020px) {
    height: max-content;
    height: 45vh;
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
  font-size: 1.6rem;
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
  width: 110%;
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
