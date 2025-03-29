

let Footer = () => {
    return  <footer id="footer" className="footer">
    <div className="footer-content">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>AGNUS</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex  mt-3">
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-dash" /> <a href="#">Home</a></li>
              <li><i className="bi bi-dash" /> <a href="#">About us</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Services</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Terms of service</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-dash" /> <a href="#">Web Design</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Web Development</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Product Management</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Marketing</a></li>
              <li><i className="bi bi-dash" /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-legal">
      <div className="container">
        <div className="copyright">
          © Copyright <strong><span>AGNUS</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/AGNUS-bootstrap-business-template/ */}
          Designed by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Team AGNI</a>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;