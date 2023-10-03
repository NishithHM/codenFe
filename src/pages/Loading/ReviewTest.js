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

const CustomerReviewTest = () => {
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
      if (res?.data?.custom) {
        window.location.href = res?.data?.redirectTo
      } else {
        setData(res.data)
        setLoading(false)
      }
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
      {/* <div style={{margin:'20px'}}>
            ABC Software Solutions is a cutting-edge software company that stands at the forefront of innovation and technology. With a rich history spanning over a decade, we have consistently delivered groundbreaking solutions that have reshaped industries and empowered businesses worldwide. At the heart of our company is a passionate team of developers, engineers, and visionaries who share a common goal: to create software that not only meets the needs of today but anticipates the challenges of tomorrow.

            Our journey began with a simple yet profound mission: to harness the power of code and technology to solve complex problems. Since our inception, we have stayed true to this mission, evolving and adapting to the ever-changing landscape of the tech industry. We have embraced a wide spectrum of technologies and platforms, from the versatility of Java and Python to the real-time capabilities of Vertx and the seamless user interfaces of React. Our diverse and extensive tech stack allows us to approach projects with a flexible mindset, ensuring that we always have the right tools for the job.

            One of the cornerstones of our success is our commitment to collaboration and open communication. We understand that software development is not a solitary endeavor but a collective effort that thrives on teamwork. Our development teams, composed of experts in their respective fields, work closely together, leveraging each other's strengths to create solutions that exceed expectations. Whether it's building scalable microservices with Nest or deploying applications on AWS for unmatched scalability and reliability, our teams are driven by a shared sense of purpose and a relentless pursuit of excellence.

            Innovation is in our DNA, and it drives every aspect of our work. We are constantly exploring emerging technologies and methodologies to stay ahead of the curve. Our developers are not just coders; they are pioneers, exploring the uncharted territory of containerization with Docker and harnessing the power of in-memory data storage with Redis. We pride ourselves on being early adopters, but we are equally dedicated to refining and optimizing our processes to ensure that our software remains robust and future-proof.

            As a software company deeply committed to the principles of DevOps, we recognize the importance of streamlining the development and deployment pipeline. This is where Jenkins comes into play as a vital part of our toolkit. With automated build, test, and deployment processes, we can deliver software faster, more reliably, and with fewer errors. Our clients benefit from reduced time-to-market and increased agility, enabling them to respond to market demands with unmatched speed and precision.

            Data is the lifeblood of the modern business, and we understand the critical role it plays in decision-making. Our expertise in data management extends to the realm of databases like MongoDB, allowing us to design and implement robust data storage solutions that can handle the demands of today's data-intensive applications. We ensure that data is not just stored but harnessed to provide valuable insights through analytics and reporting, leveraging technologies like Python to process and analyze data at scale.

            In an era of ever-increasing connectivity, security is a paramount concern. We take a proactive approach to cybersecurity, incorporating best practices into every stage of our development process. Our dedication to safeguarding our clients' data extends to our choice of technology partners, such as AWS, which offers a comprehensive suite of security services to protect against threats and vulnerabilities. We understand that trust is earned, and we go the extra mile to ensure the safety and integrity of our software solutions.

            While our technological prowess is undeniable, our success is ultimately measured by the positive impact we have on our clients' businesses. We have had the privilege of working with a diverse range of industries, from e-commerce to healthcare and finance, and we take pride in the tangible results our solutions deliver. Whether it's optimizing supply chain operations, enhancing customer experiences through intuitive web interfaces, or facilitating data-driven decision-making, our software is a catalyst for growth and transformation.

            Our commitment to excellence extends beyond the delivery of software. We provide comprehensive support and maintenance services to ensure that our solutions continue to perform at their best long after deployment. Our clients can rely on us for timely updates, bug fixes, and enhancements, allowing them to stay ahead in a rapidly evolving digital landscape. We view our clients as partners in success, and their achievements are a testament to the enduring value of our collaborations.

            In conclusion, ABC Software Solutions is not just a software company; we are architects of innovation, builders of the future, and partners in progress. Our unwavering dedication to technology, collaboration, and excellence has propelled us to the forefront of the software industry. We are not content to rest on our laurels but continue to push the boundaries of what's possible. With a passion for solving complex problems, a commitment to quality, and a thirst for innovation, we stand ready to tackle the challenges of today and shape the possibilities of tomorrow. Join us on this exciting journey as we continue to redefine the software landscape, one line of code at a time.
          </div> */}
    </>
  )
}
export default CustomerReviewTest