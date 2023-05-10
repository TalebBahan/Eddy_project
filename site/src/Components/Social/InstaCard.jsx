import {
  Card,
  CardHeader,
  CommentSection,
  CommentText,
  HeaderTextWrapper,
  IconArea,
  IconImg,
  PostImage,
  PostImageArea,
  Profile,
  ShopSection,
  ShopText,
  SponsoredText,
  Username,
} from "./InstaCardElement";
import profileImg from "../../assets/social/insta-profile.png";
import likeImg from "../../assets/social/Like.svg";
import commentImg from "../../assets/social/comment.svg";
import shareImg from "../../assets/social/share.svg";
import saveImg from "../../assets/social/save.svg";

const InstaCard = ({ img }) => (
  <Card>
    <CardHeader>
      <Profile src={profileImg} />
      <HeaderTextWrapper>
        <Username>Eddy Abbound</Username>
        <SponsoredText>Sponsored</SponsoredText>
      </HeaderTextWrapper>
    </CardHeader>
    <PostImageArea>
      <PostImage src={img} />
    </PostImageArea>
    <ShopSection>
      <ShopText>Shop</ShopText>
    </ShopSection>
    <IconArea>
      <IconImg style={{ marginLeft: 15 }} src={likeImg} />
      <IconImg style={{ marginLeft: 15 }} src={commentImg} />
      <IconImg style={{ marginLeft: 15 }} src={shareImg} />
      <IconImg
        style={{ display: "flex", marginLeft: "auto", marginRight: 15 }}
        src={saveImg}
      />
    </IconArea>
    <CommentSection>
      <CommentText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </CommentText>
    </CommentSection>
  </Card>
);

export default InstaCard;
