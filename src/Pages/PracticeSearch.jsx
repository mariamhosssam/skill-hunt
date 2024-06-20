import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import JobSearch from "../Components/JobSearch";
import JobListing from "../Components/Jobs/JobListing";
import axios from "axios";
import { baseUrl } from "../Helpers";

const PracticeSearch = () => {
  const [thejobs, setJob] = useState([])
  const token = localStorage.getItem('token')


  const receiveJobs = (thejobs) => {
    setJob(thejobs)
  }

  useEffect(() => {
    axios.get(`${baseUrl}/Job/GetJobs?token=${token}&isPractice=${true}`)
      .then(response => (
          setJob(response.data)
      )
      )
      .catch(err => console.log(err))
  }, [])
 
  return (

    <div className="site-wrap">
    <Header title="SkillHunt"></Header>
    {/* HOME */}
    <JobSearch isPractice={true} handleJobs={receiveJobs}></JobSearch>

      <JobListing thejobs={thejobs}></JobListing>
      <section
        className="py-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center">

          </div>
        </div>
      </section>
      {/* <section className="bg-light pt-5 testimony-full">
        <div className="owl-carousel single-carousel">

        </div>
      </section> */}
      <section
        className="pt-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
      >

      </section>
         <Footer />
      </div>
  );
};

export default PracticeSearch;
