import { Link } from "react-router-dom";

import './navigation.css';
export default Navigation = () => (
  <Fragment>
    <nav class="tools__navigation">
      <ul>
        <li>
          <Link to="/tools">Home</Link>
        </li>
        <li>
          <Link to="/tools/about">About</Link>
        </li>
        <li>
          <Link to="/tools/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </Fragment>
);