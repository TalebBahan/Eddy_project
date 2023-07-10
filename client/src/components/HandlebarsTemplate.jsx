import React, { useEffect, useRef } from "react";
import * as handlebars from 'handlebars/dist/handlebars'

const HandlebarsTemplate = ({newsletter}) => {
  const templateRef = useRef(null);
  useEffect(() => {
    const loadTemplate = async () => {
      const response = await fetch("email.handlebars"); // Replace with the actual path to your template file
      const templateText = await response.text();
      const template = handlebars.compile(templateText);
      const context = {
        'title': newsletter.title,
        'body': newsletter.body,
        'book': newsletter.books,
        'media': newsletter.medias,
        'articleImage': newsletter.articlesWithImages,
        'articleNoImage': newsletter.articlesWithoutImages,
      }

      if (templateRef.current) {
        templateRef.current.innerHTML = template(context);
      }
    };

    loadTemplate();
  }, []);

  return <div ref={templateRef}></div>;
};

export default HandlebarsTemplate;
