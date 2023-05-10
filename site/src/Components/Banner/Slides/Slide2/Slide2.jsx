import {
  SlideWrapper,
  Container,
  Heading,
  SubHeading,
  ImageBox,
  BadgeArea,
} from "./Slide2Elements";
import Badge from "Components/common/Badge";
import YellowButton from "../../../common/button/yellow-button";
const Slide2 = () => {
  return (
    <SlideWrapper>
      <Container>
        <Heading>Driving Results Through Leadership</Heading>
        <SubHeading>
          Combining innovation with bold leadership to achieve tangible results
          and drive sustainable growth.
        </SubHeading>
        <YellowButton text="Learn More" />
        <ImageBox></ImageBox>
        <BadgeArea>
          <Badge />
        </BadgeArea>
      </Container>
    </SlideWrapper>
  );
};

export default Slide2;
