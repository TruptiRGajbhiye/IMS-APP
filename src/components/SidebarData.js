import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FcHome , FcServices} from "react-icons/fc";
  
export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FcHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  // {
  //   title: "About Us",
  //   path: "/about-us",
  //   icon: <FcAbout />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  // },

  {
    title: "View Product",
    path: "/view-product",
    icon: <FcAbout />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },


  {
    title: "View Users",
    path: "/view-user",
    icon: < FcServices/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },

  {
    title: "Add user",
    path: "/add-user",
    icon: <FcAbout />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },

  {
    title: "Add Product",
    path: "/add-product",
    icon: < FcServices/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },



  // {
  //   title: "Update Product",
  //   path: "/update-product",
  //   icon: <FcAbout />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  // },

  // {
  //   title: "Services",
  //   path: "/services",
    // icon: < FcServices/>,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  
    
  // },
  // {
  //   title: "Contact Us",
  //   path: "/contact-us",
  //   icon: <FaIcons.FaPhone />,
  // },

  {
    title: "Login",
    path: "/login",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  // {
  //   title: "Register",
  //   path: "/register",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  // },

  // {
  //   title: "Events",
  //   path: "/events",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  // },
];

// import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
// import MailIcon from '@mui/icons-material/Mail';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import AddCardIcon from '@mui/icons-material/AddCard';

// export const SidebarData =[
//     {
//         title:"Home",
//         icon:<HomeIcon/>,
//         link:'/Home'
//     },
//     {
//         title:"Mailbox",
//         icon:<MailIcon/>,
//         link:"/mailbox"
//     },
//     {
//         title:"Assessment",
//         icon:<AssessmentIcon/>,
//         link:"/assessment"
//     },
//     {
//         title:"Dashboard",
//         icon:<DashboardIcon/>,
//         link:"/dashboard"
//     },
//     {
//         title:"Add",
//         icon:<AddCardIcon/>,
//         link:"/add"
//     },
//     {
//         title:"Exit",
//         icon:<ExitToAppIcon/>,
//         link:"/exit"
//     },
// ]

