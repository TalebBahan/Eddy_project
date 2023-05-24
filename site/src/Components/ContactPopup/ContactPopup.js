import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #fff;
  top: 0px;
  left: 0px;
  z-index: 9999;
  transition: 0.5 all ease-in-out;
  justify-content: center;
  align-items: center;
  display: none;
  background: rgb(255 255 255 / 80%);
  backdrop-filter: saturate(180%) blur(10px);
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: grid;
  place-content: center;
  padding: 5px;
  font-size: 3.5rem;
  background: none;
  border: none;
  color: #2e208e;
  cursor: pointer;
  z-index: 9999;
`;
export const Container = styled.div`
  background: #fff;
  width: 90%;
  margin: auto;
  padding: 20px 30px;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0px 0px 10px #eeeeee;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2.2rem;
  color: #2e208e;
  font-family: "Gilroy";
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #2e208e;
  font-family: "Gilroy";
  padding-bottom: 5px;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  border: none;
  border: 1px solid gray;
  padding:5px;
`;
export const TextArea = styled.textarea`
  border-radius: 10px;
  border: none;
  border: 1px solid gray;
  padding:5px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const Button = styled.button`
  margin: 30px auto;
  cursor:pointer;
  font-weight: bold;
  font-family: "Gilroy";
  background: ${(props) => (props.outline ? "none" : "#e6c34b")};
  border: ${(props) => (props.outline ? "2px solid #e6c34b" : "none")};
  padding: 12px 30px;
  color: ${(props) => (props.outline ? "#e6c34b" : "#000")};
  border-radius: 10px;
  :hover {
    opacity: 0.6;
  }
`;
