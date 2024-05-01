import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../Helpers";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    if (username && password) {
      // send to api
      axios
        .post(`${baseUrl}/User/login`, {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userType", response.data.modelUser.type);
            localStorage.setItem("userId", response.data.modelUser.id);
            localStorage.setItem("firstName", response.data.modelUser.firstName);
            const userType = response.data.modelUser.type === "USER" ? 0 : 1;
            localStorage.setItem("usertype", userType);
            navigate('/');
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status === 401) {
            // Set error message for invalid username or password
            setErrorMessage("Username or password is invalid.");
          }
        });
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="site-wrap">
      <Header />
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
                {errorMessage && ( // Render error message if exists
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="username">
                      Username
                    </label>
                    <input
                      onChange={handleUsername}
                      type="text"
                      id="username"
                      value={username}
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="password">
                      Password
                    </label>
                    <input
                      onChange={handlePassword}
                      type="password"
                      id="password"
                      value={password}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <button
                      onClick={handleSignIn}
                      className="btn px-4 btn-primary text-white"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
