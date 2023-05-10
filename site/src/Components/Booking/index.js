import { Container, Wrapper } from "./BookingHeroElement";
import { InlineWidget } from "react-calendly";

const BookingHero = () => {
  return (
    <Wrapper id="booking" className="hero-section">
      <Container>
        <InlineWidget
          pageSettings={{
            backgroundColor: "ffff",
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            hideLandingPageDetails: false,
            primaryColor: "9426BA",
            //textColor: "9426BA",
          }}
          styles={{ height: 700 }}
          url="https://calendly.com/eddyabboud"
          // url="https://calendly.com/acmesales"
        />
      </Container>
    </Wrapper>
  );
};

export default BookingHero;
