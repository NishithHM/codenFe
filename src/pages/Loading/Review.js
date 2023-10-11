import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams, useNavigate } from "react-router-dom";



const CustomerReview = () => {
  const match = useParams()
  const devIds = ['5d961303-cfad-415e-866d-c20baa35c831',  '3cc01aa2-a22b-479e-a63f-f9ad9ea033c0', '589cc289-8cac-492d-8c96-f2b4417f40f8', '295b70ce-877b-4e0c-810b-04a140a067b1', '7408ec84-5e9c-431f-b534-f458499a5076', '7c9eb572-cdb6-4de3-aa3a-7d5a54dee2db', '8c51e488-2565-4ad3-9698-9b9b4d788da3', '8f10700c-52ea-4270-97a8-8edfcd0b9295', '2c361e14-d184-4485-ab58-e188165d635e', '2fb9cc03-6427-4a48-a379-feba94f11804' , '5d961303-cfad-415e-866d-c20bbb35c831', '5d961303-cfad-415e-866d-c30bbb35c831' ]
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