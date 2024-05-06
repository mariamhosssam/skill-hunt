const SiteStates = (props) => {
 return (
    <section
          className="py-5 bg-image overlay-primary fixed overlay"
          id="next"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="section-title mb-2 text-white">
                  Skillhunt Site Stats
                </h2>
                <p className="lead text-white">
                  {" "}
                  SkillHunt are like windows into the job market, where the
                  statistics tell the story of opportunities, talent, and the
                  ever-evolving landscape of employment.
                </p>
              </div>
            </div>
            <div className="row pb-0 block__19738 section-counter">
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number={props?.state?.candidates ?? 0}>
                  {props?.state?.candidates ?? 0}
                  </strong>
                </div>
                <span className="caption">Candidates</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number={props?.state?.jobPosted ?? 0}>
                  {props?.state?.jobPosted ?? 0}
                  </strong>
                </div>
                <span className="caption">Jobs Posted</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number={props?.state?.applications ?? 0}>
                  {props?.state?.applications ?? 0}
                  </strong>
                </div>
                <span className="caption">Jobs Filled</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number={props?.state?.companies ?? 0}>
                  {props?.state?.companies ?? 0}
                  </strong>
                </div>
                <span className="caption">Companies</span>
              </div>
            </div>
          </div>
        </section>
 )
}

export default SiteStates