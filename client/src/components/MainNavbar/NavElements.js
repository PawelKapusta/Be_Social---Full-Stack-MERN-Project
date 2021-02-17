import {NavLink as Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
background: #ffe259;
background: -webkit-linear-gradient(to right, #ffa751, #ffe259);
background: linear-gradient(to right, #ffa751, #ffe259);
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1250px) / 2);
  z-index: 10;
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.7rem;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  margin-left: 2%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
