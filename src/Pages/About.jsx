import Footer from "../Components/Footer"

const About = () => {
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
          <div className="site-logo col-6"><a href="index.html">SkillHunt</a></div>
          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><a href="index.html" className="nav-link">Home</a></li>
              <li><a href="about.html" className="active">About</a></li>
              <li className="d-lg-none"><a href="company-signUp.html"><span className="mr-2" /> Company ?</a></li>
              <li className="d-lg-none"><a href="user-signUp.html">Sign Up</a></li>
              <li className="d-lg-none"><a href="login.html">Log In</a></li>
            </ul>
          </nav>
          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              <a href="company-signUp.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span />Company ?</a>
              <a href="user-signUp.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span />Sign Up</a>
              <a href="login.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span />Log In</a>
            </div>
            <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2" /></a>
          </div>
        </div>
      </div>
    </header>
    {/* HOME */}
    <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-white font-weight-bold">About Us</h1>
            <div className="custom-breadcrumbs">
              <a href="#">Home</a> <span className="mx-2 slash">/</span>
              <span className="text-white"><strong>About Us</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-image overlay-primary fixed overlay" id="next-section" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-2 text-white">Skillhunt Site Stats</h2>
            <p className="lead text-white"> Job boards are like windows into the job market, where the statistics tell the story of opportunities, talent, and the ever-evolving landscape of employment.</p>
          </div>
        </div>
        <div className="row pb-0 block__19738 section-counter">
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <strong className="number" data-number={1930}>0</strong>
            </div>
            <span className="caption">Candidates</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <strong className="number" data-number={54}>0</strong>
            </div>
            <span className="caption">Jobs Posted</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <strong className="number" data-number={120}>0</strong>
            </div>
            <span className="caption">Jobs Filled</span>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <strong className="number" data-number={550}>0</strong>
            </div>
            <span className="caption">Companies</span>
          </div>
        </div>
      </div>
    </section>
    <section className="site-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <a data-fancybox data-ratio={2} href="https://vimeo.com/317571768" className="block__96788">
              <span className="play-icon"><span className="icon-play" /></span>
              <img src="images/sq_img_6.jpg" alt="Image" className="img-fluid img-shadow" />
            </a>
          </div>
          <div className="col-lg-5 ml-auto">
            <h2 className="section-title mb-3">Skillhunt For Freelancers, Web Developers</h2>
            {/*  <p class="lead">Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p> */}
            {/*   <p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</p> */}
          </div>
        </div>
      </div>
    </section>
    <section className="site-section pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 order-md-2">
            <a data-fancybox data-ratio={2} href="https://vimeo.com/317571768" className="block__96788">
              <span className="play-icon"><span className="icon-play" /></span>
              <img src="images/sq_img_8.jpg" alt="Image" className="img-fluid img-shadow" />
            </a>
          </div>
          <div className="col-lg-5 mr-auto order-md-1  mb-5 mb-lg-0">
            <h2 className="section-title mb-3">skillhunt For Workers</h2>
            {/*  <p class="lead">Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p> */}
            {/* <p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</p> */}
          </div>
        </div>
      </div>
    </section>
    <section className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Team</h2>
          </div>
        </div>
        <div className="row align-items-center block__69944">
          <div className="col-md-6">
            {/*  <img src="images/person_6.jpg" alt="Image" class="img-fluid mb-4 rounded"> */}
          </div>
          {/* <div class="col-md-6"> */}
          {/* <h3>Elisabeth Smith</h3>
      <p class="text-muted">Creative Director</p>
      <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p> */}
          {/* <div class="social mt-4">
        <a href="#"><span class="icon-facebook"></span></a>
        <a href="#"><span class="icon-twitter"></span></a>
        <a href="#"><span class="icon-instagram"></span></a>
        <a href="#"><span class="icon-linkedin"></span></a>
      </div>
    </div> */}
          {/* <div class="col-md-6 order-md-2 ml-md-auto">
      <img src="images/person_5.jpg" alt="Image" class="img-fluid mb-4 rounded">
    </div>

    <div class="col-md-6">
      <h3>Chintan Patel</h3>
      <p class="text-muted">Creative Director</p>
      <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
      <div class="social mt-4">
        <a href="#"><span class="icon-facebook"></span></a>
        <a href="#"><span class="icon-twitter"></span></a>
        <a href="#"><span class="icon-instagram"></span></a>
        <a href="#"><span class="icon-linkedin"></span></a>
      </div>
    </div>
</div> */}
        </div></div></section>
    <Footer></Footer>
  </div>
</div>

        )
    }
    
    export default About
    