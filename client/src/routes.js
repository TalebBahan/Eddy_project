import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import Post from "views/admin/Post/Post";
import Content from "views/admin/content/Content";
// Auth Imports
import SignIn from "views/auth/SignIn";
import Links from "views/admin/Link/Links";
import Users from "views/admin/users/Users";
// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Posts",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Post />,
  },
  {
    name: "Links",
    layout: "/admin",
    path: "links",
    icon: <MdHome className="h-6 w-6" />,
    component: <Links />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <MdHome className="h-6 w-6" />,
    component: <Users />,
  },
  {
    name: "Content",
    layout: "/admin",
    path: "content",
    icon: <MdHome className="h-6 w-6" />,
    component: <Content />,
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "main",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },

];
export default routes;
