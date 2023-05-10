import { BadgeImg, Container, Line, Text } from "./BadgeElement";

const Badge = ({ text }) => {
  return (
    <Container>
      <BadgeImg src="/Images/imageremovebgpreview-1@2x.png" />
      <Line />
      <Text>{text}</Text>
    </Container>
  );
};

Badge.defaultProps = {
  text: "Award-winning Disruptive CEO & Technology Person of the Year (2019 & 2021)",
};

export default Badge;
