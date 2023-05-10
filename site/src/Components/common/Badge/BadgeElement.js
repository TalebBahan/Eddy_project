import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  max-width: 900px;
  height: 5rem;
  background: #ede6ff;
  border-radius: 10px 10px 10px 10px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1100px) {
    height: 6rem;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 6rem;
  }
`;

export const BadgeImg = styled.img`
  height: 100%;
  margin-top: 5px;
`;

export const Line = styled.div`
  width: 2.5rem;
  height: 0px;
  border: 1px solid #1b3e92;
  transform: rotate(90deg);
`;

export const Text = styled.p`
  font-family: "Gilroy";
  font-size: 1.2rem;
  color: #2e208b;
`;
