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
  CheckInput
} from "./SubscribePopup";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSubscribeMutation } from "apiSlice";

const SubscribePopup = ({ email, setEmail }) => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [sent, setSent] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [subscribe,{isSuccess,isError}] = useSubscribeMutation()
  const interests = [
    "Leadership development",
    "Organizational transformation",
    "Corporate governance",
    "Business strategy",
    "Sales and operations management",
    "Board of director leadership",
    "Professional development",
    "Entrepreneurship",
    "Executive coaching",
    "Business analytics"
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    let element = document.getElementById("subscribtion-subimt");
    if (element) {
      element.disabled = true;
    }
    const subscriberData = {
      email,
      firstName: name,
      interests: selectedInterests,
      age: age,
      location: '', // You didn't specify how to capture the location, so I left it empty
    };

    try {
      await subscribe(subscriberData);
      if (!isError) {
        setSent('You have subscribed successfully.');
      } else {
        setSent('You have already suscribed .');
      }
    } catch (error) {
      setSent('An error occurred.');
    }
   
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setSelectedInterests((prevInterests) => prevInterests.filter((interest) => interest !== value));
    }
  };
  const hideContact = () => {
    let element = document.getElementById("subscribe-form");
    if (element) {
      element.style.display = "none";
    }
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
        <Close onClick={hideContact}>
          <FaTimes />
        </Close>
        {
          sent !== null ?
            <Container><Title>{sent}</Title></Container>
              :
              <Container>

                <Title>Just fiew Details :) </Title>
                <InputArea>
                  <Label>Name</Label>
                  <Input
                    name="user_name" value={name} onChange={(e) => setName(e.target.value)}
                  />
                </InputArea>
                <InputArea>
                  <Label>Age</Label>
                  <Input
                    type="number" name="user_name" value={age} onChange={(e) => setAge(e.target.value)}
                  />
                </InputArea>
                <InputArea>
                  <Label>Interests</Label>
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
                </InputArea>
                <ButtonWrapper>
                  <Button type="submit" id="subscribtion-subimt">Submit</Button>
                  <Button onClick={hideContact} outline>
                    Close
                  </Button>
                </ButtonWrapper>
              </Container>
        }

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
