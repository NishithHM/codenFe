import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import FallBack from "./pages/fallBackRoute";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;