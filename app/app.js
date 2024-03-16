import React, { Fragment } from "react";
import ReactDOM from 'react-dom';

import Root from "./features/layout/root/root";

class App extends React.Component {

  render() {
    return (
      <Root></Root>
    )
  }
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const About = () => (
  <Fragment>
    <h1>About</h1>
  </Fragment>
  );

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
  </Fragment>
  );

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', Mfe4Element);