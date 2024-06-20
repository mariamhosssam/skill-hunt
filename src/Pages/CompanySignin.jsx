import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Helpers";


const CompanySignin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber:"",
    foundationDate: Date.now(),
    industry:"",
    companyName:"",
    message:""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/Company/Company register`, formData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 400 && error.response.data.message === "Username already exists.") {
          setMessage("Email already exists. Please choose a different Email.");
        } else {
          setMessage("An error occurred. Please try again later.");
        }
      });
  };







  return (
    <div className="site-wrap">
      <Header></Header>
     
      <div>
  <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: 'url("images/hero_1.jpg")'}} id="home-section">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-white font-weight-bold">Create a Company Account to Start Hiring Now</h1>
          <div className="custom-breadcrumbs">
            <a href="#">Home</a> <span className="mx-2 slash">/</span>
            <span className="text-white"><strong>Sign Up</strong></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h2 className="mb-4">Sign Up To SkillHunt</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded">
          <div className="text-danger">{message}</div>
  <div className="mb-3 mt-3">
    <label htmlFor="email">Business Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your business email" name="email" value={formData.email} onChange={handleChange} />
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="firstName">First name:</label>
    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" name="firstName" value={formData.firstName} onChange={handleChange} />
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="lastName">Last name:</label>
    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleChange} />
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="phoneNumber">Mobile number:</label>
    <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your mobile number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="companyName">Company name:</label>
    <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" name="companyName" value={formData.companyName} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="industry">Industry:</label>
    <input type="text" className="form-control" id="industry" placeholder="Enter the Industry" name="industry" value={formData.industry} onChange={handleChange} />
  </div>
  <div className="mb-3 mt-3">
            <label htmlFor="foundationDate">Foundation date:</label>
             <input type="date" className="form-control" id="foundationDate" placeholder="Enter the Foundation date" name="foundationDate"
              value={formData.foundationDate}
              onChange={handleChange} />
             </div>

  <div className="mb-3">
    <label htmlFor="password">Password:</label>
    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
  </div>
  {/* <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
      </div>
    </div>
  </section>
</div>

    
      <Footer></Footer>
    </div>
  );
};

export default CompanySignin;
