import {
  SlideWrapper,
  Container,
  LeftArea,
  RightArea,
  LeftImage,
  Heading,
  SubHeading,
  BadgeWrapper,
} from "./Slide4Elements";
import Slide4Image from "../../../../assets/hero/slide4.png";
import YellowButton from "../../../common/button/yellow-button";
import Badge from "Components/common/Badge";
const Slide4 = ({link}) => {
  return (
    <SlideWrapper>
      <Container>
        <LeftArea></LeftArea>

        <RightArea>
          <Heading>
            Leading with Authenticity: <br /> A Fresh and Fearless <br />{" "}
            Approach to Modern <br /> Leadership
          </Heading>
          <SubHeading>
            Unlock your full potential as a leader by embracing your authentic
            self and inspiring others.
          </SubHeading>
          <a target="_blank" href={link}><YellowButton text="Learn More" /></a>
        </RightArea>
        <BadgeWrapper>
          <Badge />
        </BadgeWrapper>
      </Container>
    </SlideWrapper>
  );
};

export default Slide4;
