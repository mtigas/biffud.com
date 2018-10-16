import styled from "styled-components";

import { Actionbar } from "ui/components";
import { breakpoint, font } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Fold = styled.div`
  h1 {
    ${setSpace("mbl")};
    ${setSpace("mtm")};
    ${setType("h")};
    color: white;
    font-family: ${font.sans};
    font-weight: 700;
  }
  p {
    ${setType("l")};
  }
  p:not(:last-child) {
    ${setSpace("mbm")};
  }
  ${Actionbar} {
    ${setSpace("mtl")};
    ${setType("x")};
  }
  ${breakpoint.tablet} {
    width: ${(100 / 3) * 2}%;
  }
  ${breakpoint.desktopUp} {
    width: ${(100 / 2) * 1}%;
  }
`;

export default Fold;
