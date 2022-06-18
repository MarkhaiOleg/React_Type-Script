import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const appRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default appRouter;