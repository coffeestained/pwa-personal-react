import React, { Fragment } from "react";

import "./splash.css";
export const Splash = () => (
    <Fragment>
        <div className="splash__container">
            <p className="text-xl font-bold  root__theme-overlay-text-gradient mb-1">
                Welcome to <span className="font-bold">Tillie Studio's</span>.
            </p>
            <p className="text-xl font-bold  root__theme-overlay-text-gradient mb-2">
                FREE development tools section.
            </p>
            <p className="text-lg mb-3">Here you can find a collection of tools to help you with your development process.</p>
            <p className="text-lg mb-3 font-bold">Current Tools:</p>
            <ul className="text-2xl list-disc list-inside">
                <li>Code Formatter</li>
                <li>Color Conversion</li>
                <li>JSON / XML Formatter</li>
                <li>Regular Expression Tester</li>
            </ul>
        </div>
    </Fragment>
);
