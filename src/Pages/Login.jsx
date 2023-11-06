const Login = () => {
    return (
          <div>
  &lt;&gt;
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
              <li><a href="index.html" className="nav-link">Home</a></li>
              <li><a href="about.html">About</a></li>
              {/* <li class="has-children">
          <a href="job-listings.html">Job Listings</a>
          <ul class="dropdown">
            <li><a href="job-single.html">Job Single</a></li>
            <li><a href="post-job.html">Post a Job</a></li>
          </ul>
        </li> */}
              <li className="d-lg-none"><a href="post-job.html"><span className="mr-2" /> Company ?</a></li>
              <li className="d-lg-none"><a href="login.html">Sign Up</a></li>
              {/* <li class="d-lg-none"><a href="login.html">Log In</a></li> */}
            </ul>
          </nav>
          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              <a href="post-job.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span />Company ?</a>
              <a href="login.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span />Sign Up</a>
              {/* <a href="login.html" class="btn btn-primary border-width-2 d-none d-lg-inline-block"><span ></span>Log In</a> */}
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
            <h1 className="text-white font-weight-bold">Login</h1>
            <div className="custom-breadcrumbs">
              <a href="#">Home</a> <span className="mx-2 slash">/</span>
              <span className="text-white"><strong>Log In</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="site-section">
      <div className="container">
        <div className="row">
          {/* <div class="col-lg-6 mb-5">
      <h2 class="mb-4">Sign Up To JobBoard</h2>
      <form action="#" class="p-4 border rounded">

        <div class="row form-group">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Email</label>
            <input type="text" id="fname" class="form-control" placeholder="Email address">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Password</label>
            <input type="password" id="fname" class="form-control" placeholder="Password">
          </div>
        </div>
        <div class="row form-group mb-4">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Re-Type Password</label>
            <input type="password" id="fname" class="form-control" placeholder="Re-type Password">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <input type="submit" value="Sign Up" class="btn px-4 btn-primary text-white">
          </div>
        </div>

      </form>
    </div> */}
          <div className="col-lg-6">
            <h2 className="mb-4">Log In To SkillHunt</h2>
            <form action="#" className="p-4 border rounded">
              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">Email</label>
                  <input type="text" id="fname1" className="form-control" placeholder="Email address" />
                </div>
              </div>
              <div className="row form-group mb-4">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">Password</label>
                  <input type="password" id="fname" className="form-control" placeholder="Password" />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" defaultValue="Log In" className="btn px-4 btn-primary text-white" />
                </div>
              </div>
              <a href="post-job.html">if Company</a>
              <a href="Explore.html">if user</a>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="site-footer">
      <a href="#top" className="smoothscroll scroll-top">
        <span className="icon-keyboard_arrow_up" />
      </a>
      <div className="container">
        <div className="row mb-5">
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Search Trending</h3>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Developers</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS3</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Support</h3>
            <ul className="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div className="footer-social">
              <a href="#"><span className="icon-facebook" /></a>
              <a href="#"><span className="icon-twitter" /></a>
              <a href="#"><span className="icon-instagram" /></a>
              <a href="#"><span className="icon-linkedin" /></a>
            </div>
          </div>
        </div>
        {/* <div class="row text-center">
    <div class="col-12">
      <p class="copyright"><small>
        
      Copyright &copy; All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
     </small></p>
    </div>
  </div> */}
      </div>
    </footer>
  </div>
</div>

        );
    };
    
    export default Login;