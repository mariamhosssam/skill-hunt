import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import JobSearch from "../Components/JobSearch";
import JobListing from "../Components/Jobs/JobListing";
import PartnerCompaniesListing from "../Components/PartnerCompaniesListing";
import SiteStates from "../Components/SiteStates";
import axios from "axios";
import { baseUrl } from "../Helpers";
import jobs from "../Components/Jobs/jobs";

const Index = () => {
  const [thejobs, setJob] = useState([])
  const token = localStorage.getItem('token')
  const [state, setState] = useState({})


  const receiveJobs = (thejobs) => {
    // setJob(thejobs)
  }

  useEffect(() => {
    axios.get(`${baseUrl}/Job/Site Stats`)
    .then(response => {
      setState(response.data);
    }
    )
    .catch(err => console.log(err))
    
    axios.get(`${baseUrl}/Job/GetJobs?token=${token}`)
      .then(response => (
        console.log(response),
          setJob(response.data)
      )
      )
      .catch(err => console.log(err))
  }, [])
 
  return (

    <div className="site-wrap">
    <Header title="SkillHunt"></Header>
    {/* HOME */}
    <JobSearch handleJobs={receiveJobs}></JobSearch>
    <SiteStates state={state}></SiteStates>

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
      <PartnerCompaniesListing></PartnerCompaniesListing>
      <section className="bg-light pt-5 testimony-full">
        <div className="owl-carousel single-carousel">

        </div>
      </section>
      <section
        className="pt-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
      >

      </section>
         <Footer />
      </div>
  );
};

export default Index;
