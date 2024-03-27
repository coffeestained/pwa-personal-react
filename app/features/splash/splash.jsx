import React, { Fragment } from "react";

import "./splash.css";
export const Splash = () => (
    <Fragment>
        <div className="splash__container">
            <p className="splash__designer-square text-4xl font-bold root__theme-overlay-text-gradient mb-3">
                Welcome to <span className="font-bold">Tillie Studio's</span> development tools module.
            </p>
            <p>Built with 💚 in React.</p>
        </div>
    </Fragment>
);
