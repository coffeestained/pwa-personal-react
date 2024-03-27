import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation } from '../navigation/navigation';
import { routes } from "../../../app-routing";

import './root.css';
export const Root = () => {

    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
      }, [location, displayLocation]);

    return ( 
        <main className="tools__root">
            <Navigation></Navigation>
            <div className={`${transitionStage} tools_root-viewport`}
                 onAnimationEnd={() => {
                    if (transitionStage === "fadeOut") {
                        setTransistionStage("fadeIn");
                        setDisplayLocation(location);
                    }
                 }}>
                <Routes location={displayLocation}>
                    {
                        Object.keys(routes).map((route) => (
                            <Route path={route} key={route} element={routes[route].component()} />
                        ))
                    }
                </Routes>
            </div>

  
        </main>
    )
};