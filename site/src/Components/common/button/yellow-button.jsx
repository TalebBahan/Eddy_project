import styled from "styled-components";

const Button = styled.button`
  background: #e6c34b;
  border-radius: 6px;
  padding: 1.1rem 2.5rem;
  font-size: 1.6rem;
  border: 1px solid #e6c34b;
  font-family: "Gilroy-Medium";
  align-items: center;
  text-transform: capitalize;
  color: #9426ba;
  cursor: pointer !important;
  @media screen and (min-width: 1100px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
`;

const YellowButton = ({ text, onClick }) => <Button>{text}</Button>;
export default YellowButton;
