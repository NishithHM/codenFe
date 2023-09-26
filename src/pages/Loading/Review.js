import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useMatch, useParams, useNavigate } from "react-router-dom";
import cx from 'classnames'
import './Review.scss'
import { ToastContainer, toast } from "react-toastify";
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

const reviews = [
  "Composing a quick review to save you time. Please be patient",
  "Formulating a short and sweet review to save your time !",
  "We're on it, writing a snappy review to spare you the effort",
  "Designing a snappy review to make life easier for you.",
  "Whipping up a quick review to lighten your load. Stay tuned!",
  "Sculpting a snappy review to save you effort and time.",
  "Shaping a brief review to save you valuable moments. Hang in there!",
  "Creating a snappy review to lighten your workload. Loading...",
  "We're on it, writing a swift review to spare you the effort.",
  "Building a quick review to save your time and energy.",
  "Carving out a brief review to make your day smoother. Hang tight!",
  "Molding a concise review to ease your way. Please wait.",
  "Generating a brief review to make your life hassle-free. Loading, loading...",
  "Constructing a concise review to give you more time. Loading...",
  "Shaping a snappy review to make life easier for you. Stay with us!",
  "Creating a swift review to save your precious moments. Hang in there!",
  "Weaving a brief review to make your day smoother. Just a moment more.",
  "Molding a short and sweet review to ease your way. Almost there!",
  "Crafting a brief review to save you time and energy.",
  "Constructing a quick review to make life hassle-free. Hold tight!",
  "Shaping a concise review to simplify your experience. Loading...",
  "Creating a concise review to give you more free time. Loading...",
  "Molding a short and sweet review to save your precious moments.",
  "Weaving a snappy review to simplify your task. Hold tight!",
  "Composing a swift review to give you back some time. Almost there!"
]

const url = 'https://apidevreview.codentechnologies.com'

const CustomerReview = () => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState('Generating Review...')
  const [api, setApi] = useState(false)
  const [isRedirecting, setRedirecting] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 24) + 1;
    setIndex(randomNumber)
    setApi(true)
  }, [])

  useEffect(() => {
    if (api) {
      getReview()
    }
  }, [api])


  const handleCopy = async (e) => {
    e.preventDefault();
    unsecuredCopyToClipboard({ review: data.review })
    toast.success("Copied to Clipboard");
    if (data.review && data.review.length > 0) {
      setTimeout(() => {
        setRedirecting(true);
        window.location.href = data?.redirectTo;
      }, 1000);
    }
  }

  const getReview = () => {
    setLoading(true)
    axios.get(`${url}/add-review/${params.id}`).then((res) => {
      console.log("RRESD", res.data)
      setData(res.data)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setError(err?.response?.data || "Oops! Something went wrong, Please Try Again")
      setRedirecting(false)
      setLoading(false)
    })
  }

  const handleSkip = (e) => {
    e.preventDefault()
    e.preventDefault();
    if (data.review && data.review.length > 0) {
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = data?.redirectTo
      }, 1000);
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        type="success"
      />
      {isRedirecting ? (
        <div className="card">
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
        <div className="card">
          <h1>{error.length > 0 ? error : reviews[index]}</h1>
          {console.log(index, 'ind')}
          {
            loading && (
              <div className="loader">
                <div className="spin"></div>
                <div className="bounce"></div>
              </div>
            )
          }
          <div className="btn__container">
            <button className={cx(
              loading ? "disabled" : "copy"
            )} style={{ cursor: loading && "no-drop" }} disabled={loading} onClick={handleCopy}>Copy & Go to Review</button>

            <button className={cx(
              loading ? "disabled" : "skip"
            )} style={{ cursor: loading && "no-drop" }} disabled={loading} onClick={handleSkip}>Skip & Go to Review</button>
          </div>
        </div>
      )}
    </>
  )
}
export default CustomerReview