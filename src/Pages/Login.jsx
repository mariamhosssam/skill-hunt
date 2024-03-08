//  import { useState } from "react";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {

//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const navigate = useNavigate();
//   console.log(localStorage.getItem('token'))

//   const handleSignIn = (event) => {
//     event.preventDefault();
//     console.log(email, password)
//     if(email&&password) {
//       // send to api
//       axios.post('https://localhost:7176/api/User/login', {
//         email: email,
//         password: password
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.status === 200) {
//           navigate("/About");
//         }
//       })
//       // .then(data => {
//       //   console.log(data)
//       // localStorage.setItem('token', data.data.token)
//       // localStorage.setItem('type', data.data.modelUser.type)
//       // if(data.data.modelUser.type === 'USER') {
//       //   navigate('/About')
//       // } 
//       // })
//       .catch(error => console.log(error))
//       // received true value
//       // receive user type
//       // localStorage.setItem('signed', true)
//       // navigate('/')
      
//     }
    
//   }
//   const handleEmail = (event) => {
//     setEmail(event.target.value)
//   }
//   const handlePassword = (event) => {
//     setPassword(event.target.value)
//   }

//   return (
//     // // <div>
//     //   {/* <div id="overlayer" /> */}
//     //   {/* <div className="loader">
//     //     <div className="spinner-border text-primary" role="status">
//     //       <span className="sr-only">Loading...</span>
//     //     </div>
//     //   </div> */}

//       <div className="site-wrap">
//         <Header></Header>
//         {/* HOME */}
//         <section
//           className="section-hero overlay inner-page bg-image"
//           style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
//           id="home-section"
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-md-7">
//                 <h1 className="text-white font-weight-bold">Login</h1>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="site-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6">
//                 <h2 className="mb-4">Log In To SkillHunt</h2>
//                 <form action="#" className="p-4 border rounded">
//                   <div className="row form-group">
//                     <div className="col-md-12 mb-3 mb-md-0">
//                       <label className="text-black" htmlFor="fname">
//                         Email
//                       </label>
//                       <input
//                         onChange={handleEmail}
//                         type="text"
//                         id="email"
//                         value={email}
//                         className="form-control"
//                         placeholder="Email address"
//                       />
//                     </div>
//                   </div>
//                   <div className="row form-group mb-4">
//                     <div className="col-md-12 mb-3 mb-md-0">
//                       <label className="text-black" htmlFor="fname">
//                         Password
//                       </label>
//                       <input
//                       onChange={handlePassword}
//                         type="password"
//                         id="password"
//                         value={password}
//                         className="form-control"
//                         placeholder="Password"
//                       />
//                     </div>
//                   </div>
//                   <div className="row form-group">
//                     <div className="col-md-12">
//                       <input
//                         onClick={handleSignIn}
//                         type="submit"
//                         defaultValue="Log In"
//                         className="btn px-4 btn-primary text-white"
//                       />
//                     </div>
//                   </div>
//                   {/* <a href="post-job.html">if Company</a>
//                   <a href="Explore.html">if user</a> */}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer></Footer>
//       </div>
//     // </div>
//   );
// };

// export default Login;
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [username, setusername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  console.log(localStorage.getItem('token'))

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log(username, password)
    if(username&&password) {
      // send to api
      axios.post('https://localhost:7176/api/User/login', {
        username: username,
        password: password
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
               localStorage.setItem('token', response.token)
               navigate('/About')
               console.log(response.data.modelUser.type)
               if(response.data.modelUser.type === 'USER')
               {
                navigate('/About')
               }
               else 
               {

               }
      
        }
      })
      // .then(data => {
      //   console.log(data)
      // // localStorage.setItem('token', data.data.token)
      // localStorage.setItem('type', data.data.modelUser.type)
      // if(data.data.modelUser.type === 'USER') {
      //   navigate('/About')
      // } 
      // })
      .catch(error => console.log(error))
      // received true value
      // receive user type
      // localStorage.setItem('signed', true)
      // navigate('/')
      
    }
    
  }
  const handleusername = (event) => {
    setusername(event.target.value)
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
                      username
                      </label>
                      <input
                        onChange={handleusername}
                        type="text"
                        id="username"
                        value={username}
                        className="form-control"
                        placeholder="username"
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
                        id="password"
                        value={password}
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
                  {/* <a href="post-job.html">if Company</a>
                  <a href="Explore.html">if user</a> */}
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
