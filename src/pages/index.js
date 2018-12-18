import React, {Fragment} from 'react'
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: white;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const H1 = styled.h1`
  font-size: ${({isBig}) => isBig ? '5em' : '3em'};
  color: ${({isBlue}) => isBlue ? 'blue' : 'white'};
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  posision: relative;
`;

const IndexPage = () => (
  <Fragment>
    <GlobalStyle />
    <StyledWrapper>
      <H1 isBig>Hi people</H1>
      <H1 isBlue>Hi people</H1>
    </StyledWrapper>
  </Fragment>
)

export default IndexPage
