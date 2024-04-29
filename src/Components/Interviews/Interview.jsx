const Interview = (props) => {
    const precentageClass = props.precentage >= 50 ? 'badge-success' : 'badge-danger'
    return (
        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
    <a href="job-single.html" />
    {/* Removed the <div> containing the image */}
    <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4" style={{ width: '80%' }}>
        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
            <h2>{'#interview '+props.Num}</h2>
            <strong>{props.Date}</strong>
        </div>
        <div className="job-listing-meta">
            <span className={'badge '+precentageClass}>{ '%' + props.precentage}</span>
        </div>
    </div>
</li>


    //     <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
    //     <a href="job-single.html" />
    //     <div className="job-listing-logo">
    //         <img src={props.img} alt="Image" className="img-fluid" />
    //     </div>
    //     <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
    //         <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
    //             <h2>{'#interview '+props.Num}</h2>
    //             <strong>{props.Date}</strong>
    //         </div>
    //         <div className="job-listing-meta">
    //         <span className={'badge '+precentageClass}>{ '%' + props.precentage}</span>
    //         </div>
    //     </div>
    // </li>
    )
}
export default Interview