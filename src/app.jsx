import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
            <Route
              path="/"
              element={
                <Landing
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/sales-policy" element={<SalesPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route
              path="/refund-and-cancellation"
              element={<RefundAndCancellation />}
            />
            <Route path="/easy-rev/landing/:id" element={<CustomerReview />} />
            <Route path="/easy-rev/landing" element={<CustomerReviewTest />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders-test" element={<TestOrders />} />
            <Route path="/payment-status/:id" element={<PaymentStatus />} />
            <Route path="*" element={<FallBack />} />
          </Routes>
        </ScrollPage>
      </BrowserRouter>
    </>
  );
};

export default App;

const ScrollPage = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
};
