import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import AdSense from "react-adsense";
import {
  useLocation,
  useMatch,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import cx from "classnames";
import "./Review.scss";
import ConfettiExplosion from "react-confetti-explosion";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import zomato from "../../icons/zomato.png";
import google from "../../icons/google.png";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";
import swiggy from "../../icons/swiggy.png";
import copy from "../../icons/copy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import paste from "../../icons/paste.gif";
import { Helmet } from "react-helmet";

const icons = {
  zomato,
  google,
  facebook,
  instagram,
  swiggy,
};

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
    backgroundColor: "#27AE61",
    width: 400,
    borderRadius: "40px",
    zIndex: 999,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 0,
    borderColor: "#27AE61",
  },
};

const url = process.env.REACT_APP_BASE_URL;
// const url = "http://localhost:3004"

const COLORS = {
  zomato: "#db3542",
  swiggy: "#ef841e",
  google: "#3B7DED",
  facebook: "#1773ea",
  instagram: "#614dc4",
};

const CustomerReview = () => {
  const [progress, setProgress] = useState(1);
  const [userResponse, setUserResponse] = useState("");
  const [selectedKeyword, setSelectedKayword] = useState([]);
  const [btnText, setBtnText] = useState("");
  const [api, setApi] = useState(false);
  const [isRedirecting, setRedirecting] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState("");
  const params = useParams();
  const id = params?.id;

  const timeRef = useRef();
  const timeRef2 = useRef();

  if (window.innerWidth <= 768) {
    customStyles.content.width = 300; // Adjust width for smaller screens
    customStyles.content.borderRadius = "10px"; // Adjust border radius for smaller screens
  }

  const [query] = useSearchParams();
  const session = query.get("session");
  const location = useLocation();
  const navigate = useNavigate();
  const getUserName = async () => {
    setLoading(true);
    const res = await axios.get(`${url}/client/${id}`);
    setUserResponse({
      name: res.data.name,
      keywords: res.data.keywords,
      redirectTo: res.data?.redirectTo,
    });
    if (res.data?.keywords?.length > 0) {
      console.log(res.data);
      const contact = res.data?.redirectTo?.filter(
        (ele) => ele.type === "contact"
      )?.[0];
      console.log(contact);

      const vcfContent =
        "BEGIN:VCARD\nVERSION:3.0\nN:" +
        res?.data?.name +
        "\nFN:" +
        res?.data?.name +
        "\nTEL;TYPE=CELL:" +
        contact?.url +
        "\nEND:VCARD";

      if (contact) {
        setContact(vcfContent);
      }
    } else {
      onButtonClick(false);
    }
  };
  useEffect(() => {
    setApi(true);
    timeRef.current = setTimeout(() => {
      onButtonClick(true);
    }, 20 * 1000);
  }, []);

  console.log(timeRef.current);

  useEffect(() => {
    if (api && session !== "expired") {
      getReview();
      getUserName();
    }
  }, [api, session]);

  const handleCopy = (e, url) => {
    e.preventDefault();
    setProgress(3);
    unsecuredCopyToClipboard({ review: data.review });
    // toast.success("Copied to Clipboard !");
    setRedirecting(true);
    console.log(data, url);
    if (data.review && data.review.length > 0) {
      setTimeout(() => {
        setRedirecting(false);
        window.open(url, "_self");
      }, 4000);
      setTimeout(() => {
        navigate("?session=expired");
      }, 1000);
    }
  };

  const getReview = (isInitial) => {
    setLoading(true);
    const urlFinal = isInitial
      ? `${url}/add-review/${id}?type=customer`
      : `${url}/add-review/${id}`;
    axios
      .post(urlFinal, {
        customerKeywords: selectedKeyword,
      })
      .then((res) => {
        if (res?.data?.custom) {
          window.location.href = res?.data?.redirectTo;
        } else if (res?.data?.review) {
          setData(res.data);
          setLoading(false);
          setBtnText("Copy and Post");
          unsecuredCopyToClipboard({ review: res.data.review });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(
          err?.response?.data || "Oops! Something went wrong, Please Try Again"
        );
        setRedirecting(false);
        setLoading(false);
      });
  };

  const addKeyword = (keyword) => {
    if (selectedKeyword.includes(keyword)) {
      const filteredKeyword = selectedKeyword.filter(
        (singleKeyword) => singleKeyword !== keyword
      );
      setSelectedKayword(filteredKeyword);
    } else {
      setSelectedKayword([...selectedKeyword, keyword]);
    }
    console.log(keyword);
  };

  const match = useParams();
  const devIds = [
    "7c9eb572-cdb6-4de3-aa3a-7d5a54dee2db",
    "589cc289-8cac-492d-8c96-f2b4417f40f8",
  ];
  useEffect(() => {
    if (devIds.includes(match?.id)) {
      window.location.href = `https://dev.easy-revv.com/easy-rev/landing/${match?.id}`;
    }
  }, [match?.id]);

  const Progress = ({ progress }) => {
    const statges = [1, 2, 3];
    return (
      <div className="progress-parent">
        <div className="progress-line"></div>
        {statges.map((ele) => (
          <div className="progress-child">
            <span
              className={cx({
                active: ele === progress,
                completed: ele < progress,
              })}
            >
              {progress > ele ? (
                <>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px", verticalAlign: "baseline" }}
                    icon={faCheck}
                    color="#fff"
                  />
                </>
              ) : (
                ele
              )}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const onButtonClick = (isInitial) => {
    if (progress === 1) {
      setBtnText("Writing review for you !");
      setProgress(2);
      getReview(isInitial);
      clearTimeout(timeRef.current);
    }
  };

  useEffect(() => {
    if (selectedKeyword.length === 3 && progress === 1) {
      onButtonClick(true);
    }
    // console.log(data?.redirectTo?.[0]?.url)

    // if(progress === 2 && data?.redirectTo?.[0]?.url){
    //   timeRef2.current = setTimeout(()=>{
    //     handleCopy({preventDefault:()=> null}, data?.redirectTo[0]?.url )
    //   }, 10000)
    // }
  }, [progress, JSON.stringify(selectedKeyword)]);
  const onSaveContact = () => {
    const blob = new Blob([contact], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${userResponse?.name}.vcf`);
  };

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loading]);

  return (
    <>
      <Helmet>
        <title>Google Review Cards | Easy-Rev by Coden Technologies</title>
        <meta
          name="description"
          content="Easy-Rev by Coden Technologies offers the best platform for managing customer feedback with Google Review Cards. Whether you're looking to boost reviews or streamline customer testimonials, Easy-Rev provides a simple, effective solution to enhance your online reputation."
        />
      </Helmet>
      {isRedirecting ? (
        <div className="card" style={{ height: "100vh" }}>
          <Progress progress={progress} />
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
          <img
            style={{ height: "40%", width: "100%" }}
            src={paste}
            alt="loading..."
          />
        </div>
      ) : (
        <>
          {session !== "expired" ? (
            <div id="cardid" className={cx("card")}>
              <div className="reviewContainer">
                {data?.review && <Progress progress={progress} />}
                <h1>{error.length > 0 && error}</h1>
                {progress === 1 && userResponse?.keywords?.length > 0 && (
                  <div className="form__containers">
                    {userResponse?.keywords?.length > 0 && (
                      <>
                        <p className="impress-text">What did you ❤️ at </p>
                        <h1>{userResponse.name}?</h1>
                      </>
                    )}
                    <div className="keywordcontainer">
                      {userResponse.keywords !== undefined &&
                        userResponse.keywords.length > 0 &&
                        userResponse.keywords.map((singleKeyword) => (
                          <div
                            key={singleKeyword}
                            className={cx(
                              "single_keyword",
                              {
                                "disabled-keyword":
                                  selectedKeyword.length === 3 &&
                                  !selectedKeyword.includes(singleKeyword),
                              },
                              {
                                "selected-keyword":
                                  selectedKeyword.includes(singleKeyword),
                              }
                            )}
                            onClick={() => addKeyword(singleKeyword)}
                          >
                            <span>{singleKeyword}</span>
                          </div>
                        ))}
                      <div className="hr-line"></div>
                    </div>
                  </div>
                )}
                {progress === 2 && loading && (
                  <div className="pen-loader">
                    writing
                    <div className="pencil">
                      <div className="pencil__ball-point"></div>
                      <div className="pencil__cap"></div>
                      <div className="pencil__cap-base"></div>
                      <div className="pencil__middle"></div>
                      <div className="pencil__eraser"></div>
                    </div>
                    <div className="line" />
                  </div>
                )}
                {progress === 2 && !loading && data.review && (
                  <div className="paste-box">
                    <span className="paste-text">
                      Remember to <strong>Paste</strong> the review in next
                      step!
                    </span>
                    <textarea
                      className="review-text"
                      value={data.review}
                      onChange={(e) =>
                        setData({ ...data, review: e?.target.value })
                      }
                    />
                    <div className="paste-sub-text">
                      We've crafted a review to save your time😀 modify as
                      needed !
                    </div>
                    <div className="hr-line"></div>
                  </div>
                )}

                {progress === 2 && !loading && !data.review && (
                  <>
                  <div
                    className="accordion-header"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <b style={{ fontSize: "24px" }}>
                      Card is not activated yet
                    </b>

                    <a
                      className={cx("btn-shine", "btn-alt", "copy")}
                      href={`https://api.whatsapp.com/send?phone=8277740015&text=Hi,%20Please%20Activate%20my%20card%20and%20my%20ID%20is%20-${params?.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className={cx("btn-shine", "btn-alt")}
                        style={{
                          backgroundColor: "#FFC72C",
                          color: "#000000",
                          boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 18px",
                          height: "40px",
                          textWrap: "nowrap",
                        }}
                      >
                        Click to Activate it
                      </button>
                    </a>
                  </div>
                  
                  </>
                  
                )}

                {!Boolean(data.review) && progress === 1 && (
                  <div className="btn__container">
                    <button
                      className={cx("btn-shine", "btn-alt", "copy")}
                      style={{ cursor: loading && "no-drop", height: "40px" }}
                      disabled={loading}
                      onClick={() => onButtonClick(true)}
                    >
                      Write Review for me!
                    </button>
                  </div>
                )}

                {!Boolean(data.review) && loading && progress === 2 &&  (
                  <div className="btn__container">
                    <button
                      className={cx("btn-shine", "btn-alt", "copy")}
                      style={{ cursor: loading && "no-drop", height: "40px" }}
                      disabled={loading}
                    >
                      {btnText}
                      {loading && (
                        <div
                          style={{
                            marginLeft: "1rem",
                          }}
                        >
                          <FontAwesomeIcon icon={faSpinner} spin color="#fff" />
                        </div>
                      )}
                    </button>
                  </div>
                )}
                {!Boolean(data.review) && contact && (
                  <div className="btn__container">
                    <button
                      className={cx("btn-shine", "btn-alt", "copy")}
                      style={{
                        cursor: loading && "no-drop",
                        height: "40px",
                        marginTop: "20px",
                      }}
                      disabled={loading}
                      onClick={() => onSaveContact(true)}
                    >
                      Save Contact
                    </button>
                  </div>
                )}
                {Boolean(data.review) &&
                  data?.redirectTo
                    ?.filter((ele) => ele?.type !== "contact")
                    ?.map((ele) => (
                      <div className="btn__container multi-button">
                        <div style={{ flex: 9 }}>
                          <button
                            className={cx("btn-shine", "btn-alt", "copy")}
                            style={{
                              cursor: loading && "no-drop",
                              height: "40px",
                            }}
                            disabled={loading}
                            onClick={(e) => handleCopy(e, ele.url)}
                          >
                            <div className="copy-image">
                              <img width={"24px"} height={"24px"} src={copy} />
                            </div>
                            <p>{btnText}</p>
                          </button>
                        </div>
                        <div
                          style={{
                            backgroundColor: COLORS[ele.type],
                            opacity: ele.type === "google" ? 1 : 0,
                            visibility:
                              ele.type ? "visible" : "hidden",
                          }}
                          className="social-icons"
                        >
                          {ele.type === 'google' && <img height={"25px"} src={icons[ele.type]} />}
                          {ele.type === 'tripadvisor' && <img height={"25px"} src={'/img/TripAdvisorLogo.png'} />}
                          {ele.type === 'justdial' && <img height={"25px"} src={'/img/JustDialLogo.png'} />}
                          
                        </div>
                      </div>
                    ))}
              </div>
              <div className="add-box">
                <AdSense.Google
                  client="ca-pub-7389479959832649"
                  slot="2475814081"
                  style={{ display: "block" }}
                  format="auto"
                  className="adsbygoogle"
                  responsive="true"
                />
              </div>
            </div>
          ) : (
            <h1 style={{ textAlign: "center" }}></h1>
          )}
        </>
      )}
    </>
  );
};
export default CustomerReview;
