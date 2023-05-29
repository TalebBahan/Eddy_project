import React, { useState } from "react";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputArea,
  Title,
  Wrapper,
  Close,
  Li,
  Label
} from "./SearchPopup";
import { FaTimes } from "react-icons/fa";

const SearchPopup = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const hideSearch = () => {
    let element = document.getElementById("search-form");
    if (element) {
      element.style.display = "none";
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    if (searchInput.length !== 0) {
      setSuggestions([]);
      return;
    }
    const filteredSuggestions = data.content.filter(
      (item) => item.type === "media"
    );

    const matchedContentSuggestions = filteredSuggestions.filter((item) =>
      item.s_text.toLowerCase().includes(value.toLowerCase())
    );

    const matchedYouTubeSuggestions = data.youtube.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions([...matchedContentSuggestions, ...matchedYouTubeSuggestions]);
  };
  return (
    <Wrapper id="search-form">
      <Close onClick={hideSearch}>
        <FaTimes />
      </Close>
      <Container>
        <Title>Search</Title>
        <InputArea>
          <Input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleInputChange}
          />
        </InputArea>
        <Label>YouTube</Label>
        <ul>
          {suggestions.length > 0 &&
            suggestions.filter((item) => item.hasOwnProperty("videoId"))
              .map((item) => (
                <Li key={item.videoId}>{item.title}</Li>
              ))}
        </ul>
        <Label>Media Coverage and Articles</Label>
        <ul>
          {suggestions.length > 0 &&
            suggestions.filter((item) => item.hasOwnProperty("s_text"))
              .map((item) => (
                <Li key={item.link}>{item.s_text}</Li>
              ))}
        </ul>
        <ButtonWrapper>
          <Button onClick={hideSearch} outline>
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

export default SearchPopup;
