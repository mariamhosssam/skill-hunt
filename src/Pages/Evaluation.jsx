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
  const [bodyLanguage, setBodyLanguage] = useState(undefined)
  const [result, setResult] = useState(0)
  const[totalBodyLanguageRate, settotalBodyLanguageRate] = useState(83)

  useEffect(() => {
    axios.get(`${baseUrl}/report/GetReport?token=${token}&reportId=${reportId}`)
      .then(response => {
        console.log(response.data)
        setAnalysis(response.data)
        setBodyLanguage(response.data.bodyLanguageAnalysisResult)
        settotalBodyLanguageRate(response.data.totalBodyLanguageRate)
        setResult(response.data.questions.filter(q => q.isCorrect).length)
      }).catch((error) => {
        console.log(error);
        
        })
  }, [])

  return (
    <div className="site-wrap">
      <Header pageTitle='Interview evaluation' rate={totalBodyLanguageRate}></Header>
      <section className="site-section">
        {analysis && (
          <div className="container">
             <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Personal Information: </h3>
              <div className="h5 d-flex align-items-center mb-4" >Name: {analysis?.applicant.name}</div>
              <div className="h5 d-flex align-items-center mb-4">Email: {analysis?.applicant.email}</div>
              <div className="h5 d-flex align-items-center mb-4">Position: {analysis?.applicant.position}</div>
          {/* EDITIED CV */}
          <div className="rate-listings mb-5">
            <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis : </h3>
              <div>
                <div>
                  {/* Shoulders - Arm Rates */}
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Openness Rate :</span>
                  <ProgressBar
                    completed={((bodyLanguage.armPositionAnalysisRate+bodyLanguage.shouldersPositionAnalysisRate)/200) * 100}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                    <p>{bodyLanguage.armPositionAnalysisFeedback + ', while' + bodyLanguage.shouldersPositionAnalysisFeedback}</p>
                    </div>
                  </div>
                </div>
                <div className="rate-listings mb-5">
                  <div>
                    {/* HappyFace - Eyes Rates*/}
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Confidence Rate :</span>
                    <ProgressBar
                    completed={((bodyLanguage.smilingRate+bodyLanguage.eyeTrackingRate)/200) * 100}
                    />
                    <div className="mb-5">
                      <div style={{ width: '100%' }}>
                      <p>{bodyLanguage.smilingFeedback+ ', while' + bodyLanguage.eyeTrackingFeedback}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Face Rate */}
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Relaxation Rate :</span>
                  <ProgressBar
                    completed={bodyLanguage.faceExpressionsRate}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{bodyLanguage.faceExpressionFeedback}</p>
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
                    completed={bodyLanguage.sentimentPercentage}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{bodyLanguage.sentimentStatus}</p>
                    </div>
                  </div>
                  
                </div>
                
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Readability Analysis Rate :</span>
                  <ProgressBar
                    completed={bodyLanguage.readabilityPercentage}
                  />
                  <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{bodyLanguage.readabilityNote}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>transcribed text:</span>
                <div className="mb-5">
                    <div style={{ width: '100%' }}>
                      <p>{bodyLanguage.transcribedText}</p>
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
                {bodyLanguage.sortedJobs?.map((j, index) => (
                        <div key={index} style={{ width: '30%', marginBottom: '10px' }}>
                            <span>{j.jobTitle}</span>
                            <ProgressBar completed={j.similarityScore} />
                        </div>
                    ))}
                    
                  </div>
                </div>
              </div>
              </div>
           {/* //technical questions */}
           <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Job answers result: {result}/{analysis.questions.length}</h3>
          <div className="quiz-container">
              {analysis.questions?.map((question, i) => (

                <div className="row form-group" key={question.id}>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor={question.id}>
                      {question.questionBody}
                    </label>
                   {question.answers.map(answer => (
                        <div key={answer.id} className={answer.chooseBody == question.userAnswer? ( question.isCorrect ?  ' alert-success': ' alert-danger'): ''}>
                          <input 
                          disabled={false}
                           type="radio" id={answer.id} name={question.id} checked={answer.chooseBody == question.userAnswer} value={answer.chooseBody} />{'  '}
                          <label htmlFor={answer.chooseBody}>{answer.chooseBody}</label>
                        </div>
                      ))}
                  </div>
                </div>

              ))}
          </div>
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
