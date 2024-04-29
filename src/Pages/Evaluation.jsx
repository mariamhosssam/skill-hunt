import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProgressBar from "@ramonak/react-progress-bar";
import '../index.css'

const Evaluation = () => {
  return (  
    <div className="site-wrap">
            <Header pageTitle='Your interview evaluation'></Header>
      <section className="site-section">
        <div className="container">
          <div className="rate-listings mb-5">
          <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Nonverbal communication analysis :</h3>
            <div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Arm Rate :</span>
              <ProgressBar
                completed={30}
              />
         <div class="mb-5">
              <div style={{ width: '100%' }}>
  <p>Excellent You kept your arm relaxed and open and this convey openness, confidence, and a willingness to engage. It suggests that you are receptive to the conversation and open to communication.</p>
</div>
            </div>
            </div>
            </div>

            <div>
            <div className="rate-listings mb-5">
            <div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Shoulders Rate :</span>
              <ProgressBar
                completed={60}
              />
         <div class="mb-5">
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
         <div class="mb-5">
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
         <div class="mb-5">
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
         <div class="mb-5">
              <div style={{ width: '100%' }}>
  <p>Your excellent posture indicates confidence and professionalism, traits that are highly valued in this setting and your straight back posture not only showcases your confidence but also enhances your overall presence in the interview room.</p>
</div>
            </div>
            </div>
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
