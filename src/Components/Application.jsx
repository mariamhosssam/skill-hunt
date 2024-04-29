const Application = props => {
    const typeClass = props.type==='Full Time' ? 'badge-success' : 'badge-danger'
    const precentageClass = props.precentage >= 50 ? 'badge-success' : 'badge-danger'
    return (
     <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
  <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
  <img
            src={props.img}
            alt="Free Website Template by Free-Template.co"
            className="img-fluid"
          />
  <h2>{props.Name}</h2>
  <strong>{props.title}</strong>
  </div>
  <div className="job-listing-meta">
                <span className={'badge '+precentageClass}>{ '%' + props.precentage}</span>
                {/* <span className={`badge ${percentageClass}`}>Percentage</span> */}

              </div>
  <div className="job-listing-meta">
  <span className={'badge '+typeClass}>{props.type}</span>
  </div>
</div>

        )
    }
    
    export default Application
    