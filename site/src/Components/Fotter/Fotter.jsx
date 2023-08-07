import {
  AboutText,
  AboutTextArea,
  BottomImage,
  Container,
  CopyRightLine,
  CopyRightSection,
  CopyRightText,
  EddyImgFotter,
  FotterLink,
  FotterSection,
  Line,
  LinkArea,
  LinkHeading,
  LinkWrapper,
  Title,
  TopCircle,
} from "./FotterElements";
import EmailIcon from "assets/fotter/email.png";
import LinkedIn from "assets/fotter/linkedin.png";
import EddyFotter from "assets/fotter/eddy-footer.png";
import BottomCircle from "assets/fotter/botom-circle.png";
import TopRight from "assets/fotter/top-right.png";

const Fotter = () => {
  return (
    <FotterSection>
      <Container>
        <Title>About Me</Title>
        <Line />
        <AboutTextArea>
          <AboutText>
            As a transformational leader, I'm passionate about creating a
            brighter future for individuals and organizations. With over two
            decades of experience in corporate governance, general management,
            and business strategy, I've helped numerous executives and
            corporations achieve their goals through authentic leadership,
            innovation, and ethical decision-making.
          </AboutText>
          <AboutText>
            Equipped with a degree in Leadership from Harvard Business School,
            several certifications from MIT, HBS and LBS, and a Master's in
            Business Administration, I have a proven track record in sales and
            operations management, P&L management, and board of director
            leadership.
          </AboutText>
          <AboutText>
            Let's collaborate to take your organization and your leadership
            skills to the next level. Contact me today to drive meaningful
            change together.
          </AboutText>
        </AboutTextArea>
        <LinkArea>
          <LinkWrapper>
            <LinkHeading>Quick Links</LinkHeading>
            <FotterLink target="_blank" to="/book">
              Book an Appointment
            </FotterLink>
            <FotterLink to="/#social">Social Media</FotterLink>
            <FotterLink to="/#news-and-article">News</FotterLink>
            <FotterLink to="/#books-to-read">Books to Read</FotterLink>
            <FotterLink to='/#articles'>Articles</FotterLink>
          </LinkWrapper>
          <LinkWrapper>
            <LinkHeading>Contact</LinkHeading>
            <FotterLink to="mailto:eddy@eddyabboud.com">
              <img
                height={30}
                style={{ marginRight: 10 }}
                src={EmailIcon}
                alt="email"
              />{" "}
              eddy@eddyabboud.com
            </FotterLink>
          </LinkWrapper>
        </LinkArea>
        <CopyRightSection>
          <CopyRightLine />
          <CopyRightText>© 2023 Eddy Abboud</CopyRightText>
          <CopyRightLine />
        </CopyRightSection>
        <FotterLink
          style={{
            margin: "auto",
            display: "block",
            textAlign: "center",
          }}
          to="https://www.linkedin.com/in/eddyabboud/"
          target="_blank"
        >
          <img
            height={35}
            style={{ marginRight: 10 }}
            src={LinkedIn}
            alt="linkedin"
          />{" "}
        </FotterLink>
        <EddyImgFotter src={EddyFotter} />
      </Container>
      <TopCircle src={TopRight} />
      <BottomImage src={BottomCircle} />
    </FotterSection>
  );
};

export default Fotter;
