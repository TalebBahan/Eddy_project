import React from "react";


import Content from "views/admin/content/Content";
import Users from "views/admin/users/Users";
import Subscriber from "views/admin/newsletter/subscriber/Subscriber";
import NewsLetter from "views/admin/newsletter/newsletter/NewsLetter";
import Youtube from "views/admin/youtube/Youtube";
import Articles from "views/admin/articles/Articles";
import LinkedIn from "views/admin/linkdin/LinkedIn";
import Books from "views/admin/books/Books";
import { FiUsers } from "react-icons/fi";
import { BiBookContent, BiNews } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { AiOutlineYoutube,AiOutlineLinkedin } from "react-icons/ai";
import {SiBookstack} from "react-icons/si";
import {MdOutlineArticle} from "react-icons/md";
const routes = [
  {
    name: "Content",
    layout: "/admin",
    path: "content",
    icon: <BiBookContent className="h-6 w-6" />,
    component: <Content />,
  },
  {
    name: "Articles",
    layout: "/admin",
    path: "articles",
    icon: <MdOutlineArticle className="h-6 w-6" />,
    component: <Articles />,
  },
  {
    name: "Books",
    layout: "/admin",
    path: "books",
    icon: <SiBookstack className="h-6 w-6" />,
    component: <Books />,
  },
  {
    name: "News Letters",
    layout: "/admin",
    path: "newsletter",
    icon: <BiNews className="h-6 w-6" />,
    component: <NewsLetter />,
  },
  {
    name: "Subscribers",
    layout: "/admin",
    path: "subscriber",
    icon: <BsPersonCheck className="h-6 w-6" />,
    component: <Subscriber />,
  },
  {
    name: "Youtube",
    layout: "/admin",
    path: "youtube",
    icon: <AiOutlineYoutube className="h-6 w-6" />,
    component: <Youtube />,
  },
  {
    name: "Linkedin",
    layout: "/admin",
    path: "linkedin",
    icon: <AiOutlineLinkedin className="h-6 w-6" />,
    component: <LinkedIn />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <FiUsers className="h-6 w-6" />,
    component: <Users />,
  },


];
export default routes;
