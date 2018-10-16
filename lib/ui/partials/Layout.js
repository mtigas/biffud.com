import { array, node, oneOfType, string } from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { Component, Fragment } from "react";
import randomcolor from "randomcolor";

import { defaultThm } from "ui/themes";
import { font } from "ui/settings";
import { reset } from "assets/styles";
import { setType } from "ui/mixins";

import { Footer, Main, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    ${setType("m")};
    background: ${randomcolor({ luminosity: "dark" })};
    color: white;
    font-family: ${font.sans};
    font-weight: 300;
  }
  img {
    line-height: 0;
  }
  a,
  abbr {
    text-decoration: none;
  }
  html, body,
  body > div,
  body > div > div {
    height: 100%;
  }
  body > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  *::selection { background: ${({ theme }) => theme.selectionColor}; }
  *::-moz-selection { background: ${({ theme }) => theme.selectionColor}; }
`;

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={defaultThm}>
        <Fragment>
          <Topbar />
          <Main>{children}</Main>
          <Footer />
          <GlobalStyle theme={defaultThm} />
        </Fragment>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: oneOfType([array, node, string]).isRequired
};

Layout.defaultProps = {};
