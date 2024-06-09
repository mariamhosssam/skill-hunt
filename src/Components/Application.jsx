import { Link } from "react-router-dom"

const Application = props => {
  const typeClass = props.type === 'Full Time' ? 'badge-success' : 'badge-danger'
  const precentageClass = props.precentage >= 50 ? 'badge-success' : 'badge-danger'
  return (
    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
      <Link to={`/Evaluation?id=${props.id}`} />
      <div className="job-listing-logo">
        <img
          src={props.img ?? 'images/job_logo_1.jpg'}
          alt="Free Website Template by Free-Template.co"
          className="img-fluid"
        />
      </div>
      <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
          <h2>{props.Name}</h2>
          <strong>{props.title}</strong>
          <div>submission date: {props.date}</div>
        </div>
        {/* <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
  <span class="icon-room"></span> New York, New York
</div> */}

        <div className="job-listing-meta">

          <span className={'badge ' + precentageClass}>{'%' + props.precentage}</span>
          {/* <span className={`badge ${percentageClass}`}>Percentage</span> */}

        </div>
        <div className="job-listing-meta">
          <span className={'badge ' + typeClass}>{props.type}</span>
        </div>
      </div>
    </li>




  )
}

export default Application
