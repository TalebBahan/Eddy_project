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

const LinkedInCard = ({ title, description, publishedAt, videoId }) => {
  return (
    <Wrapper>

      <iframe
        style={{
          minHeight: '200px',
      height:'400px',

        }}
      title='Youtube player'
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
      src={`https://youtube.com/embed/${videoId}?autoplay=0`}
      />


    </Wrapper>
  );
};

export default LinkedInCard;
