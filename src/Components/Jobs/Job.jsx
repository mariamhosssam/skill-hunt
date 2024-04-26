
const Job = props => {
    const typeClass = props.type==='Full Time' ? 'badge-success' : 'badge-danger'
    return (
        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="job-single.html" />
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
          </div>
          {/* <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
  <span class="icon-room"></span> New York, New York
</div> */}
          <div className="job-listing-meta">
            <span className={'badge '+typeClass}>{props.type}</span>
          </div>
        </div>
      </li>
    )
}

export default Job