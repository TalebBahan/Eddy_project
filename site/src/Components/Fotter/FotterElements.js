import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const FotterSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  background: linear-gradient(68.5deg, #ded9ff 16.57%, #f6e9f8 100.9%);
  padding: 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  position: relative;
  @media screen and (max-width: 600px) {
    z-index: 2;
  }
`;

export const Title = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  /* or 78px */
  margin-top: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  background: linear-gradient(180deg, #9426ba 0%, #2e208e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Line = styled.div`
  width: 110px;
  border: 3px solid #8b399f;
`;

export const AboutTextArea = styled.div`
  margin-top: 50px;
`;

export const AboutText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.01em;
  color: #2e208e;
  margin-top: 15px;
  line-height: 22px;
`;

export const LinkArea = styled.div`
  min-height: 250px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 50px;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 760px) {
    margin-top: 20px;
  }
`;

export const LinkHeading = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  color: #2e208e;
  @media screen and (max-width: 760px) {
    width: max-content;
    margin: auto;
  }
`;

export const FotterLink = styled(HashLink)`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.2rem;
  letter-spacing: 0.1em;
  color: #2e208e;
  text-decoration: none;
  margin-top: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 760px) {
    width: max-content;
    margin: 20px auto;
  }
`;

export const CopyRightSection = styled.div`
  margin: 20px 3%;
  width: 94%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const CopyRightLine = styled.div`
  border: 0.5px solid #b6b6b6;
  weight: 100%;
  height: 0;
`;
export const CopyRightText = styled.p`
  margin: auto 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #2e208e;
`;

export const EddyImgFotter = styled.img`
  height: 380px;
  position: absolute;
  right: 0px;
  bottom: -30px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const TopCircle = styled.img`
  position: absolute;
  z-index: 0;
  right: 3%;
  top: 4%;
`;

export const BottomImage = styled.img`
  position: absolute;
  z-index: 0;
  left: 0px;
  bottom: 0px;
  height: 14%;
`;
