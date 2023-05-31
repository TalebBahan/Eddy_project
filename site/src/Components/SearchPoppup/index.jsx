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
  Htext,
  Stext,
  Label
} from "./SearchPopup";
import { FaTimes } from "react-icons/fa";

const SearchPopup = ({ articles, youtube }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([...articles, ...youtube]);

  const hideSearch = () => {
    let element = document.getElementById("search-form");
    if (element) {
      element.style.display = "none";
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);

    const matchedContentSuggestions = articles.filter((item) =>
      item.h_text.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.s_text.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedYouTubeSuggestions = youtube.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase())
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
        <Label>Media Coverage and Articles</Label>
        <ul>
          {suggestions.length > 0 &&
            suggestions
              .filter((item) => item.hasOwnProperty("s_text"))
              .slice(0, 2) // Take only the first two items
              .map((item) => (
                <Li key={item.link}>
                  <Htext><a href={item.link}>{item.h_text}</a></Htext>
                  <Stext>{item.s_text}</Stext>
                </Li>
              ))
          }

        </ul>
        <Label>YouTube</Label>
        <ul>
          {suggestions.length > 0 &&
            suggestions
              .filter((item) => item.hasOwnProperty("videoId"))
              .slice(0, 2) // Take only the first two items
              .map((item) => (
                <Li key={item.videoId}>
                  <Htext><a href={`https://www.youtube.com/watch?v=${item.videoId}`}>{item.title}</a></Htext>
                  <Stext>{item.description}</Stext>
                </Li>
              ))
          }
        </ul>

        {/* <ButtonWrapper>
          <Button onClick={hideSearch} outline>
            Close
          </Button>
        </ButtonWrapper> */}
      </Container>
    </Wrapper>
  );
};

export default SearchPopup;
