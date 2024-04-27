// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../Header";
// import Footer from "../Footer";


// const JobDetails = () => {

//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const jobId = searchParams.get("id");

//     return (


// <div>
//   <div id="overlayer" />
//   <div className="loader">

    
//     <div className="spinner-border text-primary" role="status">
//       <span className="sr-only">Loading...</span>
//     </div>


//   </div>
//   <div className="site-wrap">
//     <div className="site-mobile-menu site-navbar-target">
//       <div className="site-mobile-menu-header">
//         <div className="site-mobile-menu-close mt-3">
//           <span className="icon-close2 js-menu-toggle" />
//         </div>
//       </div>
//       <div className="site-mobile-menu-body" />
//     </div> {/* .site-mobile-menu */}

//      <Header title="SkillHunt" signedIn={true}></Header>
//     {/* HOME */}
//     <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-7">
//             <h1 className="text-white font-weight-bold">Software Engineer</h1>
//             <div className="custom-breadcrumbs">
//               <a href="#">Home</a> <span className="mx-2 slash">/</span>
//               <a href="#">Job</a> <span className="mx-2 slash">/</span>
//               <span className="text-white"><strong>Software Engineer</strong></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="site-section">
//       <div className="container">
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-8 mb-4 mb-lg-0">
//             <div className="d-flex align-items-center">
//               <div className="border p-2 d-inline-block mr-3 rounded">
//                 <img src="images/job_logo_5.jpg" alt="Image" />
//               </div>
//               <div>
//                 <h2>Software Engineer</h2>
//                 <div>
//                   <span className="ml-0 mr-2 mb-2"><span className="icon-briefcase mr-2" />Puma</span>
//                   <span className="m-2"><span className="icon-room mr-2" />New York City</span>
//                   <span className="m-2"><span className="icon-clock-o mr-2" /><span className="text-primary">Full Time</span></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             {/* <div class="row">
//         <div class="col-6">
//           <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
//         </div>
//         <div class="col-6">
//           <a href="applyForJob-techQ.html" class="btn btn-block btn-primary btn-md">Apply Now</a>
//         </div>
//       </div> */}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="mb-5">
//               <figure className="mb-5"><img src="images/job_single_img_1.jpg" alt="Image" className="img-fluid rounded" /></figure>
//               <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Job Description</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.</p>
//               <p>Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
//             </div>
//             <div className="mb-5">
//               <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3" />Responsibilities</h3>
//               <ul className="list-unstyled m-0 p-0">
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Necessitatibus quibusdam facilis</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Commodi quae ipsum quas est itaque</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
//               </ul>
//             </div>
//             <div className="mb-5">
//               <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-book mr-3" />Education + Experience</h3>
//               <ul className="list-unstyled m-0 p-0">
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Necessitatibus quibusdam facilis</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Commodi quae ipsum quas est itaque</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
//               </ul>
//             </div>
//             <div className="mb-5">
//               <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-turned_in mr-3" />Other Benifits</h3>
//               <ul className="list-unstyled m-0 p-0">
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Necessitatibus quibusdam facilis</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Commodi quae ipsum quas est itaque</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
//                 <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted" /><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
//               </ul>
//             </div>
//             <div className="row mb-5">
//               {/* <div class="col-6">
//           <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
//         </div> */}
//               <div className="col-6">
//                 <a href="applyForJob-techQ.html" className="btn btn-block btn-primary btn-md">Apply Now</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="bg-light p-3 border rounded mb-4">
//               <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
//               <ul className="list-unstyled pl-3 mb-0">
//                 <li className="mb-2"><strong className="text-black">Published on:</strong> April 14, 2019</li>
//                 <li className="mb-2"><strong className="text-black">Vacancy:</strong> 20</li>
//                 <li className="mb-2"><strong className="text-black">Employment Status:</strong> Full-time</li>
//                 <li className="mb-2"><strong className="text-black">Experience:</strong> 2 to 3 year(s)</li>
//                 <li className="mb-2"><strong className="text-black">Job Location:</strong> New ork City</li>
//                 <li className="mb-2"><strong className="text-black">Salary:</strong> $60k - $100k</li>
//                 <li className="mb-2"><strong className="text-black">Gender:</strong> Any</li>
//                 <li className="mb-2"><strong className="text-black">Application Deadline:</strong> April 28, 2019</li>
//               </ul>
//             </div>
//             <div className="bg-light p-3 border rounded">
//               <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
//               <div className="px-3">
//                 <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-facebook" /></a>
//                 <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-twitter" /></a>
//                 <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-linkedin" /></a>
//                 <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-pinterest" /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
    

//     <Footer />
    
//   </div>
// </div>

//     );

// }
// export default JobDetails;



import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const JobDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get("id");

  const [jobDetails, setJobDetails] = useState({

    id:0,
    jobTitle: "",
    jobRegion: "",
    jobType: "",
    jobDescription: "",
    questions: null,
    isShared: true,
    imgPath: "",
    image: null,
    companyId: 0,
    companyName: ""
  
  });

  useEffect(() => {
    // Fetch job details using the jobId
    if (jobId) {
      fetchJobDetails(jobId);
    }
  }, jobDetails);

  const fetchJobDetails = async (jobId) => {



    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      // Make API call to fetch job details
      const response = await fetch (`https://localhost:7176/api/Job/GetJob${jobId}?token=${token}`);
      
      if (response.ok) {
        const data = await response.json();
        setJobDetails(data); 
      } 
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  return (
  
<div>
  <div id="overlayer" />
  <div className="loader">

    
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>


  </div>
  <div className="site-wrap">
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle" />
        </div>
      </div>
      <div className="site-mobile-menu-body" />
    </div> {/* .site-mobile-menu */}

     <Header title="SkillHunt" signedIn={true}></Header>
    {/* HOME */}
    <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-white font-weight-bold">{jobDetails.jobTitle}</h1>
            <div className="custom-breadcrumbs">
              <a href="#">Home</a> <span className="mx-2 slash">/</span>
              <a href="#">Job</a> <span className="mx-2 slash">/</span>
              <span className="text-white"><strong>{jobDetails.jobTitle}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="site-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
              <div className="border p-2 d-inline-block mr-3 rounded">
                <img src="images/job_logo_5.jpg" alt="Image" />
              </div>
              <div>
                <h2>{jobDetails.jobTitle}</h2>
                <div>
                  <span className="ml-0 mr-2 mb-2"><span className="icon-briefcase mr-2" />{jobDetails.companyName}</span>
                  <span className="m-2"><span className="icon-room mr-2" />{jobDetails.jobRegion}</span>
                  <span className="m-2"><span className="icon-clock-o mr-2" /><span className="text-primary">{jobDetails.jobType}</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div class="row">
        <div class="col-6">
          <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
        </div>
        <div class="col-6">
          <a href="applyForJob-techQ.html" class="btn btn-block btn-primary btn-md">Apply Now</a>
        </div>
      </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <figure className="mb-5"><img src="images/job_single_img_1.jpg" alt="Image" className="img-fluid rounded" /></figure>
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3" />Job Description</h3>
              <p>{jobDetails.jobDescription}</p>
              
            </div>
            
           
            <div className="row mb-5">
              {/* <div class="col-6">
          <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
        </div> */}
              <div className="col-6">
                <a href="applyForJob-techQ.html" className="btn btn-block btn-primary btn-md">Apply Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light p-3 border rounded mb-4">
              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
              <ul className="list-unstyled pl-3 mb-0">
                <li className="mb-2"><strong className="text-black">Published on:</strong> may 15, 2024</li>
                <li className="mb-2"><strong className="text-black">Vacancy:</strong> 20</li>
                <li className="mb-2"><strong className="text-black">Employment Status:</strong> {jobDetails.jobType}</li>
                <li className="mb-2"><strong className="text-black">Experience:</strong> 2 to 3 year(s)</li>
                <li className="mb-2"><strong className="text-black">Job Location:</strong> {jobDetails.jobRegion}</li>
                <li className="mb-2"><strong className="text-black">Salary:</strong> $60k - $100k</li>
                <li className="mb-2"><strong className="text-black">Gender:</strong> Any</li>
                <li className="mb-2"><strong className="text-black">Application Deadline:</strong> sep 28, 2024</li>
              </ul>
            </div>
            <div className="bg-light p-3 border rounded">
              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
              <div className="px-3">
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-facebook" /></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-twitter" /></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-linkedin" /></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <Footer />
    
  </div>
</div>

  );
};

export default JobDetails;