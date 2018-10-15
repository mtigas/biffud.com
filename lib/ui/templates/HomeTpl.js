import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { Helmet, Layout } from "ui/partials";
import { Logo } from "ui/components";

const Pitch = styled.div`
  min-height: 100vh;
`;
const PitchTitle = styled.h1``;
const PitchText = styled.p``;

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <Pitch>
            <Logo alt="BIF Bad Idea Factory" />
            <PitchTitle>Come back soon.</PitchTitle>
            <PitchText>We’re expertly implementing this website.</PitchText>
          </Pitch>
        </Layout>
      </Fragment>
    );
  }
}

HomeTpl.propTypes = {};
