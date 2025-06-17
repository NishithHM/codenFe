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

const EasyRevPaymentInitiate = () => {
    const location = useLocation();
    const [details, setDetails] = useState(null);

    useEffect(async () => {
        const params = new URLSearchParams(location.search);
        const base64Details = params.get("details");
        if (base64Details) {
            const json = base64ToJson(base64Details);
            console.log(json);
            const response = await fetch(`https://api.easy-revv.com/initiate-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json),
            });
            if (response.ok) {
                const result = await response.json();
                if (result.paymentQr) {
                    window.location.href = result.paymentQr;
                }
            }
        }
    }, [location.search]);

    return (
        <div style={{ padding: 24 }}>
            Loading
        </div>
    );
};

export default EasyRevPaymentInitiate;


