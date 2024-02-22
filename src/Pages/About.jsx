import Footer from "../Components/Footer"
import Header from "../Components/Header"
import SiteStates from "../Components/SiteStates"

const About = () => {
    return (
  <div className="site-wrap">
    <Header pageTitle='About Us'></Header>
    {/* HOME */}
   
    <SiteStates></SiteStates>
    <section className="site-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <a data-fancybox data-ratio={2} href="https://vimeo.com/317571768" className="block__96788">
              <span className="play-icon"><span className="icon-play" /></span>
              <img src="images/sq_img_6.jpg" alt="Image" className="img-fluid img-shadow" />
            </a>
          </div>
          <div className="col-lg-5 ml-auto">
            <h2 className="section-title mb-3">Skillhunt For Freelancers, Web Developers</h2>
            {/*  <p class="lead">Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p> */}
            {/*   <p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</p> */}
          </div>
        </div>
      </div>
    </section>
    <section className="site-section pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 order-md-2">
            <a data-fancybox data-ratio={2} href="https://vimeo.com/317571768" className="block__96788">
              <span className="play-icon"><span className="icon-play" /></span>
              <img src="images/sq_img_8.jpg" alt="Image" className="img-fluid img-shadow" />
            </a>
          </div>
          <div className="col-lg-5 mr-auto order-md-1  mb-5 mb-lg-0">
            <h2 className="section-title mb-3">skillhunt For Workers</h2>
            {/*  <p class="lead">Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p> */}
            {/* <p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</p> */}
          </div>
        </div>
      </div>
    </section>
    <section className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Team</h2>
          </div>
        </div>
        <div className="row align-items-center block__69944">
          <div className="col-md-6">
            {/*  <img src="images/person_6.jpg" alt="Image" class="img-fluid mb-4 rounded"> */}
          </div>
          {/* <div class="col-md-6"> */}
          {/* <h3>Elisabeth Smith</h3>
      <p class="text-muted">Creative Director</p>
      <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p> */}
          {/* <div class="social mt-4">
        <a href="#"><span class="icon-facebook"></span></a>
        <a href="#"><span class="icon-twitter"></span></a>
        <a href="#"><span class="icon-instagram"></span></a>
        <a href="#"><span class="icon-linkedin"></span></a>
      </div>
    </div> */}
          {/* <div class="col-md-6 order-md-2 ml-md-auto">
      <img src="images/person_5.jpg" alt="Image" class="img-fluid mb-4 rounded">
    </div>

    <div class="col-md-6">
      <h3>Chintan Patel</h3>
      <p class="text-muted">Creative Director</p>
      <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
      <div class="social mt-4">
        <a href="#"><span class="icon-facebook"></span></a>
        <a href="#"><span class="icon-twitter"></span></a>
        <a href="#"><span class="icon-instagram"></span></a>
        <a href="#"><span class="icon-linkedin"></span></a>
      </div>
    </div>
</div> */}
        </div></div></section>
    <Footer></Footer>
  </div>

        )
    }
    
    export default About
    