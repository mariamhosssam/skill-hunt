import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log(email, password)
    if(email && password) {
      // send to api
      // received true value
      localStorage.setItem('signed', true)
      navigate('/')
    }
    
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    // // <div>
    //   {/* <div id="overlayer" /> */}
    //   {/* <div className="loader">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="sr-only">Loading...</span>
    //     </div>
    //   </div> */}

      <div className="site-wrap">
        <Header></Header>
        {/* HOME */}
        <section
          className="section-hero overlay inner-page bg-image"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
          id="home-section"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1 className="text-white font-weight-bold">Login</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-4">Log In To SkillHunt</h2>
                <form action="#" className="p-4 border rounded">
                  <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label className="text-black" htmlFor="fname">
                        Email
                      </label>
                      <input
                        onBlur={handleEmail}
                        type="text"
                        id="fname1"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="row form-group mb-4">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label className="text-black" htmlFor="fname">
                        Password
                      </label>
                      <input
                      onChange={handlePassword}
                        type="password"
                        id="fname"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        onClick={handleSignIn}
                        type="submit"
                        defaultValue="Log In"
                        className="btn px-4 btn-primary text-white"
                      />
                    </div>
                  </div>
                  <a href="post-job.html">if Company</a>
                  <a href="Explore.html">if user</a>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    // </div>
  );
};

export default Login;
