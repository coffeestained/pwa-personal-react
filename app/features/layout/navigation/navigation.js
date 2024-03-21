import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { routes } from "../../../app-routing";

import './navigation.css';
export const Navigation = () => (
  <Fragment>
    <nav className="tools__navigation">
      <div className="px-4 py-3 mx-auto">
          <div className="flex items-center">
              <ul className="flex flex-row mt-0 space-x-8 rtl:space-x-reverse text-md">
                <li className="disabled navigation__terminal">
                  <span className="terminal__one">
                      ~  /  tools
                  </span>
                  <span className="terminal__two">
                      $
                  </span>
                  <span className="terminal__blinking">|</span>
                </li>
                {
                  Object.keys(routes).map((route) => (
                    <li aria-current="page">
                      <Link className="no-underline" to={route}>{routes[route].name}</Link>
                    </li>
                  ))
                }
              </ul>
          </div>
      </div>
    </nav>
  </Fragment>
);