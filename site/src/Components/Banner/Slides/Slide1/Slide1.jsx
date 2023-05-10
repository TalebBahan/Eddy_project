import {
  BottomArea,
  LeftArea,
  RightArea,
  Title,
  Container,
  Line,
  SubTitle,
  ButtonArea,
  Img,
  TagArea,
  SlideWrapper,
  SocialArea,
} from "./Slide1Elements";
import Eaddy from "../../../../assets/hero/Eddy.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import YellowButton from "Components/common/button/yellow-button";

const Slide1 = () => (
  <SlideWrapper>
    <Container>
      <LeftArea>
        <Title>
          Transformative Knowledge, Innovation, Leadership, and Career Support
        </Title>
        <Line />
        <SubTitle>
          Empowering you with the knowledge, skills, and support to achieve
          career success.
        </SubTitle>
        <ButtonArea>
          <YellowButton text="Learn More" />
        </ButtonArea>
      </LeftArea>
      <RightArea>
        <Img src={Eaddy} />
      </RightArea>
      <BottomArea>
        <TagArea className="badge">
          <div className="badge-child"></div>
          <div className="image-removebg-preview-1-parent">
            <img
              className="image-removebg-preview-1-icon"
              alt=""
              src="Images/imageremovebgpreview-1@2x.png"
            />
            <b className="award-winning-disruptive-ceo">
              Award-winning Disruptive CEO & Technology Person of the Year (2019
              & 2021)
            </b>
          </div>
          <div className="badge-item"></div>
        </TagArea>
      </BottomArea>
    </Container>
  </SlideWrapper>
);

export default Slide1;
