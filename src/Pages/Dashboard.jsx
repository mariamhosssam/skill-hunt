import Header from "../Components/Header"
// import Job from "../Components/Jobs/Job"
// import jobs from "../Components/Jobs/jobs"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../Helpers"
import ReportCard from "../Components/Interviews/ReportCard"
import { NavLink } from "react-router-dom"
const Dashboard = () => {
    const token = localStorage.getItem('token')
    let practiceInterviews = []
    let interviewsApplications = []
    // const [practiceInterviews, setPracticeInterviews] = useState([])
    // const [interviewsApplications, setInterviewsApplications] = useState([])
    const [displayPractice, setDisplayPractice] = useState(true)
    const [displayedInterviews, setDisplayedInterviews] = useState([])


    useEffect(() => {
        console.log(displayPractice)
        if (displayPractice) {
            if (practiceInterviews.length === 0) {
                axios.get(`${baseUrl}/Report/GetReportsPractice?token=${token}`)
                    .then(response => {
                        console.log(response)
                        practiceInterviews = response.data
                        setDisplayedInterviews(practiceInterviews)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                setDisplayedInterviews(practiceInterviews)
            }

        } else {
            if (interviewsApplications.length === 0) {
                axios.get(`${baseUrl}/Report/GetReportsApply?token=${token}`)
                    .then(response => {
                        console.log(response)
                        interviewsApplications = response.data
                        setDisplayedInterviews(interviewsApplications)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                setDisplayedInterviews(interviewsApplications)
            }
        }
    }, [displayPractice])

    const handleDisplayType = (event) => {
        const value = Number(event.target.value)
        setDisplayPractice(Boolean(value))
    }

    return (
        //bta3t el user (dashbord bas lel applications)
        <div>
            <Header pageTitle='Your Applications'></Header>
            <section className="site-section" id="next">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="dropdown">
                            <select className="form-control" onChange={handleDisplayType}>
                                <option value={1}>Practice Reports</option>
                                <option value={0}>Application Reports</option>
                            </select>
                        </div>
                        <div className="col-md-7 text-center">
                            <h2 className="section-title mb-2">{displayedInterviews.length}  Job Applications</h2>
                        </div>
                    </div>
                    <ul className="job-listings mb-5">
                        {displayedInterviews?.map(i => <ReportCard
                            key={i.id} id={i.id} 
                            img='images/applicant.jpg'
                            // img={i.imagePath ?? `images/job_logo_${(Math.floor(Math.random() * 5) + 1).toString()}.jpg`
                             title={i.jobTitle} date={i.date}
                             totalRate={i.totalRate} isPractice={displayPractice}></ReportCard>)}
                    </ul>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard