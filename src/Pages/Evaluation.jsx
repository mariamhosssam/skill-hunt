import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProgressBar from "@ramonak/react-progress-bar";
import '../index.css'

const Evaluation = () => {
  return (
    <div className="site-wrap">
      <Header></Header>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">
                Evaluation to your interview
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="container">
          <div className="rate-listings mb-5">
            <div>
              <span>communication skill:</span>
              <ProgressBar
                completed={60}
              />
            </div>
            <div>
              <span>communication skill:</span>
              <ProgressBar
                completed={30}
              />
            </div>
            <div>
              <span>communication skill:</span>
              <ProgressBar
                completed={80}
              />
            </div>
            <div>
              <span>communication skill:</span>
              <ProgressBar
                completed={90}
              />
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
