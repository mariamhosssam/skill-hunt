import Header from "../Components/Header"
import Job from "../Components/Jobs/Job"
import jobs from "../Components/Jobs/jobs"
import Footer from "../Components/Footer"
const JobApplication = () => {
    return (
      //bta3t el user (dashbord bas lel applications)
        <div>
        <Header pageTitle='Your Applications'></Header>
  <section className="site-section" id="next">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          <h2 className="section-title mb-2">{jobs.jobsCount}  Job Applications</h2>
        </div>
      </div>
      <ul className="job-listings mb-5">
      {jobs.jobs.map(j => <Job img={j.image} title={j.title} company={j.company} type={j.type}></Job>)}
      </ul>
    </div>
  </section> 
  <div className="row pagination-wrap">
    <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
      <span>Showing 1-7 Of {jobs.jobsCount} Job Applications</span>
    </div>
    <div className="col-md-6 text-center text-md-right">
      <div className="custom-pagination ml-auto">
        <a href="#" className="prev">Prev</a>
        <div className="d-inline-block">
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
        <a href="#" className="next">Next</a>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
        )
    }
    
    export default JobApplication