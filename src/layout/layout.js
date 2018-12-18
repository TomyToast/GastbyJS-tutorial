import React, { Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

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

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.dark};
  posision: relative;
`;

const Layout = ({children}) => (
   <ThemeProvider theme={theme}>
    <Fragment>
        <GlobalStyle/>
        <StyledWrapper>
            {children}
        </StyledWrapper>
    </Fragment>
   </ThemeProvider>
);

export default Layout;