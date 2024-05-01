import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import VideoStreamer from "./VideoStreamer";


const SoftSkillsVideo = () => {

  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [data, setData] = useState();
  const jobId = 1;
  const token = localStorage.getItem('token')

  const GetSoftSkillsQuestions = async () => {
    try {
      const response = await axios.get(`https://localhost:44322/api/SoftSkillsInterView/GetSoftSkillsQuestions?token=${token}&jobId=${jobId}`, {
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
    axios.post(`https://localhost:44322/api/SoftSkillsInterView/CreateSession?token=${token}&jobId=${jobId}`)
    .then(response => {
      setSessionId(response.data)
    })
  }, []);

  const sendFileToApi = async (blobUrl) => {
    const fileName =  `${localStorage.getItem('userId')}_${jobId}`
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
      axios.post(`https://localhost:44322/api/SoftSkillsInterView/UploadVideo?SessionId=${sessionId}`, formData)
      .then(response => {
        console.log(response)
      }).catch(err => console.log(err));
  
      // if (apiResponse.ok) {
      //   console.log('File sent to API successfully.');
      // } else {
      //   console.error('Error sending file to API:', apiResponse.statusText);
      // }
    } catch (error) {
      console.error('Error converting Blob URL to File and sending to API:', error);
    }
  };


  //   useEffect(() => {

  //     const GetSoftSkillsQuestions = async () => {
  //         axios.get(`https://localhost:44322/api/SoftSkillsInterView/GetSoftSkillsQuestions?token=${token}&jobId=${jobId}`, {
  //             method: 'GET',
  //             headers: {
  //               //'Authorization': `Bearer ${token}`,
  //               'Content-Type': 'application/json'
  //             },
  //             params: {
  //                 token,
  //                 jobId 
  //             }
  //           }).then(
  //             // setQuestions(data.response.questions)
  //             console.log(data.response.questions))
  //           .catch(e => console.log(e) )
  //     }
  //     GetSoftSkillsQuestions();  

  // },[])  

  return (
    <div>
      <Header pageTitle='Soft skills Video Assessment'></Header>

      {/* <style dangerouslySetInnerHTML={{__html: "\n        #video-container {\n            margin: 20px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        #camera, #recorded-video {\n            width: 640px;\n            height: 480px;\n            margin-bottom: 10px;\n        }\n    \n        #record-btn, #stop-btn {\n            padding: 10px;\n            font-size: 16px;\n        }\n    " }} /> */}
      <section className="site-section">
        <ul>
            {questions?.map(question => (
              <li key={question.Id}>{question.questionBody}</li>
            ))}
        </ul>
        <VideoStreamer  uploadVideo={sendFileToApi}></VideoStreamer>
        {/* <div id="video-container">
      <video id="camera" autoPlay playsInline />
      <video id="recorded-video" controls />
      <button id="record-btn">Record</button>
      <button id="stop-btn" disabled>Stop</button>
    </div> */}
        <Link to="/ApplyForJob">Company Additional Questions</Link>
      </section>
      <Footer></Footer>
    </div>


  )
}

export default SoftSkillsVideo
