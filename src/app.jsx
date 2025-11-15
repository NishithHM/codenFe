import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Lazy loaded components for code splitting
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const FallBack = lazy(() => import("./pages/fallBackRoute"));
const CustomerReview = lazy(() => import("./pages/Loading/Review"));
const Orders = lazy(() => import("./pages/orders"));
const CustomerReviewTest = lazy(() => import("./pages/Loading/ReviewTest"));
const Privacy = lazy(() => import("./pages/privacy"));
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions"));
const RefundAndCancellation = lazy(() => import("./pages/refund"));
const TestOrders = lazy(() => import("./pages/testOrder"));
const SalesPolicy = lazy(() => import("./pages/sales"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PaymentStatus = lazy(() => import("./pages/PaymentStatus"));
const EasyRevPaymentInitiate = lazy(() => import("./pages/EasyRevPaymentInitiate"));
const MaxBeautyPaymentInitiate = lazy(() => import("./pages/MaxbeautyPaymentInititate"));

const App = () => {
  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem("activeTab") || "home"
  );
  console.log(activeTab);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (activeTab === "services") {
      scrollToSection("Services");
    }
  }, [activeTab]);

  
    return (
        <>
            <BrowserRouter>
            <ScrollPage>
                <Routes>
                    <Route path='/' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Landing activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection} />
                        </Suspense>
                    } />
                    <Route path='/about' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <About activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection} />
                        </Suspense>
                    } />
                    <Route path='/contact' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection}/>
                        </Suspense>
                    } />
                    <Route path="/privacy-policy" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Privacy />
                        </Suspense>
                    } />
                    <Route path="/sales-policy" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <SalesPolicy/>
                        </Suspense>
                    }/>
                    <Route path="/terms" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <TermsAndConditions />
                        </Suspense>
                    } />
                    <Route path="/refund-and-cancellation" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <RefundAndCancellation />
                        </Suspense>
                    } />
                    <Route path="/easy-rev/landing/:id" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <CustomerReview/>
                        </Suspense>
                    }/>
                    <Route path="/easy-rev/landing" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <CustomerReviewTest/>
                        </Suspense>
                    }/>
                    <Route path="/orders" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Orders/>
                        </Suspense>
                    }/>
                    <Route path="/orders-test" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <TestOrders/>
                        </Suspense>
                    }/>
                    <Route path="/payment-status/:id" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PaymentStatus />
                        </Suspense>
                    }/>
                    <Route path="/payment-status-easyrevv/:id" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PaymentStatus type='easyrevv'/>
                        </Suspense>
                    }/>
                    <Route path="easyrevv/initiate-payment" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <EasyRevPaymentInitiate/>
                        </Suspense>
                    }/>
                    <Route path="max-beauty/initiate-payment" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MaxBeautyPaymentInitiate/>
                        </Suspense>
                    }/>
                    <Route path="/pricing" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Pricing />
                        </Suspense>
                    } />
                    <Route path="*" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <FallBack />
                        </Suspense>
                    } />
                </Routes>
                </ScrollPage>
            </BrowserRouter>
        </>
    )
}

export default App;

const ScrollPage = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
};
