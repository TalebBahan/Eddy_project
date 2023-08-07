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
const Slide4 = ({ data }) => {
  return (
    <SlideWrapper>
      <Container>
        <LeftArea></LeftArea>

        <RightArea>
          <Heading>
            {data.h_text}
          </Heading>
          <SubHeading>
            {data.s_text}
          </SubHeading>
          {/* <a target="_blank" href={link}> */}
          <YellowButton text="Learn More" />
          {/* </a> */}
        </RightArea>
        <BadgeWrapper>
          <Badge text={data.reward} />
        </BadgeWrapper>
      </Container>
    </SlideWrapper>
  );
};

export default Slide4;
