import React, { Component, Fragment } from "react";

import { Action, Actionbar, Icon } from "ui/components";
import { Fold, Helmet, Layout } from "ui/partials";

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dict } = this.props;
    return (
      <Fragment>
        <Helmet {...this.props} />
        <Layout {...this.props}>
          <Fold>
            <Icon name="separator" aria-hidden="true" />
            <h1>Come back soon.</h1>
            <p>We’re expertly implementing this website.</p>
            <Actionbar>
              <Action
                button
                email="hello@moglistudio.com"
                obfuscated
                text="Napisz do nich"
              />
            </Actionbar>
          </Fold>
        </Layout>
      </Fragment>
    );
  }
}

HomeTpl.propTypes = {};
