

import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../Helpers";

const JobSearch = (props) => {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${baseUrl}/Job/FilterJobs`, {
        params: {
          title: title,
          region: region,
          type: type,
          isPractice: props.isPractice
        }
      })
      .then((response) => {
      //  console.log(response);
        props.handleJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  };

  return (
    <section className="home-section section-hero overlay bg-image" style={{ backgroundImage: 'url("images/hero_1.jpg")' }} id="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="mb-5 text-center">
              <h1 className="text-white font-weight-bold">
                The Easiest Way To Get Your Dream Job
              </h1>
            </div>
            <form className="search-jobs-form">
              <div className="row mb-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Job title, Company..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {!props.isPractice && (
                  <>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select
                    className=" form-control form-control-lg"
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option selected disabled={true}>Select Job region</option>
                    <option value={''}>Any</option>
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Giza</option>
                    <option>Aswan</option>
                    <option>Luxor</option>
                    <option>Sharm El Sheikh</option>
                    <option>Hurghada</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0 ">
                  <select
                    className=" form-control form-control-lg"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected disabled={true}>Select Job Type</option>
                    <option value={''}>Any</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                  </select>
                </div>
                  </>
                )}
                
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary btn-lg btn-block text-white btn-search"
                  >
                    <span className="icon-search icon mr-2" />
                    Search Job
                  </button>
                </div>
              </div>
              {/* <div className="row">
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
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <a href="#next" className="scroll-button smoothscroll">
        <span className=" icon-keyboard_arrow_down" />
      </a>
    </section>
  );
};

export default JobSearch;