import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, time } from "ui/settings";
import { fadeIn } from "ui/animations";
import { setSpace, setType } from "ui/mixins";

const FooterEl = styled.footer`
  ${setSpace("pah")};
  ${setType("s")};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
  ${breakpoint.phone} {
    text-align: center;
  }
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
`;

const FooterFlex = styled.div`
  ${setSpace("mtm")};
  ${breakpoint.phone} {
    & > div:not(:last-child) {
      ${setSpace("mbm")};
    }
    & > div:last-child > * {
      ${setSpace("mhs")};
    }
  }
  ${breakpoint.tabletUp} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div {
      flex: 0 0 ${100 / 2}%;
    }
    & > div:last-child {
      text-align: right;
    }
    & > div:last-child > * {
      ${setSpace("mlm")};
    }
  }
`;

const Footer = props => (
  <FooterEl {...props}>
    <FooterContent>
      <Icon name="separator" aria-hidden="true" />
      <FooterFlex>
        <div>
          <Action email="no-reply@biffud.com" obfuscated />
        </div>
        <div>
          <Action href="https://twitter.com/biffud" target="_blank">
            <Icon name="twitter" aria-hidden="true" size="x" />
          </Action>
          <Action href="https://github.com/badideafactory" target="_blank">
            <Icon name="github" aria-hidden="true" size="x" />
          </Action>
        </div>
      </FooterFlex>
    </FooterContent>
  </FooterEl>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
