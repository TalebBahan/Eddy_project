import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
  Label,
} from "./SearchPopup";
import { HashLink } from "react-router-hash-link";

const SearchPopup = ({
  media,
  youtube,
  linkedin,
  articles,
  books: booksData,
}) => {
  const books = booksData.map((item) => ({
    _id: item._id,
    title: item.title,
    author: item.body,
  }));
  const [searchInput, setSearchInput] = useState("");

  const getFilteredSuggestions = () => {
    if (searchInput.length < 1) {
      return []
    }
    const matchedContentSuggestions = media.filter(
      (item) =>
        item.h_text.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.s_text.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedYouTubeSuggestions = youtube.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedLinkedInSuggestions = linkedin.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedArticleSuggestions = articles.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.body.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedBookSuggestions = books.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.author.toLowerCase().includes(searchInput.toLowerCase())
    );

    return [
      ...matchedContentSuggestions,
      ...matchedYouTubeSuggestions,
      ...matchedLinkedInSuggestions,
      ...matchedArticleSuggestions,
      ...matchedBookSuggestions,
    ];
  };

  const hideSearch = () => {
    let element = document.getElementById("search-form");
    if (element) {
      element.style.display = "none";
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const renderSuggestions = (items, ownProperty, titleKey, textKey, linkKey) =>
    items
      .filter((item) => item.hasOwnProperty(ownProperty))
      .slice(0, 2)
      .map((item) => (
        <Li key={item[linkKey]}>
          <Htext>
            {
              ownProperty === "videoId" ?
                <a href={`https://www.youtube.com/watch?v=${item[linkKey]}`} target="_blank">{item[titleKey]}</a>
                :
                ownProperty === "author" ?
                  <HashLink to="/#books-to-read" onClick={hideSearch}>{item[titleKey]}</HashLink>
                  :
                  <a href={item[linkKey]}>{item[titleKey]}</a>
            }
          </Htext>
          <Stext>
            {item[textKey].length > 200
              ? item[textKey].substring(0, 200) + "..."
              : item[textKey]}
          </Stext>
        </Li>
      ));

  const filteredSuggestions = getFilteredSuggestions();

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
        <Label>Media Coverage</Label>
        <ul>
          {filteredSuggestions.length > 0 &&
            renderSuggestions(filteredSuggestions, "h_text", "h_text", "s_text", "link")}
        </ul>
        <Label>LinkedIn</Label>
        <ul>
          {filteredSuggestions.length > 0 &&
            renderSuggestions(filteredSuggestions, "tags", "tags", "title", "link")}
        </ul>
        <Label>YouTube</Label>
        <ul>
          {filteredSuggestions.length > 0 &&
            renderSuggestions(filteredSuggestions, "videoId", "title", "description", "videoId")}
        </ul>
        <Label>Articles</Label>
        <ul>
          {filteredSuggestions.length > 0 &&
            renderSuggestions(filteredSuggestions, "body", "title", "body", "link")}
        </ul>
        <Label>Books</Label>
        <ul>
          {filteredSuggestions.length > 0 &&
            renderSuggestions(filteredSuggestions, "author", "title", "author", "#books-to-read")}
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
