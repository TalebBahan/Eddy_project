import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin: 0px 20px;
  width: 300px;
  min-height: 200px;
  height:400px;
  background: #ffffff;
  box-shadow: 0px 0px 2px 1px rgba(112, 112, 112, 0.2);
  border-radius: 10px;
  padding-bottom: 5px;
  overflow:hidden;
  @media screen and (max-width: 750px) {
    width: 280px;
    margin: 10px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const TopLeftArea = styled.div`
  display: flex;
`;

export const Profile = styled.img`
  height: 40px;
`;

export const AuthorArea = styled.div`
  padding-left: 10px;
  height: max-content;
`;

export const Name = styled.p`
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  color: #191919;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.span`
  font-family: Gilroy;
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  color: #707070;
  margin-right: 5px;
`;

export const Earth = styled.img``;

export const TopRightArea = styled.div``;

export const MoreImg = styled.img`
  height: 10px;
`;

export const TextArea = styled.div`
  padding: 10px;
  padding-top: 0px;
`;

export const Text = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #191919;
  line-height: 17px;
  margin-bottom: 5px;
`;

export const HashTag = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #0966c2;
`;

export const PostImg = styled.img`
  height: auto;
  weight: 100%;
`;

export const IconArea = styled.div`
  margin: 0px 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e5df;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin: auto 1px;
  height: 18px;
`;

export const SmallText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #707070;
  margin-top: 4px;
  padding-left: 10px;
  align-items: center;
`;

export const ButtonArea = styled.div`
  margin-top: 15px;
  padding: 0px 10px;
`;

export const Button = styled.button`
  margin-right: 15px;
  background: none;
  border: none;
  outline: none;
`;

export const ButtonIcon = styled.img`
  height: 20px;
`;
