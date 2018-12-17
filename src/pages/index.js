import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  posision: relative;

  @media (min-width: 400px) {
    background: blue;
  }

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    border: 5px solid grey;
    border-radius: 50px;
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    background: yellow;
  }
`;

const IndexPage = () => (
  <StyledWrapper>
    <h1>Hi people</h1>
  </StyledWrapper>
)

export default IndexPage
