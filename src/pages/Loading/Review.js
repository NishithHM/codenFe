import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams, useNavigate } from "react-router-dom";



const CustomerReview = () => {
  const match = useParams()
  const devIds = []
  useEffect(()=>{
    if(devIds.includes(match?.id)){
      window.location.href = `https://dev.easy-revv.com/easy-rev/landing/${match?.id}`
    }else{
      window.location.href = `https://prod.easy-revv.com/easy-rev/landing/${match?.id}`
    }
     
  }, [match?.id])
  return <></>
}
export default CustomerReview