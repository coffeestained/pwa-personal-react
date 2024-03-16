import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from '../navigation/navigation';

import './root.css';
export default Root = () => (
    <Router>
        <main class="tools__root">
            <Navigation></Navigation>
            <Routes>
                <Route path="/tools" element={<Home />} />
                <Route path="/tools/about" element={<About />} />
                <Route path="/tools/contact" element={<Contact />} />
            </Routes>
        </main>
    </Router>
);