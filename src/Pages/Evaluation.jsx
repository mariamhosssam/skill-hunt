import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProgressBar from "@ramonak/react-progress-bar";
import '../index.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Helpers";
import { useLocation } from "react-router-dom";

const Evaluation = () => {
  const location = useLocation();
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('')
  const searchParams = new URLSearchParams(location.search);
  const reportId = searchParams.get("id");
  const token = localStorage.getItem('token');
  const [analysis, setAnalysis] = useState(undefined)

  useEffect(() => {
    axios.get(`${baseUrl}/report/GetReport?token=${token}&reportId=${reportId}`)
      .then(response => {
        setAnalysis(response.data.bodyLanguageAnalysisResult)
      })
      .catch(err => console.log(err))
  }, [])
  //   const questions = [
  //     {
  //         "id": 1,
  //         "questionBody": "How many Pillars for OOP?",
  //         "answers": [
  //             {
  //                 "id": 1,
  //                 "chooseBody": "4",
  //                 "questionId": 1
  //             },
  //             {
  //                 "id": 2,
  //                 "chooseBody": "5",
  //                 "questionId": 1
  //             },
  //             {
  //                 "id": 3,
  //                 "chooseBody": "1",
  //                 "questionId": 1
  //             },
  //             {
  //                 "id": 4,
  //                 "chooseBody": "2",
  //                 "questionId": 1
  //             }
  //         ]
  //     },
  //     {
  //         "id": 2,
  //         "questionBody": "How many Pillars for OOP",
  //         "answers": []
  //     }
  // ]
  
  return (
    <div className="site-wrap">
      <Header pageTitle='Interview evaluation'></Header>
      <section className="site-section">
        {analysis && (
          <div className="container">
          {/* EDITIED CV */}
          <div className="rate-listings mb-5">
            <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis : </h3>
              <div>
                <div>
                  {/* Shoulders - Arm Rates */}
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Openness Rate :</span>
                  <ProgressBar
                    completed={((analysis.armPositionAnalysisRate+analysis.shouldersPositionAnalysisRate)/200) * 100}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                    <p>{analysis.armPositionAnalysisFeedback + ', while' + analysis.shouldersPositionAnalysisFeedback}</p>
                    </div>
                  </div>
                </div>
                <div className="rate-listings mb-5">
                  <div>
                    {/* HappyFace - Eyes Rates*/}
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Confidence Rate :</span>
                    <ProgressBar
                    completed={((analysis.smilingRate+analysis.eyeTrackingRate)/200) * 100}
                    />
                    <div className="mb-5">
                      <div style={{ width: '100%' }}>
                      <p>{analysis.smilingFeedback+ ', while' + analysis.eyeTrackingFeedback}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Face Rate */}
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Relaxation Rate :</span>
                  <ProgressBar
                    completed={analysis.faceExpressionsRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.faceExpressionFeedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
          {/* CV */}
          {/* <div className="rate-listings mb-5">
            <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis : </h3>
            {analysis && (
              <div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Arm Rate :</span>
                  <ProgressBar
                    completed={analysis.armPositionAnalysisRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.armPositionAnalysisFeedback}</p>
                    </div>
                  </div>
                </div>
                <div className="rate-listings mb-5">
                  <div>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Shoulders Rate :</span>
                    <ProgressBar
                      completed={analysis.shouldersPositionAnalysisRate}
                    />
                    <div className="mb-5">
                      <div style={{ width: '100%' }}>
                        <p>{analysis.shouldersPositionAnalysisFeedback}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Face Rate :</span>
                  <ProgressBar
                    completed={analysis.faceExpressionsRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.faceExpressionFeedback}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Happy Face Rate :</span>
                  <ProgressBar
                    completed={analysis.smilingRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.smilingFeedback}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Eyes Rate :</span>
                  <ProgressBar
                    completed={analysis.eyeTrackingRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.eyeTrackingFeedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
            }
          </div> */}

          {/* NLP */}
          <div className="rate-listings mb-5">
            <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />verbal communication analysis : </h3>
              <div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Sentiment Analysis Rate :</span>
                  <ProgressBar
                    completed={analysis.sentimentPercentage}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.sentimentStatus}</p>
                    </div>
                  </div>
                  
                </div>
                
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Readability Analysis Rate :</span>
                  <ProgressBar
                    completed={analysis.readabilityPercentage}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.readabilityNote}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>transcribed text:</span>
                <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{analysis.transcribedText}</p>
                    </div>
                  </div>
                </div>
                <div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Entities:</span>
                <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1em', display: 'inline' }}>Name:</p>
                    <span>  girgis magdy</span>
                    </div>
                    <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1em', display: 'inline' }}>Date:</p>
                    <span>  3 years</span>
                    </div>
                    <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1em', display: 'inline' }}>Skills:</p>
                    <span> Cloud Computing, Java, C#, Python/span</span>
                    </div>
                     
                    </div>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Suggested Jobs :</span>
                  <div className="mb-3">
                {analysis.sortedJobs.map((j, index) => (
                        <div key={index} style={{ width: '30%', marginBottom: '10px' }}>
                            <span>{j.jobTitle}</span>
                            <ProgressBar completed={j.similarityScore} />
                        </div>
                    ))}
                    
                  </div>
                </div>
              </div>
              </div>
            {/* )
          </div>
          // {/* <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Job answers result: 2/2</h3>
          // <div className="quiz-container">
          //   {loadingErrorMessage && <h3 id="results" className="text-danger">{loadingErrorMessage}</h3>}
          //   {!loadingErrorMessage && <>
          //     {questions?.map((question, i) => (

          //       <div className="row form-group" key={question.id}>
          //         <div className="col-md-12 mb-3 mb-md-0">
          //           <label className="text-black" htmlFor={question.id}>
          //             {question.questionBody}
          //           </label>
          //           {question?.answers?.length > 0 ?
          //             (question.answers.map(answer => (
          //               <div key={answer.id}>
          //                 <input 
          //                 // onChange={(e) => handleAnswer(e, question.id)}
          //                 // value={'4 Pillars'}
          //                 disabled={false}
          //                  type="radio" id={answer.id} name={question.id} checked={answer.chooseBody === '4'} value={answer.chooseBody} />{'  '}
          //                 <label htmlFor={answer.chooseBody}>{answer.chooseBody}</label>
          //               </div>
          //             ))
          //             )
          //             : (<input
          //               // onBlur={(e) => handleAnswer(e, question.id)}
          //               type="text"
          //               id={question.id}
          //               value={'4 Pillars'}
          //               disabled={false}
          //               className="form-control"
          //             // placeholder="Username"
          //             />)
          //           }
          //         </div>
          //       </div>

          //       // <div id={"quiz-"+i} key={question.id}>
          //       //   <div>{question.questionBody}</div>
          //       //   {question.answers.length > 0 ? 
          //       //   question.answers.map(answer => <div><input type="radio" id={answer.id} name={question.id} value={answer.chooseBody}/> <label for={answer.chooseBody}>{answer.chooseBody}</label></div> ) 
          //       //   : <input type="text"></input>}

          //       // </div>

          //     ))}
          //   </>}
          //   <br></br>
          //   <div id="results">2/2</div>
          // </div> */}
        </div>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Evaluation;

{
  /* <ProgressBar completed={60} /> */
}
