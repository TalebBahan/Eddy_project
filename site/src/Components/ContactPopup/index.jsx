import { Button, ButtonWrapper, Container, Input, InputArea, Label, Title, Wrapper, Close, TextArea, ErrorText } from "./ContactPopup";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useContactMutation } from "apiSlice";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPopup = () => {
  const [sendMessage, { isLoading, isError, isSuccess }] = useContactMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [sent, setSent] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const hideContact = () => {
    let element = document.getElementById("contact-form");
    if (element) {
      element.style.display = "none";
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
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.phone) {
      errors.phone = "Phone is required";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      await sendMessage({ ...formData, captcha: captchaValue });
      if (!isError) {
        setSent("Your message was sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSent("An error occurred while sending your message.");
      }
    } catch (error) {
      setSent("An error occurred while sending your message.");
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
        <Close onClick={hideContact} type='button'>
          <FaTimes />
        </Close>
      <Container>
        {sent !== null ? <Title>{sent}</Title> : (
          <form onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <InputArea>
              <Label>Name*</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={formErrors.name ? "border-red-500" : ""}
              />
              {formErrors.name && <ErrorText>{formErrors.name}</ErrorText>}
            </InputArea>
            <InputArea>
              <Label>Email*</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formErrors.email ? "border-red-500" : ""}
              />
              {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
            </InputArea>
            <InputArea>
              <Label>Phone*</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={formErrors.phone ? "border-red-500" : ""}
              />
              {formErrors.phone && <ErrorText>{formErrors.phone}</ErrorText>}
            </InputArea>
            <InputArea>
              <Label>Message*</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={formErrors.message ? "border-red-500" : ""}
              />
              {formErrors.message && (
                <ErrorText>{formErrors.message}</ErrorText>
              )}
            </InputArea>
            <InputArea>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_reCAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </InputArea>
            <ButtonWrapper>
              <Button onClick={hideContact} outline type="button">
                Close
              </Button>
              <Button
                type="submit"
                disabled={!captchaValue}
                style={{
                  backgroundColor: !captchaValue ? "#ccc" : "",
                  color: !captchaValue ? "#000" : "#fff",
                  cursor: !captchaValue ? "not-allowed" : "pointer"
                }}
              >
                Submit
              </Button>
            </ButtonWrapper>
          </form>
        )}
      </Container>
      <img className="latest-news-item" alt="" src="Images/LTnewsdesign3.svg" />
      <img className="latest-news-inner" alt="" src="Images/LTnewsdesign2@2x.png" />
    </Wrapper>
  );
};

export default ContactPopup;
