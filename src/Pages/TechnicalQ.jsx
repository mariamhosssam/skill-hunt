import axios from "axios";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState, useEffect } from 'react';
const TechnicalQ = () => {
    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [SessionId, setSessionId] = useState('');
     const [data, setData] = useState(null);
        const jobId = 1;
        const token = localStorage.getItem('token')

     
    useEffect(() => {
        const CreateSession = async (token, jobId) => {
          try {
            const response = await axios.post(`${baseUrl}/api/TechnicalInterview/CreateSession`, {
              token: token,
              jobId: jobId
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
        
            if (response.status === 200) {
              console.log(response.data);
              const sessionId = response.data.newSession.Id;
              return sessionId;
            }
          } catch (error) {
            console.error(error);
            // Handle errors
            return null;
          }
        };
        const GetTechnicalQuestions = async () => {
            axios.get(`${baseUrl}/api/TechnicalInterview/GetTechnicalQuestions?token=${token}&jobId=${jobId}`, {
                method: 'GET',
                headers: {
                  //'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
                params: {
                    token,
                    jobId 
                }
              }).then(data => {
                setQuestions(data.response.questions)
              })
              .catch(e => console.log(e) )
        }
        CreateSession()
        GetTechnicalQuestions()

    },[])    


    // const handleSubmit = async (event) => {
    //  //   event.preventDefault();

    // const response = await fetch('https://localhost:44322/api/TechnicalInterview/SubmitTheAnswers', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       token,
    //       jobId ,
    //       questionId: questions[0]?.Id,
    //       answer
    //     })
    //   }).then(data => console.log(data))
    //   .catch(e => console.log(e) )
    // }
    const handleSubmit = async () => {
      try {
        const response = await axios.post(`${baseUrl}/api/TechnicalInterview/SubmitTheAnswers`, {
          token: token,
          jobId: jobId,
          questionId: questions[0]?.Id,
          answer: answer
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        console.log(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    };

    return (
        <div>
        <Header pageTitle='Top Technical Interview Questions'></Header>
        <section className="site-section">
    <div className="quiz-container">
        <div id="quiz"></div>
        <button id="submit-btn " onClick={handleSubmit}>Submit Answers</button>
    </div>
    <div id="results"></div>
    <script>
       
    </script>
    </section> 


    
        <Footer></Footer>
        </div>
    )
}

export default TechnicalQ;