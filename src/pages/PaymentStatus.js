import React from "react";
import { useParams } from "react-router-dom";

const PaymentStatus = ()=>{
    const match = useParams()
    return(
        <h1>
            Payment Success for {match?.id}
        </h1>
    )
}

export default PaymentStatus;