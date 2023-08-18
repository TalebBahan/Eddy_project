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
  CheckGroub,
  CheckLabel,
  CheckInput,
  ErrorText,
} from "./SubscribePopup";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSubscribeMutation } from "apiSlice";
import ReCAPTCHA from "react-google-recaptcha";

const SubscribePopup = ({ email, setEmail, interestsData }) => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState('');
  const [age, setAge] = useState("");
  const [sent, setSent] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [captchaValue, setCaptchaValue] = useState(null);
  // get the res 
  const [subscribe] = useSubscribeMutation();
  const interests = interestsData?.map((interest) => interest?.interest);
  const [formErrors, setFormErrors] = useState({});

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    if (!validateForm()) {
      return;
    }

    let element = document.getElementById("subscribtion-subimt");
    if (element) {
      element.disabled = true;
    }

    const subscriberData = {
      email,
      firstName: name,
      interests: selectedInterests,
      age: age,
      location: "",
    };

    try {
      const response = await subscribe(subscriberData);

      if (response?.error) {
        setSent(response?.error?.data?.message);
        setTimeout(() => {
          setSent(null);
          hideContact();
        }
          , 3000);
        return;
      }
      setSent("Thank you for subscribing!");
      setName("");
      setAge("");
      setSelectedInterests([]);
      setCaptchaValue(null);
      setFormErrors({});

    } catch (error) {
      console.log(error);
      setSent("An error occurred.");
    }
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setSelectedInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== value)
      );
    }
  };

  const hideContact = () => {
    let element = document.getElementById("subscribe-form");
    if (element) {
      element.style.display = "none";
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!age) {
      errors.age = "Age is required";
    }

    if (selectedInterests.length === 0) {
      errors.interests = "Please select at least one interest";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper id="subscribe-form">
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
        {sent !== null ? (
          <Container>
            <Title>{sent}</Title>
          </Container>
        ) : (
          <Container>
            <Title>Just few Details :) </Title>
            <InputArea>
              <Label htmlFor="name">Name*</Label>
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={formErrors.name ? "border-red-500" : ""}
              />
              {formErrors.name && <ErrorText>{formErrors.name}</ErrorText>}
            </InputArea>
            <InputArea>
              <Label htmlFor="age">Age*</Label>
              <Input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={formErrors.age ? "border-red-500" : ""}
              />
              {formErrors.age && <ErrorText>{formErrors.age}</ErrorText>}
            </InputArea>
            <InputArea>
              <Label>Interests*</Label>
              {/* <CheckGroub> */}
              {interests.map((interest) => (
                <CheckGroub>
                  <CheckLabel htmlFor={interest} className="light">
                    {interest}
                  </CheckLabel>
                  <CheckInput
                    key={interest}
                    type="checkbox"
                    id={interest}
                    value={interest}
                    name="user_interest"
                    onChange={handleInterestChange}
                    checked={selectedInterests.includes(interest)}
                  />
                </CheckGroub>
              ))}
              {/* </CheckGroub> */}
              {formErrors.interests && (
                <ErrorText>{formErrors.interests}</ErrorText>
              )}
            </InputArea>
            <InputArea>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_reCAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </InputArea>
            <ButtonWrapper>
              <Button onClick={hideContact} type="button" outline>
                Close
              </Button>
              <Button
                type="submit"
                disabled={!captchaValue}
                style={{
                  backgroundColor: !captchaValue ? "#ccc" : "",
                  color: !captchaValue ? "#000" : "#fff",
                  cursor: !captchaValue ? "not-allowed" : "pointer",
                }}
              >
                Submit
              </Button>
            </ButtonWrapper>
          </Container>
        )}
        <img className="latest-news-item" alt="" src="Images/LTnewsdesign3.svg" />
        <img
          className="latest-news-inner"
          alt=""
          src="Images/LTnewsdesign2@2x.png"
        />
      </Wrapper>
    </form>
  );
};

export default SubscribePopup;
