import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef  } from 'react';
import axios from "axios";
import VideoStreamer from "./VideoStreamer";
import { baseUrl } from "../Helpers";
import TypingEffect from '../Components/TypingEffect';


const SoftSkillsVideo = () => {
  const navigae = useNavigate()
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('')
  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const token = localStorage.getItem('token')
  const [searchParams] = useSearchParams();
  let jobId = searchParams.get('jobId');
  const [responseMessage, setResponseMessage] = useState({});


  // for waiting
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [dataLoaded, setDataLoaded] = useState(false);

  const GetSoftSkillsQuestions = async () => {
    try {
      const response = await axios.get(`${baseUrl}/SoftSkillsInterView/GetSoftSkillsQuestions?token=${token}&jobId=${jobId}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 200) {
        console.log(response.data); // Corrected line
        console.log("Successful process");

        setQuestions(response.data.map(q=>q.questionBody)); 

      } else {
        console.log("Failed process");
        console.error('Failed to fetch questions:', response);
      }
    } catch (error) {
      console.log("Failed process 2");
      console.error('Failed to fetch questions:', error);
    }
  };

  const hasCreatedSession = useRef(false); // Add useRef to track session creation
  
  useEffect(() => {
    window.scrollTo(0, 200); // to scrolling

    const timerId = setTimeout(() => {
      setDataLoaded(true);
      axios.get(`${baseUrl}/SoftSkillsInterView/HelloMessage`)
      .then(response => {console.log("dd")}).catch(err => setLoadingErrorMessage(err.response.data))
    }, 5000); // Wait for 5 seconds

    const intervalId = setInterval(() => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
    }, 1000); // Decrement every second

    GetSoftSkillsQuestions();

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);

      if (!hasCreatedSession.current) {
        axios.post(`${baseUrl}/SoftSkillsInterView/CreateSession?token=${token}&jobId=${jobId}`)
          .then(response => {
            setSessionId(response.data);
            hasCreatedSession.current = true; // Mark the session as created
          })
          .catch(err => setLoadingErrorMessage(err.response.data));
      }
    };
  }, []);

  const sendFileToApi = async (blobUrl) => {
    const fileName =  `${sessionId}`
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: blob.type });
      const formData = new FormData();
      formData.append('file', file);

      axios.post(`${baseUrl}/SoftSkillsInterView/UploadVideo?SessionId=${sessionId}`, formData)
      .then(response => {
        console.log(response)
        setResponseMessage({ message: response.data, state: 'success' })
        navigae(`/ApplyForJob?jobId=${jobId}`)
      }).catch(err => (
        console.log(err),
        setResponseMessage({ message: 'An error occurred, please try again!', state: 'error' })
      )
      );

    } catch (error) {
      console.error('Error converting Blob URL to File and sending to API:', error);
    }
  };

  if (!dataLoaded) {
    return (
      <div>
        <Header pageTitle='Soft skills Video Assessment'></Header>
        <section className="site-section">
          <div className="container">
            {loadingErrorMessage && <h3 id="results" className="text-danger">{loadingErrorMessage}</h3>}
            {!loadingErrorMessage && (
              <section className="site-section pt-0">
                <div className="loading-container test-type pb-5">

                  <h1 >Are You Ready...</h1>
                  {secondsRemaining > 0 && (
                    <p className="test-type">Starting in  {secondsRemaining}</p>
                  )}

                </div>
                <VideoStreamer uploadVideo={sendFileToApi}></VideoStreamer>
                <br></br>
                <div id="results" className={responseMessage.state === 'success' ? "text-success" : "text-danger"}>{responseMessage.message}</div>
                <br></br>
              </section>
            )}
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }

  return (
    <div>
      <Header pageTitle='Soft skills Video Assessment'></Header>
      <section className="site-section">
        <div className="container">
          {loadingErrorMessage && <h3 id="results" className="text-danger">{loadingErrorMessage}</h3>}
          {!loadingErrorMessage && (
            <section className="site-section pt-0">

              
              <div className="pb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="green" class="bi bi-robot p-1" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
              <TypingEffect text= {`Hello :) I am an AI Model developed by 'Skill Hunt team' .. I'm delighted to engage in this interview with you .. please start with introducing yourself ! ~ •  ${questions}`} speed={150} />
              </div>
              {/* <ul>
                {questions?.map(question => (
                  <li key={question.Id}>{question.questionBody}</li>
                ))}
              </ul> */}
              
              <VideoStreamer uploadVideo={sendFileToApi}></VideoStreamer>
              <br></br> 
              <div id="results" className={responseMessage.state === 'success' ? "text-success" : "text-danger"}>{responseMessage.message}</div>
              <br></br>
            </section>
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default SoftSkillsVideo
