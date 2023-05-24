import { Link } from "react-router-dom";
import styled from "styled-components";
import Bg from "../../assets/hero/HeaderBG.jpg";
export const Wrapper = styled.div`
  width: 100vw;
  ${'' /* height: 100vh; */}
  background: url(${Bg}), linear-gradient(242.34deg, #9b56a6 1%, #2e208ecf 100%);
  /* background-color: linear-gradient(242.34deg, #9b56a6 1%, #2e208e 100%); */
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  font-family: inherit;
  @media screen and (max-width: 760px) {
    height: max-content;
  }

  @media screen and (min-width: 750px) and (min-height: 1020px) {
    height: max-content;
    height: 45vh;
  }
  @media screen and (max-width: 1370px) and (min-height: 1020px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  height: max-content;
  display: inline-block;
  width: 100%;
  margin-top: 10%;
  @media screen and (max-width: 760px) {
    width: 90%;
    margin: 100px 5%;
    height: max-content;
  }
`;
