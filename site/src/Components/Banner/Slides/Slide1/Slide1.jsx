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
  BadgeArea
} from "./Slide1Elements";
import Badge from "Components/common/Badge";
import Eaddy from "../../../../assets/hero/Eddy.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import YellowButton from "Components/common/button/yellow-button";

const Slide1 = ({ data }) => (
  <SlideWrapper>
    <Container>
      <LeftArea>
        <Title>
         { data.h_text}
        </Title>
        <Line />
        <SubTitle>
          {data.s_text}
        </SubTitle>
        <ButtonArea>
          {/* <a target="_blank" href={link}> */}
          <YellowButton text="Learn More" />
          {/* </a> */}
        </ButtonArea>
      </LeftArea>
      <RightArea>
        <Img src={Eaddy} />
      </RightArea>
      <BottomArea>
        {/* <TagArea className="badge">
          <div className="badge-child"></div>
          <div className="image-removebg-preview-1-parent">
            <img
              className="image-removebg-preview-1-icon"
              alt=""
              src="Images/imageremovebgpreview-1@2x.png"
            /> */}
            <BadgeArea >
              <Badge 
                text={data.reward}
               />
            </BadgeArea>
          {/* </div>
          <div className="badge-item"></div>
        </TagArea> */}
      </BottomArea>
    </Container>
  </SlideWrapper>
);

export default Slide1;
