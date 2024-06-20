

import React from "react";
import { Link } from "react-router-dom";

const Job = (props) => {
  const typeClass = props.type?.toLowerCase() === "full time" ? "badge-success" : "badge-danger";

  return (
    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
     
     {props.isApplication ? ( <Link to={`/CompanyApplications?jobId=${props.id}`} />) 
     : ( <Link to={`/JobDetails?jobId=${props.id}`} />)}
     
      
      <div className="job-listing-logo">
        <img
          src={props.img}
          alt="Free Website Template by Free-Template.co"
          className="img-fluid"
        />
      </div>
      <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
          <h2>{props.title}</h2>
          <strong>{props.company}</strong>
          <div>{props.region}</div>
        </div>
        <div className="job-listing-meta">
          <span className={"badge " + typeClass}>{props.type}</span>
        </div>
      </div>
    </li>
  );
};

export default Job;
