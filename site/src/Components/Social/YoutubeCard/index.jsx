import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardWrapper = styled.div`
  width: 320px;
  min-height: 200px;
  @media screen and (max-width: 750px) {
    width: 280px;
    margin: 10px;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)!important;
  transition: 0.3s!important;
  border-radius: 5px !important;
  overflow: hidden !important;
  margin: 20px 0px !important;
`;

const CardImage = styled.div`
  position: relative  !important;
`;

const ResponsiveContainer = styled.div`
  position: relative !important;
  padding-bottom: 56.25%    !important;
  height: 0 !important;
`;

const CardIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5) !important;
  color: #fff !important  ;
  width: 100%   !important  ;
  padding: 10px  !important  ;
`;

const CardContent = styled.div`
  padding: 20px;
  font-family: Gilroy;
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  color: #707070;
  background: #ffffff;
  height: 200px;
`;

const CardHeading = styled.span`
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  color: #191919;
`;

const YoutubeCard = ({ title, description, publishedAt, videoId }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardImage>
          <ResponsiveContainer>
            <CardIframe
              width="560"
              height="315"
              src={`https://youtube.com/embed/${videoId}?autoplay=0`}
              frameBorder="0"
              allowFullScreen
            ></CardIframe>
          
          </ResponsiveContainer>
        </CardImage>
        <CardContent>
          <CardHeading>{
            title.length > 50 ? title.slice(0, 50) + '...' : title
          }</CardHeading>
          <p>{
            description.length > 500 > description ? description.slice(0, 500) + '...' : description
            }</p>
        </CardContent>
      </CardWrapper>
    </CardContainer>
  );
};

export default YoutubeCard;
