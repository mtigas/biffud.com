import React from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, font, time, track } from "ui/settings";
import { Icon } from "ui/components";

const TopbarEl = styled.header`
  ${setSpace("pah")};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const TopbarContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  h1 {
    ${setType("x")};
    color: white;
    font-family: ${font.sans};
    font-weight: 400;
    letter-spacing: ${track.s};
    text-transform: uppercase;
  }
  span {
    ${setType("x")};
    font-weight: 300;
  }
  ${breakpoint.phone} {
    text-align: center;
    span {
      ${setSpace("mts")};
    }
  }
  ${breakpoint.tabletUp} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Topbar = props => (
  <TopbarEl {...props}>
    <TopbarContent>
      <h1>
        <Icon name="SymbolWLogotype" style={{ fontSize: "50px" }} />
      </h1>
    </TopbarContent>
  </TopbarEl>
);

Topbar.propTypes = {};

Topbar.defaultProps = {};

export default Topbar;
