import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import {
  CloseButton,
  Container,
  HamButton,
  Logo,
  Menu,
  NavBar,
  NavItem,
} from "./NavbarElement";
import SignatureWhite from "../../assets/Nav/signature-white.svg";
import SignatureBlack from "../../assets/Nav/signature-black.svg";
import { HashLink } from "react-router-hash-link";
import LinkedinImg from "assets/hero/linkedin.png";
const WINDOW_HEIGHT = window.screen.height - 100;
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.scrollY > WINDOW_HEIGHT) {
      setActive(true);
    } else if (window.scrollY < WINDOW_HEIGHT) {
      setActive(false);
    }
  };

  const toggle = () => {
    setShow((prev) => !prev);
  };

  const showContact = () => {
    let element = document.getElementById("contact-form");
    if (element) {
      element.style.display = "flex";
    }
  };
  return (
    <NavBar active={active}>
      <Container>
        <HashLink
          style={{ textDecoration: "none", color: "inherit" }}
          activeClass="active"
          smooth
          spy
          to="/#home"
        >
          <Logo src={active ? SignatureBlack : SignatureWhite} alt="logo" />
        </HashLink>

        <HamButton onClick={toggle} active={active}>
          <AiOutlineAlignRight />
        </HamButton>
        <Menu show={show}>
          <CloseButton onClick={toggle}>
            <AiOutlineClose fontSize={22} fontWeight={800} />
          </CloseButton>
          <NavItem active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="/#about"
              smooth
              spy
            >
              About
            </HashLink>
          </NavItem>
          <NavItem active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              smooth
              spy
              to="/#book"
            >
              Book
            </HashLink>
          </NavItem>
          <NavItem onClick={showContact} active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="/#contact"
              smooth
              spy
            >
              Contact
            </HashLink>
          </NavItem>
          <NavItem onClick={showContact} active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="https://www.linkedin.com/in/eddyabboud/"
              smooth
              spy
            >
              <img src={LinkedinImg} alt="linkedin" />
            </HashLink>
          </NavItem>
        </Menu>
      </Container>
    </NavBar>
  );
};

export default Navbar;
