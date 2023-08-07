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
const Slide2 = ({data}) => {
  
  return (
    <SlideWrapper>
      <Container>
        <Heading>{data.h_text}</Heading>
        <SubHeading>
          {data.s_text}
        </SubHeading>
        {/* <a target="_blank" href={link}> */}
        <YellowButton text="Learn More"/>
        {/* </a> */}
        <ImageBox></ImageBox>
        <BadgeArea>
          <Badge text={data.reward} />
        </BadgeArea>
      </Container>
    </SlideWrapper>
  );
};

export default Slide2;
