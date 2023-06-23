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
const Slide2 = ({link}) => {
  
  return (
    <SlideWrapper>
      <Container>
        <Heading>Driving Results Through Leadership</Heading>
        <SubHeading>
          Combining innovation with bold leadership to achieve tangible results
          and drive sustainable growth.
        </SubHeading>
        {/* <a target="_blank" href={link}> */}
        <YellowButton text="Learn More"/>
        {/* </a> */}
        <ImageBox></ImageBox>
        <BadgeArea>
          <Badge />
        </BadgeArea>
      </Container>
    </SlideWrapper>
  );
};

export default Slide2;
