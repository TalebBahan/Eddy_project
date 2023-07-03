import { Button, ButtonWrapper, Container, Input, InputArea, Label, Title, Wrapper, Close, TextArea } from "./ContactPopup";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useContactMutation } from "apiSlice";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPopup = () => {
  const [sendMessage, { isLoading, isError, isSuccess }] = useContactMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const hideContact = () => {
    let element = document.getElementById('contact-form');
    if (element) {
      element.style.display = 'none';
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log('====================================');
    console.log(value);
    console.log('====================================');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    try {
      await sendMessage({ ...formData, captcha: captchaValue });
      if (!isError) {
        setSent('Your message was sent successfully.');
      } else {
        setSent('An error occurred while sending your message.');
      }
    } catch (error) {
      setSent('An error occurred while sending your message.');
    }
  };

  return (
    <Wrapper id="contact-form">
      <img className="latest-news-child" alt="" src="Images/LTnewsdesign1@2x.png" />
      <div className="book-a-lecture-inner">
        <img className="group-inner" alt="" src="Images/polygon-4.svg" />
      </div>
      <img className="book-a-lecture-child" alt="" src="Images/group-2303.svg" />
      <Close onClick={hideContact}>
        <FaTimes />
      </Close>
      <Container>
        {sent !== null ? <Title>{sent}</Title> :
          <form onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <InputArea>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputArea>
            <InputArea>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputArea>
            <InputArea>
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </InputArea>
            <InputArea>
              <Label>Message</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </InputArea>
            <InputArea>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_reCAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </InputArea>
            <ButtonWrapper>
              <Button type="submit" disabled={!captchaValue} style={
                {
                  backgroundColor: !captchaValue ? '#ccc' : '',
                  color: !captchaValue ? '#000' : '#fff',
                  cursor: !captchaValue ? 'not-allowed' : 'pointer'
                }
              } >
                Submit
              </Button>
              <Button onClick={hideContact} outline>
                Close
              </Button>
            </ButtonWrapper>
          </form>
        }
      </Container>
      <img className="latest-news-item" alt="" src="Images/LTnewsdesign3.svg" />
      <img className="latest-news-inner" alt="" src="Images/LTnewsdesign2@2x.png" />
    </Wrapper>
  );
};

export default ContactPopup;
