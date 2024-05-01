import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import VideoStreamer from "./VideoStreamer";


const SoftSkillsVideo = () => {

  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState();
const jobId = 1;
const token = localStorage.getItem('token')

const GetSoftSkillsQuestions = async () => {
  try {
    const response = await axios.get(`https://localhost:44322/api/SoftSkillsInterView/GetSoftSkillsQuestions?token=${token}&jobId=${jobId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        token: token,
        jobId: jobId
      }
    });
    
    if (response.status === 200) {
      console.log(response.data.questions); // Corrected line
      console.log("Successful process");
      setQuestions(response.data.questions); // Corrected line
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
}, []);


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
    <VideoStreamer></VideoStreamer>
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
