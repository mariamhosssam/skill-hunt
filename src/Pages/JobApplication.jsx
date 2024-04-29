const JobApplication = () => {
    return (
        <div>
        <Header pageTitle='Your Applications'></Header>
  <section className="site-section" id="next">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          {/* <h2 className="section-title mb-2">{Appi.AppsCount} Job Applications</h2> */}
        </div>
      </div>
      <ul className="job-listings mb-5">
      {/* {Appi.Apps.map(a => <Application img={a.image} Name={a.Name} title={a.title} precentage={a.precentage} type={a.type}></Application>)} */}
      </ul>
    </div>
  </section> 
  <div className="row pagination-wrap">
    <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
      <span>Showing 1-7 Of 43,167 Jobs</span>
    </div>
    <div className="col-md-6 text-center text-md-right">
      <div className="custom-pagination ml-auto">
        <a href="#" className="prev">Prev</a>
        <div className="d-inline-block">
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
        <a href="#" className="next">Next</a>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
        )
    }
    
    export default JobApplication