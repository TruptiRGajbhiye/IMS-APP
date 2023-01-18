import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { AiOutlinePlusCircle } from "react-icons/ai";
  
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h2
            style={{ textAlign: "center", 
                     marginLeft: "50px", 
                     color: "white" }}
          >
            Inventary Management System
          </h2>
          <a style={{color:'white', marginLeft:'600px', fontWeight:'bold'}} href="/login">Sign In</a>
          <a style={{color:'white', marginLeft:'20px',fontWeight:'bold'}} href="/add-user">Sign Up</a>
        {/* <h3 style={{color:'white', marginLeft:'400px'}}>Sign In</h3>
        <h4 style={{color:'white', margin:'50px'}}>Sign Up</h4> */}
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

// function Sidebar() {
//   return (
//     <div>

//     </div>
//     <div className='Sidebar'>
//         <ul className='SidebarList'>
//         {SidebarData.map((val, key )=>{
//         return (
//             <li key={key}
//             className="row"
//             id={window.location.pathname== val.link ? "active" : " "}
//              onClick={()=>{
//                 window.location.pathname=val.link;
//                 useHref='/Home';
//                 }}
//             >   
//             <div id='icon'>{val.icon}</div> <div id='title'> {val.title}</div>
//         </li>
//         );     
//     })}
//     </ul>
//     </div>
//   );
// };

export default Sidebar;