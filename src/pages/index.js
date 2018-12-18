import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: black;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const H1 = styled.h1`
  font-size: ${({isBig}) => isBig ? '5em' : '3em'};
  color: ${({isBlue}) => isBlue ? 'blue' : 'white'};
`;

const GreenH1 = styled(H1)`
  color: green;
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ colors.dark };
  posision: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  fonst-size: 2em;
  font-weight: 700;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  width: ${({width}) => width};
  height: 40px;
  background: ${colors.primary};
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  font-size: 1em;
  font-weight: 800;
  cursor: pointer;
  transition: box-shadow .3s ease;

  &.coral {
    background: coral;
  }

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`;

const IndexPage = () => (
  <Fragment>
    <GlobalStyle />
    <StyledWrapper>
      <Button width="500px" as={Link} to="/about">About age</Button>
    </StyledWrapper>
  </Fragment>
)

export default IndexPage
