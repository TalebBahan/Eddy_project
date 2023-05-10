import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputArea,
  Label,
  Title,
  Wrapper,
  Close,
} from "./ContactPopup";
import { FaTimes } from "react-icons/fa";

const ContactPopup = () => {
  const hideContact = () => {
    let element = document.getElementById("contact-form");
    if (element) {
      element.style.display = "none";
    }
  };
  return (
    <Wrapper id="contact-form">
      <img
        className="latest-news-child"
        alt=""
        src="Images/LTnewsdesign1@2x.png"
      />
      <div className="book-a-lecture-inner">
        <img className="group-inner" alt="" src="Images/polygon-4.svg" />
      </div>
      <img
        className="book-a-lecture-child"
        alt=""
        src="Images/group-2303.svg"
      />
      <Close onClick={hideContact}>
        <FaTimes />
      </Close>
      <Container>
        <Title>Contact</Title>
        <InputArea>
          <Label>Name</Label>
          <Input />
        </InputArea>
        <InputArea>
          <Label>Email</Label>
          <Input />
        </InputArea>
        <InputArea>
          <Label>Phone</Label>
          <Input />
        </InputArea>
        <InputArea>
          <Label>Message</Label>
          <Input />
        </InputArea>
        <ButtonWrapper>
          <Button>Submit</Button>
          <Button onClick={hideContact} outline>
            Close
          </Button>
        </ButtonWrapper>
      </Container>
      <img className="latest-news-item" alt="" src="Images/LTnewsdesign3.svg" />
      <img
        className="latest-news-inner"
        alt=""
        src="Images/LTnewsdesign2@2x.png"
      />
    </Wrapper>
  );
};

export default ContactPopup;
