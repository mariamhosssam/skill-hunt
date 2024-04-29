import Header from "../Header"
import Footer from "../Footer"
import inter from "./inter"
import Interview from "./Interview"
import { useEffect } from "react"
const InterviewListing = props => {

    useEffect(() => {
        // here we will receive jobs from backend instead of importing them
        // console.log('jobs:', jobs.jobs)
    },[])
    return (
      <div>
        <section className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">{inter.interviewscount} virtual interviews</h2>
            </div>
          </div>
          <ul className="job-listings mb-5">
            {inter.interviews.map(j => <Interview img={j.img} Num={j.Num} Date={j.Date} precentage={j.precentage}></Interview>)}
            {/* <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
              <a href="job-single.html" />
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_2.jpg"
                  alt="Free Website Template by Free-Template.co"
                  className="img-fluid"
                />
              </div>
              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Digital Marketing Director</h2>
                  <strong>Sprint</strong>
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
                </div>
              </div>
            </li> */}
          </ul>
          <div className="row pagination-wrap">
            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
              <span>Showing 1-7 Of {inter.interviewscount} virtual interviews</span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="custom-pagination ml-auto">
                <a href="#" className="prev">
                  Prev
                </a>
                <div className="d-inline-block">
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                </div>
                <a href="#" className="next">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default InterviewListing