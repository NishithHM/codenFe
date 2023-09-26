import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import FallBack from "./pages/fallBackRoute";
import CustomerReview from "./pages/Loading/Review";
// https://codentechnologies.com/easy-rev/landing/050d2589-89b5-42f5-9245-f0f1f0800113
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/easy-rev/landing/:id" element={<CustomerReview/>}/>
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;