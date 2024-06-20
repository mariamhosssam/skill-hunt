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
  const [result, setResult] = useState(0)
  useEffect(() => {
    axios.get(`${baseUrl}/report/GetReport?token=${token}&reportId=${reportId}`)
      .then(response => {
        console.log(response.data)
        setAnalysis(response.data)
        setResult(response.data.questions.filter(q => q.isCorrect).length)
      })
  }, [])
 
  return (
    <div className="site-wrap">
      <Header pageTitle='Interview evaluation' rate={90}></Header>
      <section className="site-section">
        <div className="container">
          {analysis && (
            <>
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Personal Information: </h3>
              <div className="h5 d-flex align-items-center mb-4" >Name: {analysis?.applicant.name}</div>
              <div className="h5 d-flex align-items-center mb-4">Email: {analysis?.applicant.email}</div>
              <div className="h5 d-flex align-items-center mb-4">Position: {analysis?.applicant.position}</div>
              <div className="rate-listings mb-5">
                <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis: </h3>
                {analysis && (
                  <div>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Arm Rate :</span>
                      <ProgressBar
                        completed={analysis.bodyLanguageAnalysisResult.armPositionAnalysisRate}
                      />
                      <div className="mb-5">
                        <div style={{ width: '100%' }}>
                          <p>{analysis.bodyLanguageAnalysisResult.armPositionAnalysisFeedback}</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-listings mb-5">
                      <div>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Shoulders Rate :</span>
                        <ProgressBar
                          completed={analysis.bodyLanguageAnalysisResult.shouldersPositionAnalysisRate}
                        />
                        <div className="mb-5">
                          <div style={{ width: '100%' }}>
                            <p>{analysis.bodyLanguageAnalysisResult.shouldersPositionAnalysisFeedback}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Face Rate :</span>
                      <ProgressBar
                        completed={analysis.bodyLanguageAnalysisResult.faceExpressionsRate}
                      />
                      <div className="mb-5">
                        <div style={{ width: '100%' }}>
                          <p>{analysis.bodyLanguageAnalysisResult.faceExpressionFeedback}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Happy Face Rate :</span>
                      <ProgressBar
                        completed={analysis.bodyLanguageAnalysisResult.smilingRate}
                      />
                      <div className="mb-5">
                        <div style={{ width: '100%' }}>
                          <p>{analysis.bodyLanguageAnalysisResult.smilingFeedback}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Eyes Rate :</span>
                      <ProgressBar
                        completed={analysis.bodyLanguageAnalysisResult.eyeTrackingRate}
                      />
                      <div className="mb-5">
                        <div style={{ width: '100%' }}>
                          <p>{analysis.bodyLanguageAnalysisResult.eyeTrackingFeedback}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </div>


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
            </>
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Evaluation;

{
  /* <ProgressBar completed={60} /> */
}
