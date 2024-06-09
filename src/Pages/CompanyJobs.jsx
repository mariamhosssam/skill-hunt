import Appi from "../Components/Jobs/Appi"
import Application from "../Components/Application"
import { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import axios from "axios"
import { baseUrl } from "../Helpers"
import { useLocation } from "react-router-dom"
import JobListing from "../Components/Jobs/JobListing"


const CompanyJobs = () => {
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('')
  const token = localStorage.getItem('token');
  const [jobs, setJobs] = useState({})


    useEffect(() => {
       axios.get(`${baseUrl}/job/GetJobsByCompany?token=${token}`)
       .then(response => {
        setJobs(response.data)
       })
       .catch(err => console.log(err))
    },[])

    return (
       <div>
        <Header pageTitle='employees Applications'></Header>
        <div>
  <section className="site-section" id="next">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          <h2 className="section-title mb-2">{jobs.jobsCount} Job(s) Posted</h2>
        </div>
      </div>
      <JobListing isApplication={true} thejobs={jobs.jobs}></JobListing>
    </div>
  </section>   
</div>

  {/* <div>   
  <section className="site-section" id="next">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          <h2 className="section-title mb-2">{Appi.AppsCount} Job Applications</h2>
        </div>
      </div>
      <ul className="job-listings mb-5">
      {Appi.Apps.map(a => <Application img={a.image} Name={a.Name} title={a.title} precentage={a.precentage} type={a.type}></Application>)}
      </ul>
    </div>
  </section> 
  <div className="row pagination-wrap">
    <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
      <span>Showing 1-7 Of 43,167 Jobs</span>
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
  </div> */}
  <Footer></Footer>
</div>

    )
}

export default CompanyJobs