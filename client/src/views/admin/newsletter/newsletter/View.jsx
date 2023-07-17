
import HandlebarsTemplate from "components/HandlebarsTemplate";
import { useGetArticlesMediasBooksByIdsQuery } from "./newsletterApi";
import Loading from "components/Loading";
import Unauthorized from "components/Unauthorized";
import React from "react";
import Send from "./Send";
export default function View({ newsletter,handleBack }) {
  const { title, subject, body, articlesIds, booksIds, mediasIds } = newsletter;
  const { data, isLoading, isError } = useGetArticlesMediasBooksByIdsQuery({
    articlesIds,
    booksIds,
    mediasIds,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Unauthorized />;
  }
  console.log(data);
  const { articles, books, medias } = data;
  // seperate the articles with images and without images
  const articlesWithImages = articles.filter((article) => article.imageUrl !== null);
  const articlesWithoutImages = articles.filter((article) => article.imageUrl === null);
  const newsletterData = {
    title,
    subject,
    body,
    articlesWithImages,
    articlesWithoutImages,
    books,
    medias,
  };


  return (
    <div>
      <button
        onClick={() => handleBack()}
        className="text-sm font-bold text-blue:500 dark:text-white m-2"
      >
        BACK
      </button>
      <button
        onClick={handleOpen}
        className="text-sm font-bold text-green-500 dark:text-white m-2"
      >
        SEND
      </button>
      <Send open={open} handleOpen={handleOpen} newsletter={newsletterData} />
      <HandlebarsTemplate newsletter={newsletterData} />
    </div>
  );
}
