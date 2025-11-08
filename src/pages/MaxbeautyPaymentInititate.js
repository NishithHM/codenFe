import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const base64ToJson = (base64) => {
    try {
        const decoded = atob(base64);
        return JSON.parse(decoded);
    } catch (e) {
        return null;
    }
};

const MaxBeautyPaymentInitiate = () => {
    const location = useLocation();
    const [details, setDetails] = useState(null);

    const initiatePayment = async () => {
    try {
      // setPaymentLoading(true)

      // Create return URL with visitorId param
      const params = new URLSearchParams(location.search);

      const visitorId = params.get("visitorId");
      const fbp = params.get("fbp");
      const fbc = params.get("fbc");

      const res = await fetch(`https://api.codentechnologies.com/api/max-beauty/initiate-payment`, {
        method: 'POST',
        headers: {
          Authorization: '67ytgchbnuhgnbvsd',
          'Content-Type': 'application/json',
          fbp: fbp,
          fbc: fbc
        },
        body: JSON.stringify({ 
          visitorId,
          returnUrl: ''
        })
      })
      if (!res.ok) throw new Error('Payment initiation failed')
      const data = await res.json()
      if (data?.link) {
        // Redirect to payment URL
        window.location.href = data.link
      }
      // Handle successful payment initiation
    } catch (error) {
      console.error(error)
    } finally {
      // setPaymentLoading(false)
    }
  }

    useEffect(async () => {
        initiatePayment();
    }, [location.search]);

    return (
        <div style={{ padding: 24 }}>
            Loading
        </div>
    );
};

export default MaxBeautyPaymentInitiate;


