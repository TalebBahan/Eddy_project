import Navbar from "../Components/Navbar/index";
import Hero from "../Components/Banner/index";
import About from "../Components/Vision/About";
import Achievements from "../Components/Achievements";
import Lectures from "../Components/Lecture/Lectures";
import SocialMedia from "../Components/Social/SocialMedia";
import News from "../Components/News";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Fotter/Fotter";
import ContactPopup from "../Components/ContactPopup";
import Articles from "Components/articles/Articles";
import React from "react";
import SearchPopup from "Components/SearchPoppup";
import Books from "Components/books/Books";
import Ripple from "Components/Spinner";
import {
  useGetYouTubeQuery,
  useGetContentQuery,
  useGetAboutImagesQuery,
  useGetLinkedinQuery,
  useGetArticlesQuery,
  useGetBooksQuery,
  useGetInterestsQuery,
  useGetMediaQuery,
  useGetHeroQuery,


} from 'apiSlice'

const Home = () => {

  const {data:hero , isLoading:isHeroLoadding} = useGetHeroQuery()
  const {data:media , isLoading:isMediaLoadding} = useGetMediaQuery()
  const {data:interests , isLoading:isInterestsLoadding} = useGetInterestsQuery()
  const {data:books , isLoading:isBooksLoadding} = useGetBooksQuery()
  const {data:articles , isLoading:isArticlesLoadding} = useGetArticlesQuery()
  const {data:linkedin , isLoading:isLinkedinLoadding} = useGetLinkedinQuery()
  const {data:content , isLoading:isContentLoadding} = useGetContentQuery()
  const {data:youtube , isLoading:isYoutubeLoadding} = useGetYouTubeQuery()
  const {data:aboutImages , isLoading:isAboutImagesLoadding} = useGetAboutImagesQuery()



  return (
    <>
          <Navbar />
          <section id="home">
           {
              !isHeroLoadding ? <Hero data={hero} />: <div style={{
                height:"100vh",
                width:"100vw",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}>
                <Ripple />
              </div>
           }
          </section>
          <section id="about">
            {
              (!isAboutImagesLoadding && !isContentLoadding)  && <About images={aboutImages} data={content} />
            }
          </section>
          <section id="achievements">
            {
              !isHeroLoadding && <Achievements />
            }
          </section>
          <section id="lectures">
            {
              
             !isHeroLoadding && <Lectures />
            }
          </section>
          <section id="social">
          {
              !isLinkedinLoadding && !isYoutubeLoadding && <SocialMedia youtube={youtube} linkedin={linkedin}  />
          }
          </section>
          <section id="news">
          {
            !isMediaLoadding && <News data={media} />
          }
          </section>
          <section id="books">
            {
              !isBooksLoadding && <Books books={books} />
            }
          </section>
          <section id="articles">
            {
              !isArticlesLoadding && <Articles articles={articles} />
            }
          </section>
          <section id="newsletter">
          {!isInterestsLoadding &&
            <NewsLetter interestsData={interests} />}
          </section>
            <Footer />
            <ContactPopup />
            {
              !isMediaLoadding && !isBooksLoadding && !isArticlesLoadding && !isYoutubeLoadding && !isLinkedinLoadding && !isInterestsLoadding && !isContentLoadding && !isAboutImagesLoadding && !isHeroLoadding &&
              <SearchPopup media={media} books={books} articles={articles} youtube={youtube} linkedin={linkedin} />}
         
      </>
  );
};

export default Home;
