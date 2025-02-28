import Appi from "../Components/Jobs/Appi"
import Application from "../Components/Application"
import { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import axios from "axios"
import { baseUrl } from "../Helpers"
import { useLocation } from "react-router-dom"


const CompanyApplications = () => {
  const location = useLocation();
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('')
  const [applications, setApplications] = useState([])

  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get("jobId");
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${baseUrl}/report/GetAllReports?token=${token}&jobId=${jobId}`)
      .then(response => {
        setApplications(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header pageTitle='Applications'></Header>
      <div>
        <section className="site-section" id="next">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="section-title mb-2">{applications.length} Job Application(s)</h2>
              </div>
            </div>
            <ul className="job-listings mb-5">
              {applications.map(a => <Application
                id={a.id} key={a.id}
                img={a.imagePath} Name={a.name}
                title={a.position} precentage={a.totalRate}
                type={a.type} date={a.interviewDateTime}></Application>)}
              <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <a href="job-single.html" />
                <div className="job-listing-logo">
                </div>
              </li>
            </ul>
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

export default CompanyApplications