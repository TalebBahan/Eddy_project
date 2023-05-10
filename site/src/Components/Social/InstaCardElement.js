import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  min-height: 500px;
  background: #fff;
  border-radius: 10px;
  padding-bottom: 20px;
  overflow: hidden;
  z-index: 99999;
  margin: 10px 30px;
  @media screen and (max-width: 760px) {
    margin: 0px 20px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 8px 10px;
  display: flex;
`;

export const Profile = styled.img`
  width: 36px;
  height: 36px;
`;

export const HeaderTextWrapper = styled.div`
  margin-left: 10px;
  color: #000;
`;

export const Username = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  font-family: "Gilroy";
`;

export const SponsoredText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  font-family: "Sitara";
`;

export const PostImageArea = styled.div`
  height: 300px;
  background: beige;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const PostImage = styled.img`
  height: 100%;
`;

export const ShopSection = styled.div`
  width: 100%;
  padding: 1px 10px;
  border-bottom: 1px solid #dbdbdb; ;
`;

export const ShopText = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #1ea1f7;
  font-family: "Gilroy";
`;

export const Arrow = styled.span``;

export const IconArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
`;

export const IconImg = styled.img``;

export const CommentSection = styled.div`
  padding-top: 5px;
  width: 95%;
  margin: auto;
`;

export const CommentText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #000000;
  font-family: "Roboto";
`;
