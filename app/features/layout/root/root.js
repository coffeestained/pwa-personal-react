import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import { Navigation } from '../navigation/navigation';
import { routes } from "../../../app-routing";

import './root.css';
export const Root = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    // TODO Route animation
    console.log(location, displayLocation);
    return ( 
        <main className="tools__root">
            <Navigation></Navigation>
            <Routes>
                {
                    Object.keys(routes).map((route) => (
                        <Route path={route} element={routes[route].component()} />
                    ))
                }
            </Routes>
        </main>
    )
};