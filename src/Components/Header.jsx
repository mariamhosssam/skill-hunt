const Header = (props) => {
    console.log(props.signedIn)
    return (
        <header className="site-navbar mt-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* <div className="site-logo col-6"><a href="index.html"> SkillHunt</a></div> */}
            <div className="site-logo col-6"><a href="index.html"> {props.title}</a></div>

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
          {!props.signedIn? 
            <>
            <li className="d-lg-none"><a href="company-signUp.html"><span className="mr-2" /> Company ?</a></li>
            <li className="d-lg-none"><a href="user-signUp.html">Sign Up</a></li>
            <li className="d-lg-none"><a href="login.html">Log In</a></li>
            </>
           : 
            <>
            <li class="d-lg-none"><a href="index.html">Log Out</a></li>
            </>
          }
                
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
    )
}

export default Header