import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';

export default function Header() {
  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme})=>theme.colors.bg};
  display:flex;
  justify-content: space-between;
  align-items: center;
   
  .logo{
    height: auto;
    max-width: 50%
  }
  `;
  return (
    <MainHeader>
        <NavLink to="/">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizjE4b5aYrcaK8s76D2_u3RPhJF_QhMRGnP4-Je4&s' alt='logo' className='logo' />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
}
