
import React from "react";
import Job from "./Job";

const JobListing = (props) => {
  
  return (
    <section className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          {!props.isApplication && (
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2"> Jobs Listed</h2>
            </div>
          )}
        </div>
        <ul className="job-listings mb-5">
          {props.thejobs?.map((job, index) => (
            <Job
              key={job.id}
              id={job.id}
              img={job.imgPath ?? `images/job_logo_${(Math.floor(Math.random() * 5) + 1).toString()}.jpg`}//{job.imgPath}
              title={job.title}
              company={job.companyName}
              type={job.type}
              region={job.region}
              isApplication={props.isApplication}
            />
          ))}
        </ul>
        {/* <div className="row pagination-wrap">
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <span>Showing 1-7 Of {jobs.jobsCount} Jobs</span>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <div className="custom-pagination ml-auto">
              <a href="#prev" className="prev">
                Prev
              </a>
              <div className="d-inline-block">
                <a href="#1" className="active">
                  1
                </a>
                <a href="#2">2</a>
                <a href="#3">3</a>
                <a href="#4">4</a>
              </div>
              <a href="#next" className="next">
                Next
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default JobListing;

