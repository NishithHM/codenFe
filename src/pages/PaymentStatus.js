import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './PaymentStatus.module.css'
import { Oval } from 'react-loader-spinner'
import axios from 'axios';
const urlProd = "https://api.easy-revv.com"
const urlDev = "https://apidevreview.codentechnologies.com"
const PaymentStatus = () => {
    const match = useParams()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const checkPaymentStatus = async (int) => {
        setLoading(true)

        const res = await axios.get(`${urlProd}/payment-status/${match?.id}`).catch(err=> clearInterval(int))
        console.log(res.data)
        if (res.data.status === "SUCCESS") {
            clearInterval(int)
            setLoading(false)
            setSuccess(true)
        } else if (res.data.status === "FAILED") {
            clearInterval(int)
            setLoading(false)
            setError(true)
        } else {
            setLoading(true)
        }
    }
    useEffect(() => {
        const int = setInterval(() => {
            checkPaymentStatus(int)
        }, 5000)

    }, [])
    // INIT FAILED SUCCESS
    return (
        <div className={styles.container}>
            {success && <div>
                <div className={styles.paymentSuccessText}>
                    Payment is Successful for {match?.id}
                </div>
                <div>
                    <img
                        src="/img/success.gif"
                        alt="loading"
                        width={250}
                        height={200}
                    />
                </div>
            </div>}
            {error && <div>
                <div className={styles.errorText}>
                    Payment Failed !
                </div>
                <div>
                    <img
                        src="/img/error.gif"
                        alt="loading"
                        width={250}
                        height={200}
                    />
                </div>
            </div>}
            {loading && <div>
                <div className={styles.initText}>
                    Payment Initiating... Please Wait...
                </div>
                <div>
                    <Oval
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                </div>
            </div>}
        </div>
    )
}

export default PaymentStatus;