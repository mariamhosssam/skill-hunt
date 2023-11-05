import Footer from "../Components/Footer"

const Explore = () => {
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
    {/* NAVBAR */}
    <header className="site-navbar mt-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6"><a href="index.html"> SkillHunt</a></div>
          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><a href="Explore.html" className="nav-link">Explore</a></li>
              <li><a href="dashboard.html" className="nav-link">Dashboard</a></li>
              <li><a href="virtualinterview.html" className="nav-link">Practice for interview?</a></li>
              <li><a href="about.html">About</a></li>
              <li className="d-lg-none"><a href="index.html">Log Out</a></li>
            </ul>
          </nav>
          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              <a href="index.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span />Log Out</a>
            </div>
            <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2" /></a>
          </div>
        </div>
      </div>
    </header>
    {/* HOME */}
    <section className="home-section section-hero overlay bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="mb-5 text-center">
              <h1 className="text-white font-weight-bold">The Easiest Way To Get Your Dream Job</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p> */}
            </div>
            <form method="post" className="search-jobs-form">
              <div className="row mb-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input type="text" className="form-control form-control-lg" placeholder="Job title, Company..." />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select className="selectpicker" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Region">
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
                  <select className="selectpicker" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Job Type">
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2" />Search Job</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 popular-keywords">
                  <h3>Trending Keywords:</h3>
                  <ul className="keywords list-unstyled m-0 p-0">
                    <li><a href="#" className>UI Designer</a></li>
                    <li><a href="#" className>Python</a></li>
                    <li><a href="#" className>Developer</a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <a href="#next" class="scroll-button smoothscroll">
  <span class=" icon-keyboard_arrow_down"></span>
</a> */}
    </section>
    {/* <section class="py-5 bg-image overlay-primary fixed overlay" id="next" style="background-image: url('images/hero_1.jpg');">
<div class="container">
  <div class="row mb-5 justify-content-center">
    <div class="col-md-7 text-center">
      <h2 class="section-title mb-2 text-white">Skillhunt Site Stats</h2>
      <p class="lead text-white"> Job boards are like windows into the job market, where the statistics tell the story of opportunities, talent, and the ever-evolving landscape of employment.</p>
    </div>
  </div>
  <div class="row pb-0 block__19738 section-counter">

    <div class="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
      <div class="d-flex align-items-center justify-content-center mb-2">
        <strong class="number" data-number="1930">0</strong>
      </div>
      <span class="caption">Candidates</span>
    </div>

    <div class="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
      <div class="d-flex align-items-center justify-content-center mb-2">
        <strong class="number" data-number="54">0</strong>
      </div>
      <span class="caption">Jobs Posted</span>
    </div>

    <div class="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
      <div class="d-flex align-items-center justify-content-center mb-2">
        <strong class="number" data-number="120">0</strong>
      </div>
      <span class="caption">Jobs Filled</span>
    </div>

    <div class="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
      <div class="d-flex align-items-center justify-content-center mb-2">
        <strong class="number" data-number="550">0</strong>
      </div>
      <span class="caption">Companies</span>
    </div>

      
  </div>
</div>
    </section> */}
    <section className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-2">43,167 Job Listed</h2>
          </div>
        </div>
        <ul className="job-listings mb-5">
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Software Engineer</h2>
                <strong>Adidas</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> New York, New York
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-danger">Part Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Digital Marketing Director</h2>
                <strong>Sprint</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> Overland Park, Kansas 
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-success">Full Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_3.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Back-end Engineer (Python)</h2>
                <strong>Amazon</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> Overland Park, Kansas 
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-success">Full Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_4.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Senior Art Director</h2>
                <strong>Microsoft</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> Anywhere 
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-success">Full Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_5.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Product Designer</h2>
                <strong>Puma</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> San Mateo, CA 
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-success">Full Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Product Designer</h2>
                <strong>Adidas</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> New York, New York
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-danger">Part Time</span>
              </div>
            </div>
          </li>
          <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
            <a href="job-single.html" />
            <div className="job-listing-logo">
              <img src="images/job_logo_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
            </div>
            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
              <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>Digital Marketing Director</h2>
                <strong>Sprint</strong>
              </div>
              <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span className="icon-room" /> Overland Park, Kansas 
              </div> 
              <div className="job-listing-meta">
                <span className="badge badge-success">Full Time</span>
              </div>
            </div>
          </li>
        </ul>
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
      </div>
    </section>
    {/* <section class="py-5 bg-image overlay-primary fixed overlay" style="background-image: url('images/hero_1.jpg');">
<div class="container">
  <div class="row align-items-center">
     <div class="col-md-8">
      <h2 class="text-white">Looking For A Job?</h2>
      <p class="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
    </div> */}
    {/* <div class="col-md-3 ml-auto">
      <a href="#" class="btn btn-warning btn-block btn-lg">Sign Up</a>
    </div> 
  </div>
</div>
    </section> */}
    {/* <section class="site-section py-4">
<div class="container">
  
  <div class="row align-items-center">
    <div class="col-12 text-center mt-4 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <h2 class="section-title mb-2">Company We've Helped</h2>
           <p class="lead">Porro error reiciendis commodi beatae omnis similique voluptate rerum ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</p> */}
    {/* </div>
      </div> */}
    {/* </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_mailchimp.svg" alt="Image" class="img-fluid logo-1">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_paypal.svg" alt="Image" class="img-fluid logo-2">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_stripe.svg" alt="Image" class="img-fluid logo-3">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_visa.svg" alt="Image" class="img-fluid logo-4">
    </div>

    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_apple.svg" alt="Image" class="img-fluid logo-5">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_tinder.svg" alt="Image" class="img-fluid logo-6">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_sony.svg" alt="Image" class="img-fluid logo-7">
    </div>
    <div class="col-6 col-lg-3 col-md-6 text-center">
      <img src="images/logo_airbnb.svg" alt="Image" class="img-fluid logo-8">
    </div>
  </div>
</div> 
     </section> 


    <section class="bg-light pt-5 testimony-full">
  
  <div class="owl-carousel single-carousel"> */}
    {/* <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center text-center text-lg-left">
          <blockquote>
            <p>&ldquo;Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.&rdquo;</p>
            <p><cite> &mdash; Corey Woods, @Dribbble</cite></p>
          </blockquote>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-right">
          <img src="images/person_transparent_2.png" alt="Image" class="img-fluid mb-0">
        </div>
      </div>
    </div> */}
    {/* <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center text-center text-lg-left">
          <blockquote>
            <p>&ldquo;Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.&rdquo;</p>
            <p><cite> &mdash; Chris Peters, @Google</cite></p>
          </blockquote>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-right">
          <img src="images/person_transparent.png" alt="Image" class="img-fluid mb-0">
        </div>
      </div>
    </div> */}
    {/* </div> */}
    {/* </section> 

    <section class="pt-5 bg-image overlay-primary fixed overlay" style="background-image: url('images/hero_1.jpg');">
 <div class="container"> 
   <div class="row">
    <div class="col-md-6 align-self-center text-center text-md-left mb-5 mb-md-0">
      <h2 class="text-white">Get The Mobile Apps</h2>
      <p class="mb-5 lead text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
      <p class="mb-0">
        <a href="#" class="btn btn-dark btn-md px-4 border-width-2"><span class="icon-apple mr-3"></span>App Store</a>
        <a href="#" class="btn btn-dark btn-md px-4 border-width-2"><span class="icon-android mr-3"></span>Play Store</a>
      </p>
    </div> 
     <div class="col-md-6 ml-auto align-self-end">
      <img src="images/apps.png" alt="Free Website Template by Free-Template.co" class="img-fluid">
    </div>
  </div> 
 </div> 
    </section> */}
   <Footer/>
  </div>
</div>

        )
    }
    
    export default Explore
    