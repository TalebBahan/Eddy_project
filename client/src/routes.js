import React from "react";


import Content from "views/admin/content/Content";
import Users from "views/admin/users/Users";
import Subscriber from "views/admin/newsletter/subscriber/Subscriber";
import NewsLetter from "views/admin/newsletter/newsletter/NewsLetter";
import Youtube from "views/admin/youtube/Youtube";
import LinkedIn from "views/admin/linkdin/LinkedIn";
import { FiUsers } from "react-icons/fi";
import { BiBookContent, BiNews } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";



const routes = [
  {
    name: "Content",
    layout: "/admin",
    path: "content",
    icon: <BiBookContent className="h-6 w-6" />,
    component: <Content />,
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
    name: "Youtube",
    layout: "/admin",
    path: "linkdin",
    icon: <AiOutlineYoutube className="h-6 w-6" />,
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
