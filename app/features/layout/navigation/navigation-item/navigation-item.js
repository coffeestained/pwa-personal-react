import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { routes } from "../../../app-routing";

import './navigation-item.css';
export const NavigationItem = () => (
  <Fragment>
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                {
                  Object.keys(routes).map((route) => (
                    <li className="text-gray-900 dark:text-white hover:underline" aria-current="page">
                      <Link to={route}>{routes[route].name}</Link>
                    </li>
                  ))
                }
              </ul>
          </div>
      </div>
    </nav>
  </Fragment>
);