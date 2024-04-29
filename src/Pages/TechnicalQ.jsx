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
        const CreateSession = async () => {
            const response = await fetch(`https://localhost:44322/api/TechnicalInterview/CreateSession?token=${token}&jobId=${jobId}`, {
                method: 'POST',
                headers: {
                  //'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
                params: {
                    token,
                    jobId 
                }
              }).then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                  console.log(response)
                  SessionId= response.data.newSession.Id;
                      
              
                }
              })
              .catch(e => console.log(e) )
        }
        const GetTechnicalQuestions = async () => {
            axios.get(`https://localhost:44322/api/TechnicalInterview/GetTechnicalQuestions?token=${token}&jobId=${jobId}`, {
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
    //bta3et eh ? -le amin-
    


    const handleSubmit = async (event) => {
     //   event.preventDefault();

    const response = await fetch('https://localhost:44322/api/TechnicalInterview/SubmitTheAnswers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
          jobId ,
          questionId: questions[0]?.Id,
          answer
        })
      }).then(data => console.log(data))
      .catch(e => console.log(e) )
    }
  

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