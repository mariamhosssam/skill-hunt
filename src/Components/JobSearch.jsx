import axios from "axios";

const JobSearch = (props) => {
  const hadleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://localhost:44322/api/Job/GetJobs?token=${localStorage.getItem('token')}`)
    // axios.get(`https://localhost:44322/api/Job/GetJobs`,{
    //   headers:{
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   }
    // })
    .then(data => {

      console.log(data)
      props.handleJobs(data.data)
    })
    .catch(error => {console.log(error)})
  }
    return (
        <section
          className="home-section section-hero overlay bg-image"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">
                    The Easiest Way To Get Your Dream Job
                  </h1>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p> */}
                </div>
                <form method="post" className="search-jobs-form">
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Job title, Company..."
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                      {/* <select
                        className="selectpicker"
                        data-style="btn-white btn-lg"
                        data-width="100%"
                        data-live-search="true"
                        title="Select Region"
                      > */}
                      <select className="select-input" >
                        <option>Anywhere</option>
                        <option>Cairo</option>
                        <option>Alexandria</option>
                        <option>Giza</option>
                        <option>Aswan</option>
                        <option>Luxor</option>
                        <option>Sharm El Sheikh</option>
                        <option>Hurghada</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <select
                        className="selectpicker"
                        data-style="btn-white btn-lg"
                        data-width="100%"
                        data-live-search="true"
                        title="Select Job Type"
                      >
                        <option>Part Time</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <button
                      onClick={hadleSubmit}
                        type="submit"
                        className="btn btn-primary btn-lg btn-block text-white btn-search"
                      >
                        <span className="icon-search icon mr-2" />
                        Search Job
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 popular-keywords">
                      <h3>Trending Keywords:</h3>
                      <ul className="keywords list-unstyled m-0 p-0">
                        <li>
                          <a href="#">UI Designer</a>
                        </li>
                        <li>
                          <a href="#">Python</a>
                        </li>
                        <li>
                          <a href="#">Developer</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <a href="#next" className="scroll-button smoothscroll">
            <span className=" icon-keyboard_arrow_down" />
          </a>
        </section>
    )
}

export default JobSearch