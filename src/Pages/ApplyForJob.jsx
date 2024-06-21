import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";

const ApplyForJob = () => {
  const navigate = useNavigate()
  const handleSubmit = async () => {
    window.scrollTo(0, 0);
    navigate('/', { replace: true });
  };
    return (
      <div>
        <Header pageTitle='Apply for your Dream job now!'></Header>

  <section className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h2 className="mb-4">Additional Questions</h2>
          <form action="#" className="p-4 border rounded">
            {/* 
        <div class="row form-group">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Business Email</label>
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
        </div> */}
            <div className="mb-3 mt-3">
              <label htmlFor="mobile number">Mobile number:</label>
              <input type="mobile number" className="form-control" id="mobile number" placeholder="Enter your mobile number" name="mobile number" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="Years of experiance">Years of experiance:</label>
              <input type="Years of experiance" className="form-control" id="Years of experiance" placeholder="Enter your Years of experiance" name="Years of experiance" />
            </div>
            <label htmlFor="mobile number">Upload your CV:</label>
            <label htmlFor="file">File</label>
            <input id="file" name="file" type="file" />
            
          </form>
          <button id="submit-btn" className="btn px-4 btn-primary text-white m-3" onClick={handleSubmit} >Submit the Application</button>
        </div>
        {/* <div class="col-lg-6">
      <h2 class="mb-4">Log In To JobBoard</h2>
      <form action="#" class="p-4 border rounded">

        <div class="row form-group">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Email</label>
            <input type="text" id="fname" class="form-control" placeholder="Email address">
          </div>
        </div>
        <div class="row form-group mb-4">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="text-black" for="fname">Password</label>
            <input type="password" id="fname" class="form-control" placeholder="Password">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <input type="submit" value="Log In" class="btn px-4 btn-primary text-white">
          </div>
        </div>

      </form>
    </div> */}
      </div>
    </div>
  </section>
  <Footer></Footer>

</div>


        )
    }
    export default ApplyForJob;