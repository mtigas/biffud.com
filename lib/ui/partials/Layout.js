/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { defaultThm } from "ui/themes";
import { fadeIn } from "ui/animations";
import { font, time } from "ui/settings";
import { reset } from "assets/styles";
import { setType, setSpace } from "ui/mixins";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    ${setSpace("pal")};
    ${setType("x")};
    font-family: ${font.sans};
  }
`;

const Main = styled.main`
  & > * {
    animation: ${fadeIn} ${time.m} linear;
  }
`;

const Layout = props => {
  const { children, location } = props;
  return (
    <ThemeProvider theme={defaultThm}>
      <>
        <Main>{children}</Main>
        <GlobalStyle theme={defaultThm} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

Layout.defaultProps = {};

export default Layout;
