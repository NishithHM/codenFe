import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Landing from "./pages/Landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import FallBack from "./pages/fallBackRoute";
import CustomerReview from "./pages/Loading/Review";
import Orders from "./pages/orders";
import CustomerReviewTest from "./pages/Loading/ReviewTest";
import Privacy from "./pages/privacy";
import TermsAndConditions from "./pages/termsAndConditions";
import RefundAndCancellation from "./pages/refund";
import TestOrders from "./pages/testOrder";
import SalesPolicy from "./pages/sales";
import PaymentStatus from "./pages/PaymentStatus";
// https://codentechnologies.com/easy-rev/landing/050d2589-89b5-42f5-9245-f0f1f0800113
const App = () => {
    return (
        <>
            <BrowserRouter>
            <ScrollPage>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/sales-policy" element={<SalesPolicy/>}/>
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/refund-and-cancellation" element={<RefundAndCancellation />} />
                    <Route path="/easy-rev/landing/:id" element={<CustomerReview/>}/>
                    <Route path="/easy-rev/landing" element={<CustomerReviewTest/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/orders-test" element={<TestOrders/>}/>
                    <Route path="/payment-status/:id" element={<PaymentStatus />}/>
                    <Route path="*" element={<FallBack />} />
                </Routes>
                </ScrollPage>
            </BrowserRouter>
        </>
    )
}

export default App;

const ScrollPage=({children})=>{
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    return children
}