import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams, useNavigate } from "react-router-dom";



const CustomerReview = () => {
  const match = useParams()

  useEffect(()=>{
     window.location.href = `https://prod.easy-revv.com/easy-rev/landing/${match?.id}`
  }, [match?.id])
  return <></>
}
export default CustomerReview