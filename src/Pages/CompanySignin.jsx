import Footer from "../Components/Footer";
import Header from "../Components/Header";

const CompanySignin = () => {
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
          <form action="#" className="p-4 border rounded">
            <div className="mb-3 mt-3">
              <label htmlFor="business email">Business Email:</label>
              <input type="business email" className="form-control" id="business email" placeholder="Enter your business email" name="business email" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="first name">First name:</label>
              <input type="first name" className="form-control" id="first name" placeholder="Enter your first name" name="first name" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="last name">Last name:</label>
              <input type="last name" className="form-control" id="last name" placeholder="Enter your last name" name="last name" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="mobile number">Mobile number:</label>
              <input type="mobile number" className="form-control" id="mobile number" placeholder="Enter your mobile number" name="mobile number" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="company name">Company name:</label>
              <input type="company name" className="form-control" id="company name" placeholder="Enter your company name" name="company name" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="Foundation date">Foundation date:</label>
              <input type="Foundation date" className="form-control" id="Foundation date" placeholder="Enter the Foundation date" name="Foundation date" />
            </div>
            <div className="mb-3">
              <label htmlFor="Industry">Industry:</label>
              <input type="Industry" className="form-control" id="Industry" placeholder="Enter the Industry" name="Industry" />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <a href="login.html">Submit</a>
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
