import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Pages/Login";
import { useNavigate } from "react-router-dom";



const Header = (props) => {
  
  const [signedIn, setSignedIN] = useState()
  const [userType, setUserType] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSignedIN(true)
       const userType = localStorage.getItem('usertype');
      setUserType(userType);
          //console.log(userType)
      // if(userType === '0' )console.log("i am user!")
      // else console.log("i am company!")
    }
  })

  const handleSignOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usertype')
    setSignedIN(false)
    navigate('/');
  }
  return (
    <>
     <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>{" "}

        
        {/* .site-mobile-menu */}
        {/* NAVBAR */}

        <header className="site-navbar mt-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6">
            <a href="index.html"> {props.title ? props.title : 'SkillHunt'}</a>
          </div>
          

          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li>
              <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/about'>About</NavLink>
              </li>
              {signedIn && userType === '0' && (
                <>
                  <li>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/Dashboard'>Dashboard</NavLink>
              </li>
              <li className="has-children">
            <a href="#">Practice for interview ?</a>
            <ul className="dropdown">
           <li>              <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/TechnicalQ'>Technical Interview Questions</NavLink>
</li>
           <li> <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/SoftSkillsVideo'>Soft Skills Video Assessment </NavLink></li>
           </ul>
           </li>

                </>
              )}
              {signedIn && userType  === '1'&& (
                <>
          <li>
              <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/PostJob'>Post a Job</NavLink>
              </li>
              <li>
              <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/CompanyApplications'>Jobs Applications</NavLink>
              </li>
                </>


              )}

              {/* <li class="has-children">
            <a href="job-listings.html">Job Listings</a>
            <ul class="dropdown">
              <li><a href="job-single.html">Job Single</a></li>
              <li><a href="post-job.html">Post a Job</a></li>
            </ul>
          </li> */}
            </ul>
          </nav>
          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              {!signedIn ? (
                <>
                  {/* <a href="company-signUp.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block">
                    Company ?
                  </a> */}
                  <Link to="/CompanySignin"  
                  
                  className="btn btn-outline-white border-width-2 d-none d-lg-inline-block" >
                   Company ?
                  </Link>   
  
                  <Link to="/UserSignIn" className="btn btn-primary border-width-2 d-none d-lg-inline-block" >
                   Sign Up
                  </Link>


                  <Link to="/login"  // onClick={handleSignIn} 
                  className="btn btn-primary border-width-2 d-none d-lg-inline-block" >
                    Log In
                  </Link>                   
                </>
              ) 
              :
               (
                  <button
                      // to="/"
                      onClick={handleSignOut}
                      className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                    >
                      Log Out
                    </button>
                )}
            </div>
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
            >
              <span className="icon-menu h3 m-0 p-0 mt-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
    {props.pageTitle && 
    <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-white font-weight-bold">{props.pageTitle}</h1>
          </div>
        </div>
      </div>
    </section>
    }
    </>
   
  );
};

export default Header;
