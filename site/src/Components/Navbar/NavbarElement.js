import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  z-index: 9999;
  padding-left: 50px;
  padding-right: 50px;
  //transition: 0.5s all ease-in-out;
  background: ${(props) => (props.active ? "rgb(255 255 255 / 24%)" : "none")};
  @media screen and (max-width: 760px) {
    padding-left: 15px;
    padding-right: 15px;
    height: 60px;
    padding-top: 5px;
    background: ${(props) => (props.active ? "#fff" : "none")};
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 70px;
  @media screen and (max-width: 760px) {
    height: 45px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: max-content;
  font-family: "Gilroy";
  @media screen and (max-width: 760px) {
    position: fixed;
    height: 100vh;
    background: rgb(255 255 255 / 50%);
    backdrop-filter: saturate(180%) blur(10px);
    top: 0px;
    left: ${(props) => (props.show ? "0px" : "100vw")};
    transition: 0.7s all ease-in-out;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  width: 120px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.3rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#000" : "#fff")};
  @media screen and (max-width: 760px) {
    color: #000;
    width: 100%;
    font-size: 22px;
    margin-top: 30px;
    font-family: inherit;
  }
  @media screen and (max-width: 1100px) {
    font-size: 2rem;
  }
`;

export const CloseButton = styled.button`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px;
    background: none;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px grey;
  }
`;

export const HamButton = styled.button`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    font-size: 30px;
    color: ${(props) => (props.active ? "#000" : "#fff")};
    background: none;
    outline: none;
    border: none;
  }
`;
