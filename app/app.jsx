import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";

import { Root } from "./features/layout/root/root";

import './app.css';
import './output.css';
class App extends React.Component {
  render() {
    return (
      <Router>        
        <GlobalProvider>
          <Root></Root>
        </GlobalProvider>
      </Router>
    )
  }
}

class ToolsElement extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(document.getElementsByTagName("react-element")[0]);
    root.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    );
  }
}

customElements.define('react-element', ToolsElement);