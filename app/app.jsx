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
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

customElements.define('tools-element', ToolsElement);