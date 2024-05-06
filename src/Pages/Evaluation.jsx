import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProgressBar from "@ramonak/react-progress-bar";
import '../index.css'

const Evaluation = () => {
  const loadingErrorMessage = null
  const questions = [
    {
        "id": 1,
        "questionBody": "How many Pillars for OOP?",
        "answers": [
            {
                "id": 1,
                "chooseBody": "4",
                "questionId": 1
            },
            {
                "id": 2,
                "chooseBody": "5",
                "questionId": 1
            },
            {
                "id": 3,
                "chooseBody": "1",
                "questionId": 1
            },
            {
                "id": 4,
                "chooseBody": "2",
                "questionId": 1
            }
        ]
    },
    {
        "id": 2,
        "questionBody": "How many Pillars for OOP",
        "answers": []
    }
]
  return (
    <div className="site-wrap">
      <Header pageTitle='Your interview evaluation'></Header>
      <section className="site-section">
        <div className="container">
          <div className="rate-listings mb-5">
            <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis :</h3>
            <div>
              <div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Arm Rate :</span>
              <ProgressBar
                completed={30}
                />
              <div className="mb-5">
                <div style={{ width: '100%' }}>
                <p>Excellent You kept your arm relaxed and open and this convey openness, confidence, and a willingness to engage. It suggests that you are receptive to the conversation and open to communication.</p>
                </div>
              </div>
            </div>
              <div className="rate-listings mb-5">
              <div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Shoulders Rate :</span>
                <ProgressBar
                  completed={60}
                />
                <div className="mb-5">
                  <div style={{ width: '100%' }}>
                    <p>Your excellent posture indicates confidence and professionalism, traits that are highly valued in this setting and your straight back posture not only showcases your confidence but also enhances your overall presence in the interview room.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Face Rate :</span>
              <ProgressBar
                completed={10}
              />
              <div className="mb-5">
                <div style={{ width: '100%' }}>
                  <p>Your excellent posture indicates confidence and professionalism, traits that are highly valued in this setting and your straight back posture not only showcases your confidence but also enhances your overall presence in the interview room.</p>
                </div>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Happy Face Rate :</span>
              <ProgressBar
                completed={60}
              />
              <div className="mb-5">
                <div style={{ width: '100%' }}>
                  <p>Your excellent posture indicates confidence and professionalism, traits that are highly valued in this setting and your straight back posture not only showcases your confidence but also enhances your overall presence in the interview room.</p>
                </div>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Eyes Rate :</span>
              <ProgressBar
                completed={50}
              />
              <div className="mb-5">
                <div style={{ width: '100%' }}>
                  <p>Your excellent posture indicates confidence and professionalism, traits that are highly valued in this setting and your straight back posture not only showcases your confidence but also enhances your overall presence in the interview room.</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Job answers result: 2/2</h3>
          <div className="quiz-container">
            {loadingErrorMessage && <h3 id="results" className="text-danger">{loadingErrorMessage}</h3>}
            {!loadingErrorMessage && <>
              {questions?.map((question, i) => (

                <div className="row form-group" key={question.id}>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor={question.id}>
                      {question.questionBody}
                    </label>
                    {question?.answers?.length > 0 ?
                      (question.answers.map(answer => (
                        <div key={answer.id}>
                          <input 
                          // onChange={(e) => handleAnswer(e, question.id)}
                          // value={'4 Pillars'}
                          disabled={false}
                           type="radio" id={answer.id} name={question.id} checked={answer.chooseBody === '4'} value={answer.chooseBody} />{'  '}
                          <label htmlFor={answer.chooseBody}>{answer.chooseBody}</label>
                        </div>
                      ))
                      )
                      : (<input
                        // onBlur={(e) => handleAnswer(e, question.id)}
                        type="text"
                        id={question.id}
                        value={'4 Pillars'}
                        disabled={false}
                        className="form-control"
                      // placeholder="Username"
                      />)
                    }
                  </div>
                </div>

                // <div id={"quiz-"+i} key={question.id}>
                //   <div>{question.questionBody}</div>
                //   {question.answers.length > 0 ? 
                //   question.answers.map(answer => <div><input type="radio" id={answer.id} name={question.id} value={answer.chooseBody}/> <label for={answer.chooseBody}>{answer.chooseBody}</label></div> ) 
                //   : <input type="text"></input>}

                // </div>

              ))}
            </>}
            <br></br>
            <div id="results">2/2</div>
          </div>
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
