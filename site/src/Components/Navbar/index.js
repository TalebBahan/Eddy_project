import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import { CloseButton, Container, HamButton, Logo, Menu, NavBar, NavItem } from "./NavbarElement";
import SignatureWhite from "../../assets/Nav/signature-white.svg";
import SignatureBlack from "../../assets/Nav/signature-black.svg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const sections = {
      home: document.getElementById("home"),
      about: document.getElementById("about"),
      lectures: document.getElementById("lectures"),
      news: document.getElementById("news"),
      articles: document.getElementById("articles"),
      achievements: document.getElementById("achievements"),
      social: document.getElementById("social"),
      books: document.getElementById("books"),
      newsletter: document.getElementById("newsletter")
    };
    const handleScroll = () => {

      const { bottom: homeBottom } = sections.home.getBoundingClientRect();
      const { bottom: aboutBottom } = sections.about.getBoundingClientRect();
      const { bottom: achievementsBottom } = sections.achievements.getBoundingClientRect();
      const { bottom: lecturesBottom } = sections.lectures.getBoundingClientRect();
      const { bottom: socialBottom } = sections.social.getBoundingClientRect();
      const { bottom: newsBottom } = sections.news.getBoundingClientRect();
      const { bottom: booksBottom } = sections.books.getBoundingClientRect();
      const { bottom: articlesBottom } = sections.articles.getBoundingClientRect();
      const { bottom: newsletterBottom } = sections.newsletter.getBoundingClientRect();
      const shouldInverseNavbar = (homeBottom <= 50 && aboutBottom >= 50) ||
       (achievementsBottom <= 50 && lecturesBottom >= 50) || (socialBottom <= 50 && newsBottom >= 50) || (booksBottom <= 50 && articlesBottom >= 50) || (newsletterBottom <= 50)
        ;
  
      const shouldRemoveInverseNavbar = (aboutBottom <= 50 && achievementsBottom >= 50) ||
        (lecturesBottom <= 50 && socialBottom >= 50) || (newsBottom <= 50 && booksBottom >= 50) || (articlesBottom <= 50 && newsletterBottom >= 50);
       
  
      setIsIntersecting(shouldInverseNavbar);
  
      if (shouldRemoveInverseNavbar) {
        setIsIntersecting(false);
        navbar.classList.remove("inverse");
      }
    };
  
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isIntersecting]);
  

  const toggle = () => {
    setActive((prev) => !prev);
  };

  const showContact = () => {
    let element = document.getElementById("contact-form");
    if (element) {
      element.style.display = "flex";
    }
  };

  const showSearch = () => {
    let element = document.getElementById("search-form");
    if (element) {
      element.style.display = "flex";
    }
  };

  return (
    <NavBar active={active} id="navbar" className={isIntersecting ? "inverse" : ""}>
      <Container>
        <HashLink style={{ textDecoration: "none", color: "inherit" }} smooth spy to="/#home">
          <Logo src={isIntersecting ? SignatureBlack : SignatureWhite} alt="logo" />
        </HashLink>

        <HamButton onClick={toggle} active={active}>
          <AiOutlineAlignRight />
        </HamButton>

        <Menu show={show}>
          <CloseButton onClick={toggle}>
            <AiOutlineClose fontSize={22} fontWeight={800} />
          </CloseButton>
          <NavItem active={active}>
            <HashLink style={{ textDecoration: "none", color: isIntersecting ? 'black' : 'white' }} smooth spy to="/#about">
              About
            </HashLink>
          </NavItem>
          <NavItem active={active}>
            <HashLink style={{ textDecoration: "none", color:isIntersecting ? 'black' : 'white' }} smooth spy to="/#book">
              Book
            </HashLink>
          </NavItem>
          <NavItem onClick={showContact} active={active}>
            <HashLink style={{ textDecoration: "none", color:isIntersecting ? 'black' : 'white' }} smooth spy to="/#contact">
              Contact
            </HashLink>
          </NavItem>
          <NavItem active={active} onClick={showSearch}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill={isIntersecting ? "black" : "white"}
            >
              <path d="M24.8042 24.1733L17.7003 17.0889C19.2031 15.3178 20.0909 13.07 20.0909 10.6176C20.0909 5.09995 15.5826 0.604004 10.0499 0.604004C4.51709 0.603766 0.00878906 5.09977 0.00878906 10.6176C0.00878906 16.1354 4.51715 20.6311 10.0499 20.6311C12.5089 20.6311 14.7631 19.7456 16.4707 18.3152L23.5746 25.3315C23.7111 25.4676 23.9843 25.604 24.1892 25.604C24.3941 25.604 24.599 25.5358 24.8038 25.3315C25.0771 24.9908 25.0771 24.514 24.8038 24.1735L24.8042 24.1733ZM1.71652 10.6176C1.71652 6.05362 5.4735 2.30699 10.0499 2.30699C14.6163 2.30699 18.3733 6.05338 18.3733 10.6176C18.3733 15.1816 14.6163 18.9282 10.0499 18.9282C5.4735 18.9282 1.71652 15.1816 1.71652 10.6176Z" />

            </svg>
          </NavItem>
        </Menu>
      </Container>
    </NavBar>
  );
};

export default Navbar;
