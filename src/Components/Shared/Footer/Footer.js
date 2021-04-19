import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faGooglePlusG,faYoutube,faDribbble } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-2">
            <h2>MedService</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati error iste ullam odio autem?</p>
            <div className="social_icon">
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <h2>Our Location</h2>
            <p>
              121 King Street, Melbourne,
              <br />
              Victoria 3000 Australia
            </p>
            <p>
              E: hello@yourdomain.com
              <br />
              P: +12 9 8765 4321
            </p>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
              <h2>About Clinic</h2>
              <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">About Clinic</a></li>
                  <li><a href="#" className="text-dark">Careers</a></li>
                  <li><a href="#" className="text-dark">Press & Media</a></li>
                  <li><a href="#" className="text-dark">Our Blog</a></li>
                  <li><a href="#" className="text-dark">Advertising</a></li>
              </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
              <h2>Discover</h2>
              <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Help Center</a></li>
                  <li><a href="#" className="text-dark">Life Chatting</a></li>
                  <li><a href="#" className="text-dark">Terms & Privacy</a></li>
                  <li><a href="#" className="text-dark">FAQs</a></li>
                  <li><a href="#" className="text-dark">Site Map</a></li>
              </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <p className="copy-right text-center">Copyright {(new Date()).getFullYear()} All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
