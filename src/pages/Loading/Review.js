import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams, useNavigate, useSearchParams } from "react-router-dom";
import cx from 'classnames'
import './Review.scss'
import ConfettiExplosion from 'react-confetti-explosion';
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import 'react-toastify/dist/ReactToastify.css';
export function unsecuredCopyToClipboard({ review }) {
  const textArea = document.createElement("textarea");
  textArea.value = review;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy to clipboard", err);
  }
  document.body.removeChild(textArea);
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:'#27AE61',
    width: 400,
    borderRadius : "40px",
    zIndex: 999,
    textAlign:'center',
    fontWeight: 'bold',
    color:'white',
    padding: 0
  },
};

const url = process.env.REACT_APP_BASE_URL


const CustomerReview = () => {
  const [index, setIndex] = useState("Loading...");
  const [userResponse, setUserResponse] = useState("");
  const [selectedKeyword, setSelectedKayword] = useState([]);
  const [btnText, setBtnText] = useState("")
  const [api, setApi] = useState(false)
  const [isRedirecting, setRedirecting] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [explosion, setExplosion] = useState(false);
  const params = useParams()
  const id = params?.id
  // const location = useLocation()
  // const navigate = useNavigate()

  // const reviews = [
  //   `Sit tight while we create a review for ${name}`,
  //   `We're writing a review for ${name}. Your patience is appreciated.`,
  //   `We're working on your review for ${name}`,
  //   `In the process of crafting a review for ${name}`,
  //   `Hang in there while we prepare a review for ${name}`,
  //   `Your review for ${name} is being generated. Stay tuned.`,
  //   `Generating a review for ${name} to save your valuable time.`,
  //   `Your review for ${name} is in progress. Thank you for waiting and saving time.`
  // ]


  if (window.innerWidth <= 768) {
    customStyles.content.width = 300; // Adjust width for smaller screens
    customStyles.content.borderRadius = "10px"; // Adjust border radius for smaller screens
  }

  const [query] =useSearchParams()
  const session = query.get('session');
  const location = useLocation()
  const navigate = useNavigate()
  const getUserName = async () => {
    setLoading(true)
    setIndex("Loading...")
    const res = await axios.get(`${url}/client/${id}`);
    setIndex("Hope you had good time at")
    setUserResponse({
      name: res.data.name,
      keywords: res.data.keywords,
      redirectTo: res.data?.redirectTo
    })
    if(res.data?.keywords?.length >0){
      setBtnText("Write Review for me!")
    }else{
      setBtnText("loading .....")
    }
  }
  useEffect(() => {
    setApi(true)
  }, [])

  useEffect(() => {
    if (api && session!=='expired') {
      getReview()
      getUserName()
    }
  }, [api, session])

  const handleCopy = (e,url) => {
    e.preventDefault();
    unsecuredCopyToClipboard({ review: data.review })
    // toast.success("Copied to Clipboard !");
    setRedirecting(true);
    if (data.review && data.review.length > 0) {
      setTimeout(() => {
        navigate('?session=expired')
        setRedirecting(false)
        window.location.href = url
      }, 1000);
    }
  }

  const getReview = (isInitial) => {
    setLoading(true)
    const urlFinal = isInitial ? `${url}/add-review/${id}?type=customer` : `${url}/add-review/${id}`
    axios.post(urlFinal, {
      customerKeywords: selectedKeyword
    }).then((res) => {
      if (res?.data?.custom) {
        window.location.href = res?.data?.redirectTo
      } else if(res?.data?.review) {
        setModalOpen(true);
        setExplosion(true);
        setData(res.data)
        setLoading(false)
        setBtnText("Go to Review")
        setIndex(`Hope you had good time at`)
        unsecuredCopyToClipboard({ review: res.data.review })
        setTimeout(() => {
          setExplosion(false);
          setModalOpen(false);
        }, 5000);
      }else{
        setLoading(false)
      }
    }).catch(err => {
      console.log(err)
      setError(err?.response?.data || "Oops! Something went wrong, Please Try Again")
      setRedirecting(false)
      setLoading(false)
    })
  }

  const addKeyword = (keyword) => {
    const filteredKeyword = userResponse.keywords.filter((singleKeyword) => singleKeyword !== keyword);
    setSelectedKayword([...selectedKeyword, keyword]);
    console.log(keyword)
    setUserResponse({
      ...userResponse,
      keywords: filteredKeyword
    })
  }

  const removeKeyword = (keyword) => {
    const filteredKeyword = selectedKeyword.filter((singleKeyword) => singleKeyword !== keyword);
    setSelectedKayword(filteredKeyword)
    setUserResponse({
      ...userResponse,
      keywords: [...userResponse.keywords, keyword]
    })
  }

  const match = useParams()
  const devIds = []
  useEffect(()=>{
    if(devIds.includes(match?.id)){
      window.location.href = `https://dev.easy-revv.com/easy-rev/landing/${match?.id}`
    }
     
  }, [match?.id])


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        type="success"
      />
      {isRedirecting ? (
        <div className="card" style={{ height: '100vh' }}>
          <div className="loaderbody">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="base">
              <span></span>
              <div className="face"></div>
            </div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="redirecttext">Redirecting</h1>
        </div>
      ) : (
        <>
        {session!=="expired" ?
        <div className="card" style={{zIndex:explosion? -1 : 1}}>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
            overlayClassName={'modal-overlay'}
          >
            <h3>Copied to Clipboard !!  &#10004;</h3>
          </Modal>
          {explosion  &&
          <div style={{position:'fixed', bottom:'50%', left:'50%'}}>
          <ConfettiExplosion zIndex={-1} duration={4000} particleCount={400} particleSize={16} force={1} height={1000} width={1000}/>
          </div> }
          <h1>{error.length > 0 ? error : index}</h1>
           <h1 style={{ fontWeight: 'bold' }}>{userResponse?.name}</h1>
          {
            userResponse?.keywords?.length > 0&& (
              <div className="form__containers">
                {userResponse?.keywords?.length > 0 && <p className="impress-text">What you ❤️ at {userResponse.name}?</p> }
                {
                  selectedKeyword.length > 0 && (
                    <>
                      <div className="keywordcontainer">
                        {
                          selectedKeyword.map((singleKeyword) => (
                            <div key={singleKeyword} className="selected_keyword">
                              <div>
                                <span>{singleKeyword}</span>
                                <span className="cross" onClick={() => removeKeyword(singleKeyword)}> ❌</span>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      <div className="single_line"></div>
                    </>
                  )
                }
                <div className="keywordcontainer">
                  {
                    userResponse.keywords !== undefined && userResponse.keywords.length > 0 &&  userResponse.keywords.map((singleKeyword) => (
                      <div key={singleKeyword} className={cx("single_keyword",{'disabled-keyword': selectedKeyword.length ===3} )} onClick={() => addKeyword(singleKeyword)}>
                        <span>{singleKeyword}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
         {userResponse?.keywords?.length > 0 && btnText === "Write Review for me!" && <div className="btn__container">
            <button className={cx(
              loading ? "disabled" : "copy"
            )} style={{ cursor: loading && "no-drop" , height:'40px'}} disabled={loading} onClick={btnText === `Go to Review` ? (e)=>handleCopy(e): getReview}>
              {
                loading ? (
                  <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : `${btnText}`
              }
            </button>
          </div> }
          {btnText !== "Write Review for me!" && userResponse?.redirectTo?.map(ele=>(
            <div key={ele?.url} className="btn__container">
            <button className={cx(
              loading ? "disabled" : "copy"
            )} style={{ cursor: loading && "no-drop" , height:'40px'}} disabled={loading} onClick={(e)=>handleCopy(e, ele.url)}>
              {
                loading ? (
                  <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : `Go to ${ele.type} Review`
              }
            </button>
          </div>
          ))}
          
          {
            loading && (
              // <div className="loader">
              //   <div className="spin"></div>
              //   <div className="bounce"></div>
              // </div>
              <div style={{marginTop: '20px'}}>
                    writing

                  <div class="pencil">
                    <div class="pencil__ball-point"></div>
                    <div class="pencil__cap"></div>
                    <div class="pencil__cap-base"></div>
                    <div class="pencil__middle"></div>
                    <div class="pencil__eraser"></div>
                  </div>
                  <div class="line"/>
                  </div>

            )
          }
        </div>
        : <h1 style={{textAlign:'center'}}>We are very much pleased with your review, Have a great day!!</h1>}
        </>
      )}
    </>
  )
}
export default CustomerReview