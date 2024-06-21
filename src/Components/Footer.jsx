import React from 'react';

const Footer = () => {

  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };

    return (
        <footer className="site-footer">


       <a className="smoothscroll scroll-top" onClick={handleScrollToTop}>
      <span className="icon-keyboard_arrow_up" />
    </a>


      <div className="container">
        <div className="row mb-5">
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Search Trending</h3>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Developers</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS3</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              {/* <li><a href="#">Career</a></li> */}
              {/* <li><a href="#">Blog</a></li> */}
              {/* <li><a href="#">Resources</a></li> */}
            </ul>
          </div>
          {/* <div class="col-6 col-md-3 mb-4 mb-md-0">
      <h3>Support</h3>
      <ul class="list-unstyled">
        <li><a href="#">Support</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div> */}
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div className="footer-social">
              <a href="#"><span className="icon-facebook" /></a>
              <a href="#"><span className="icon-twitter" /></a>
              <a href="#"><span className="icon-instagram" /></a>
              <a href="#"><span className="icon-linkedin" /></a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <p className="copyright"><small>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                {/* Copyright &copy; All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a> */}
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</small></p>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer