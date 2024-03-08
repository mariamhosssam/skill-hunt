// import { useState } from "react";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserSignin = () => {
//   const [message, setmessage] = useState()
//   const navigate = useNavigate()

//   const submitHandler = (event ) => {
//     event.preventDefault();
//     console.log('start request')
//     const data = {
//       id: 0,
//       firstName: "Mariammmmmm",
//       lastName: "Hossam",
//       position: "intern",
//       email: "user@gmail.com",
//       username: "mariam53",
//       password: "1234",
//       hashPassword: 'password',
//       isActive: true,
//       createdAte: Date.now()
//     }  
//     axios.post('https://localhost:7176/api/User/user register', data)
//     .then(data => {
//       console.log(data)
//       if(data.status === 200) {
//         navigate('/Login')
//       }
//     } )
//     .catch(error => {
//       console.log(error)
//       setmessage(error.response.data.message)
//     })
//   }
 
//   return (
//     <div className="site-wrap">
//       <Header></Header>
//       {/* HOME */}
//       <section
//         className="section-hero overlay inner-page bg-image"
//         style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
//         id="home-section"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-7">
//               <h1 className="text-white font-weight-bold">
//                 Sign Up and Start Applying For Jobs
//               </h1>
//               <div className="custom-breadcrumbs">
//                 <a href="#">Home</a> <span className="mx-2 slash">/</span>
//                 <span className="text-white">
//                   <strong>Sign Up</strong>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="site-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 mb-5">
//               <h2 className="mb-4">Sign Up To SkillHunt</h2>
//               <span>{message}</span>
//               <form action="#" className="p-4 border rounded">
//                 <div className="mb-3 mt-3">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     placeholder="Enter email"
//                     name="email"
//                   />
//                 </div>
//                 <div className="mb-3 mt-3">
//                   <label htmlFor="first name">first name:</label>
//                   <input
//                     type="first name"
//                     className="form-control"
//                     id="first name"
//                     placeholder="Enter your first name"
//                     name="first name"
//                   />
//                 </div>
//                 <div className="mb-3 mt-3">
//                   <label htmlFor="Last name">last name:</label>
//                   <input
//                     type="last name"
//                     className="form-control"
//                     id="last name"
//                     placeholder="Enter your last name"
//                     name="last name"
//                   />
//                 </div>
//                 <div className="mb-3 mt-3">
//                   <label htmlFor="what job title are you looking for?">
//                     what job title are you looking for?
//                   </label>
//                   <input
//                     type="what job title are you looking for?"
//                     className="form-control"
//                     id="what job title are you looking for?"
//                     placeholder="Enter your job title"
//                     name="what job title are you looking for?"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="pwd">Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="pwd"
//                     placeholder="Enter password"
//                     name="pswd"
//                   />
//                 </div>
//                 <div className="form-check mb-3">
//                   <label className="form-check-label">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       name="remember"
//                     />{" "}
//                     Remember me
//                   </label>
//                 </div>
//                 <button onClick={submitHandler}>submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default UserSignin;
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSignin = () => {
  const [formData, setFormData] = useState({
    // email: "",
    // firstName: "",
    // lastName: "",
    // jobTitle: "",
    // password: "",
    // rememberMe: false,
    id: 0,
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    username: "aaa",
    password: "",
    hashPassword: 'password',
    isActive: true,
    createdAte: Date.now()
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
    console.log("start request");
    axios
      .post('https://localhost:7176/api/User/user register', formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="site-wrap">
      <Header />
      {/* HOME */}
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">
                Sign Up and Start Applying For Jobs
              </h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Sign Up</strong>
                </span>
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
              <span>{message}</span>
              <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="jobTitle">Job Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    placeholder="Enter your job title"
                    name="jobTitle"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div> */}
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserSignin;
