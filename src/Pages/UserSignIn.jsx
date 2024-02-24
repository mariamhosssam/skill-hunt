import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";

const UserSignin = () => {

  const submitHandler = ( ) => {
    console.log('start request')
    const data = {
      id: 0,
      firstName: "Mariam",
      lastName: "Hossam",
      position: "intern",
      email: "user@gmail.com",
      username: "mariam",
      password: "1234",
      hashPassword : "string",
      isActive: true,
      createdAte: Date.now()
    }  
    axios.post('https://localhost:44322/api/User/user register', JSON.stringify(data))
    .then(data => {
      console.log(data)
      // href="Explore.html"
    } )
    .catch(error => console.log(error))
  }
 
  return (
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
              <form action="#" className="p-4 border rounded">
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="first name">first name:</label>
                  <input
                    type="first name"
                    className="form-control"
                    id="first name"
                    placeholder="Enter your first name"
                    name="first name"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="Last name">last name:</label>
                  <input
                    type="last name"
                    className="form-control"
                    id="last name"
                    placeholder="Enter your last name"
                    name="last name"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="what job title are you looking for?">
                    what job title are you looking for?
                  </label>
                  <input
                    type="what job title are you looking for?"
                    className="form-control"
                    id="what job title are you looking for?"
                    placeholder="Enter your job title"
                    name="what job title are you looking for?"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                </div>
                <button onClick={submitHandler}>submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default UserSignin;
