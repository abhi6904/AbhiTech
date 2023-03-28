import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';

export default function Error() {
  const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  `;



  return (
    <Wrapper>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzm58IMeDAox0QaO9N1jfzWkbChkccDyLk5lpPFEXVw&s" alt="" />
      <NavLink to="/">
      <Button className='btn'>Go Back</Button>
      </NavLink>
    </Wrapper>
  )
}
