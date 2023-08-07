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

const Slide3 = ({ data }) => {
  return (
    <SlideWrapper>
      <Container>
        <Heading>{data.h_text}</Heading>
        <SubHeading>
          {data.s_text}
        </SubHeading>
        <BadgeWrapper>
          <Badge text={data.text} />
        </BadgeWrapper>
        {/* <a target="_blank" href={link}> */}
        <YellowButton text="Learn More" />
        {/* </a> */}
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
