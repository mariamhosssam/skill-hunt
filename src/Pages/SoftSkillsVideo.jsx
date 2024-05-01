import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import VideoStreamer from "./VideoStreamer";
import { baseUrl } from "../Helpers";


const SoftSkillsVideo = () => {

  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const jobId = 1;
  const token = localStorage.getItem('token')

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
        setQuestions(response.data); // Corrected line
      } else {
        console.log("Failed process");
        console.error('Failed to fetch questions:', response);
      }
    } catch (error) {
      console.log("Failed process 2");
      console.error('Failed to fetch questions:', error);
    }
  };

  useEffect(() => {
    GetSoftSkillsQuestions();
    axios.post(`${baseUrl}/api/SoftSkillsInterView/CreateSession?token=${token}&jobId=${jobId}`)
    .then(response => {
      setSessionId(response.data)
    })
  }, []);

  const sendFileToApi = async (blobUrl) => {
    const fileName =  `${sessionId}`
    try {
      // Fetch the Blob data
      const response = await fetch(blobUrl);
      const blob = await response.blob();
  
      // Create a File object from the Blob data
      const file = new File([blob], fileName, { type: blob.type });
  
      // Create FormData and append the File object
      const formData = new FormData();
      formData.append('file', file);
  
      // Send FormData to API
      axios.post(`${baseUrl}/api/SoftSkillsInterView/UploadVideo?SessionId=${sessionId}`, formData)
      .then(response => {
        console.log(response)
      }).catch(err => console.log(err));
  
    } catch (error) {
      console.error('Error converting Blob URL to File and sending to API:', error);
    }
  };

  return (
    <div>
      <Header pageTitle='Soft skills Video Assessment'></Header>
      <section className="site-section">
        <ul>
            {questions?.map(question => (
              <li key={question.Id}>{question.questionBody}</li>
            ))}
        </ul>
        <VideoStreamer  uploadVideo={sendFileToApi}></VideoStreamer>
        <Link to="/ApplyForJob">Company Additional Questions</Link>
      </section>
      <Footer></Footer>
    </div>


  )
}

export default SoftSkillsVideo
