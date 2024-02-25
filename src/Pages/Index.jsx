import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import JobSearch from "../Components/JobSearch";
import JobListing from "../Components/Jobs/JobListing";
import PartnerCompaniesListing from "../Components/PartnerCompaniesListing";
import SiteStates from "../Components/SiteStates";

const Index = () => {
  const [jobs, setJob] = useState([])

  const receiveJobs = (jobs) => {
    setJob(jobs)
  }
  
  return ( 

      <div className="site-wrap">
        <Header title="SkillHunt" signedIn={true}></Header>
        {/* HOME */}
        <JobSearch handleJobs={receiveJobs}></JobSearch>
        <SiteStates></SiteStates>
       <JobListing jobs={jobs}></JobListing>
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
