import {
  AuthorArea,
  Button,
  ButtonArea,
  ButtonIcon,
  Earth,
  HashTag,
  Icon,
  IconArea,
  MoreImg,
  Name,
  PostImg,
  Profile,
  SmallText,
  Text,
  TextArea,
  Time,
  TimeWrapper,
  TopLeftArea,
  TopRightArea,
  TopSection,
  Wrapper,
} from "./LinkedInCardElements";
import ProfileImg from "assets/social/linkedin/Profile.png";
import EarthImg from "assets/social/linkedin/Globe.png";
import More from "assets/social/linkedin/More.png";
import PostImage from "assets/social/linkedin/PostImage.png";
import LikeImg from "assets/social/linkedin/Like.png";
import Celebrate from "assets/social/linkedin/Celebrate.png";
import Support from "assets/social/linkedin/Support.png";
import Love from "assets/social/linkedin/Love.png";
import Insightfull from "assets/social/linkedin/Insightfull.png";
import Curious from "assets/social/linkedin/Curious.png";
import LikeGroup from "assets/social/linkedin/Like group.png";
import CommentGroup from "assets/social/linkedin/Comment group.png";
import ShareGroup from "assets/social/linkedin/Share group.png";
import SendGroup from "assets/social/linkedin/Send group.png";

const LinkedInCard = () => {
  return (
    <Wrapper>
      <TopSection>
        <TopLeftArea>
          <Profile src={ProfileImg} />
          <AuthorArea>
            <Name>Eddy Abbound</Name>
            <TimeWrapper>
              <Time>20h</Time>
              <Earth src={EarthImg} />
            </TimeWrapper>
          </AuthorArea>
        </TopLeftArea>
        <TopRightArea>
          <MoreImg src={More} />
        </TopRightArea>
      </TopSection>
      <TextArea>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <HashTag>#hastag #hastag #hashtag</HashTag>
      </TextArea>
      <PostImg width="100%" src={PostImage} />
      <IconArea>
        <Icon src={LikeImg} />
        <Icon src={Celebrate} />
        <Icon src={Support} />
        <Icon src={Love} />
        <Icon src={Insightfull} />
        <Icon src={Curious} />
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SmallText>8</SmallText>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SmallText>4 comments</SmallText>
        </div>
      </IconArea>
      <ButtonArea>
        <Button>
          <ButtonIcon src={LikeGroup} />
        </Button>
        <Button>
          <ButtonIcon src={CommentGroup} />
        </Button>
        <Button>
          <ButtonIcon src={ShareGroup} />
        </Button>
        <Button>
          <ButtonIcon src={SendGroup} />
        </Button>
      </ButtonArea>
    </Wrapper>
  );
};

export default LinkedInCard;
