

import React from "react";
import { Link } from "react-router-dom";

const ReportCard = (props) => {
  const typeClass = props.type?.toLowerCase() === "full time" ? "badge-success" : "badge-danger";

  return (
    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
     
      <Link to={`/JobDetails?jobId=${props.id}`} />
      
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
          <strong>{props.region}</strong>
        </div>
        <div className="job-listing-meta">
          <div className={"badge " + typeClass}>{props.type}</div>
          <div className={"badge " + typeClass}>{props.date}</div>
        </div>
      </div>
    </li>
  );
};

export default ReportCard;
