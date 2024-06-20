import axios from "axios";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState, useEffect } from 'react';
import { baseUrl } from "../Helpers";
import { useNavigate, useSearchParams } from "react-router-dom";

const TechnicalQ = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [responseMessage, setResponseMessage] = useState({});
  const [searchParams] = useSearchParams();
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('')
  const navigate = useNavigate()
  // const [SessionId, setSessionId] = useState('');
  // const [data, setData] = useState(null);
  let jobId = searchParams.get('jobId');
  const token = localStorage.getItem('token')
  let sessionId


  useEffect(() => {
    const CreateSession = async () => {
      axios.post(`${baseUrl}/TechnicalInterview/CreateSession?token=${token}&jobId=${jobId}`)
        .then(response => {
          sessionId = response.data;
        }).catch(err => (
          console.error(err),
          setLoadingErrorMessage(err.response.data)
        ));
    };
    const GetTechnicalQuestions = async () => {
      axios.get(`${baseUrl}/TechnicalInterview/GetTechnicalQuestions?token=${token}&jobId=${jobId}`)
        .then(response => {
          setQuestions(response.data)
        })
        .catch(e => console.log(e))
    }
    CreateSession()
    GetTechnicalQuestions()

  }, [])


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
    axios.post(`${baseUrl}/TechnicalInterview/SubmitTheAnswers?token=${token}&jobId=${jobId}`, answers)
      .then(response => {
        setResponseMessage({ message: response.data, state: 'success' })
        navigate(`/SoftSkillsVideo?jobId=${jobId}`)
      }
      )
      .catch(err => (
        setResponseMessage({ message: 'An error occurred, please try again!', state: 'error' }),
        console.log(err)
      )
      )
  };
  const handleAnswer = (event, id) => {
    console.log(id, event.target.value)
    const answer = answers.find(a => a.questionId == id)
    if (answer) {
      answer.userAnswer = event.target.value
      setAnswers(answers)
    } else {
      setAnswers(prev => [...prev, { questionId: id.toString(), userAnswer: event.target.value }])
    }
    setTimeout(() => {
      console.log(answers)
    }, 2000)
  }

  return (
    <div>
      <Header pageTitle='Top Technical Interview Questions'></Header>

      <section className="site-section">
        <div className="container">
          <div className="quiz-container">
            {loadingErrorMessage && <h3 id="results" className="text-danger">{loadingErrorMessage}</h3>}
            {!loadingErrorMessage && <>
              {questions?.map((question, i) => (

                <div className="row form-group" key={question.id}>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor={question.id}>
                      {question.questionBody}
                    </label>
                    {question.answers.map(answer => (
                        <div key={answer.id}>
                          <input onChange={(e) => handleAnswer(e, question.id)} type="radio" id={answer.id} name={question.id} value={answer.chooseBody} />{'  '}
                          <label htmlFor={answer.chooseBody}>{answer.chooseBody}</label>
                        </div>
                      ))}
                    {/* {question.answers.length > 0 ?
                      (question.answers.map(answer => (
                        <div key={answer.id}>
                          <input onChange={(e) => handleAnswer(e, question.id)} type="radio" id={answer.id} name={question.id} value={answer.chooseBody} />{'  '}
                          <label htmlFor={answer.chooseBody}>{answer.chooseBody}</label>
                        </div>
                      ))
                      )
                      : (<input
                        onBlur={(e) => handleAnswer(e, question.id)}
                        type="text"
                        id={question.id}
                        // value={username}
                        className="form-control"
                      // placeholder="Username"
                      />)
                    } */}
                  </div>
                </div>

                // <div id={"quiz-"+i} key={question.id}>
                //   <div>{question.questionBody}</div>
                //   {question.answers.length > 0 ? 
                //   question.answers.map(answer => <div><input type="radio" id={answer.id} name={question.id} value={answer.chooseBody}/> <label for={answer.chooseBody}>{answer.chooseBody}</label></div> ) 
                //   : <input type="text"></input>}

                // </div>

              ))}
              {localStorage.getItem('usertype') == 0 && <button id="submit-btn" className="btn px-4 btn-primary text-white" onClick={handleSubmit}>Submit Answers</button>}
              
            </>}
          </div>
          <br></br>
          <div id="results" className={responseMessage.state === 'success' ? "text-success" : "text-danger"}>{responseMessage.message}</div>
        </div>
      </section>



      <Footer></Footer>
    </div>
  )
}

export default TechnicalQ;