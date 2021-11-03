import React from 'react'
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import * as BiIcons from 'react-icons/bi'
import * as SiIcons from 'react-icons/si'

import { Link } from 'react-router-dom'

// import Profile from '../../../public/img/profile_1.png'


function MainSideBar() {
    return (
        <Sidebar>


      <MenuList>
            {/* <Profileimg>
                <img src='img/profile_1.png' alt='img'/>
                </Profileimg> */}
    
        <Link to = "/heal" className= "link-router">
        <MenuItem>
          <LinkTo>
            <IconContainer>
            <AiIcons.AiFillHome />
            </IconContainer>
            <Label>Home</Label>
          </LinkTo>
        </MenuItem>
        </Link>
        
        <Link to = "/heal/imglist" className= "link-router">
        <MenuItem>
          <LinkTo >
            <IconContainer>
            <BiIcons.BiGame/>
            </IconContainer>
            <Label>이미지 목록!</Label>
          </LinkTo>
        </MenuItem>
          
        </Link>
        
        <Link to = "/heal/moveimglist" className= "link-router">
        <MenuItem>
          <LinkTo>
            <IconContainer>
             <AiIcons.AiOutlineShopping/>
            </IconContainer>
            <Label>움직이는 이미지!</Label>
          </LinkTo>
        </MenuItem>
         </Link>
        
         <Link to = "/heal/touch" className= "link-router">
         <MenuItem>
          <LinkTo>
            <IconContainer>
            <SiIcons.SiCountingworkspro/>
            </IconContainer>
            <Label>Touch</Label>
          </LinkTo>
        </MenuItem>
           </Link>
        
      </MenuList>
    </Sidebar>
  );
};


const Profileimg = styled.div`
margin-left: 22px;
`


const Sidebar = styled.div`
  position: absolute;
  width: 240px;
  height: 100%;
  background: #0b0541;
  transition: 0.5s;
  top:66px;
  position: fixed;
  opacity: .9;
  /* overflow: hidden;
  text-decoration: none;
  &:hover {
    width: 240px;
  } */
`;

const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  text-decoration: none;
  .link-router{
    text-decoration: none;
  }
`;

const IconContainer = styled.span`
  position: relative;
  display: flex;
  line-height: 60px;
  text-align: center;
  height: 60px;
  min-width: 60px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;


const LinkTo = styled.a`
  text-decoration: none;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

`;

const MenuItem = styled.li`
  list-style: none;
  position: relative;
  width: 100%;

  &:hover {
    background: #bf6b04;
  }
`;

const Label = styled.span`
  position: relative;
  display: block;
  padding: 0 10px;
  line-height: 60px;
  text-align: start;
  width: 60px;
  white-space: nowrap;
  color: white;

`;

export default MainSideBar

