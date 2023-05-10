import {
  SlideWrapper,
  Container,
  Heading,
  SubHeading,
  ImageSection,
  Image,
  ImageContainer,
  BadgeWrapper,
} from "./Slide3Elements";
import YellowButton from "../../../common/button/yellow-button";
import Image1 from "../../../../assets/hero/slide3/1.jpg";
import Image2 from "../../../../assets/hero/slide3/2.jpg";
import Image3 from "../../../../assets/hero/slide3/3.jpg";
import Image4 from "../../../../assets/hero/slide3/4.jpg";
import Badge from "Components/common/Badge";

const Slide3 = () => {
  return (
    <SlideWrapper>
      <Container>
        <Heading>Your Partner In Driving Meaningful Change</Heading>
        <SubHeading>
          Together, we can make a positive impact on your business, your
          community, and the world.
        </SubHeading>
        <BadgeWrapper>
          <Badge />
        </BadgeWrapper>
        <YellowButton text="Learn More" />
        <ImageSection>
          <ImageContainer>
            <Image src={Image1} />
          </ImageContainer>
          <ImageContainer>
            <Image src={Image2} />
          </ImageContainer>
          <ImageContainer>
            <Image src={Image3} />
          </ImageContainer>
          <ImageContainer>
            <Image src={Image4} />
          </ImageContainer>
        </ImageSection>
      </Container>
    </SlideWrapper>
  );
};

export default Slide3;
