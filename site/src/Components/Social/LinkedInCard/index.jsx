import {
  AuthorArea,
  Button,
  ButtonArea,
  ButtonIcon,
  Earth,
  HashTag,
  MoreImg,
  Name,
  PostImg,
  Profile,
  Text,
  TextArea,
  TimeWrapper,
  TopLeftArea,
  TopRightArea,
  TopSection,
  Wrapper,
} from "./LinkedInCardElements";
import ProfileImg from "assets/social/linkedin/Profile.png";
import EarthImg from "assets/social/linkedin/Globe.png";
import More from "assets/social/linkedin/More.png";
import LikeGroup from "assets/social/linkedin/Like group.png";
import CommentGroup from "assets/social/linkedin/Comment group.png";
import { Link } from "react-router-dom";
const LinkedInCard = ({link,postImage,tags,title}) => {

  console.log(tags);
  return (
    <Link to={link} style={{
      textDecoration: 'none',
    }}
    target="_blank"
    >
    <Wrapper>
      <TopSection>
        <TopLeftArea>
          <Profile src={ProfileImg} />
          <AuthorArea>
            <Name>Eddy Abboud</Name>
            <TimeWrapper>
              {/* <Time>20h</Time> */}
              <Earth src={EarthImg} />
            </TimeWrapper>
          </AuthorArea>
        </TopLeftArea>
        {/* <TopRightArea>
          <MoreImg src={More} />
        </TopRightArea> */}
      </TopSection>
      <TextArea>
        <Text>
          {title?.length > 130 ? title?.substring(0, 130) + "..." : title}
        </Text>
        <HashTag>{tags?.length > 100 ? tags?.substring(0, 100) + "..." : tags}</HashTag>
      </TextArea>
      <PostImg style={{

      
      }} src={`${process.env.REACT_APP_API}/images/${postImage}`}/>
      
    </Wrapper>
    </Link>
  );
};

export default LinkedInCard;
