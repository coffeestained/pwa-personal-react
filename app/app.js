import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Root } from "./features/layout/root/root";

import './app.css';
import './output.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Root></Root>
      </Router>
    )
  }
}

class ToolsElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', ToolsElement);