const Interview = (props) => {
    return (
        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="job-single.html" />
        <div className="job-listing-logo">
            <img src={props.img} alt="Image" className="img-fluid" />
        </div>
        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>#interview 603</h2>
                <strong>7/11/2023</strong>
            </div>
            <div className="job-listing-meta">
                <span className="badge badge-danger">%45</span>
            </div>
        </div>
    </li>
    )
}