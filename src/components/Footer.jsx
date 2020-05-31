import React from "react";
import { Link } from "react-scroll";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-4 col-sm-6">
              <div className="mb-4">
                <Link to="#">
                  <img
                    src="images/logo-light.png"
                    alt=""
                    className="logo-light"
                    height="22"
                  />
                </Link>
                <a href="layout-two-1">
                  <img
                    src="images/logo-dark.png"
                    alt=""
                    className="logo-dark"
                    height="22"
                  />
                </a>
              </div>
              <p className="footer-desc f-15">
                Your Trusted Partner In Stock Treading.
              </p>
              <ul className="footer-icons list-inline f-20 mb-0 mt-4">
                <li className="list-inline-item mr-3">
                  <Link to="#">
                    <i className="mdi mdi-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#">
                    <i className="mdi mdi-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#">
                    <i className="mdi mdi-tumblr"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="mdi mdi-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="row mt-lg-0">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-4 mt-lg-0">
                  <h5 className="footer-list-title f-18 font-weight-normal mb-3">
                    Company
                  </h5>
                  <ul className="list-unstyled company-sub-menu">
                    <li>
                      <Link
                        href="#about"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Why BSS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#features"
                        to="features"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mt-4 mt-lg-0">
                  <h5 className="footer-list-title f-18 font-weight-normal mb-3">
                    Layanan
                  </h5>
                  <ul className="list-unstyled company-sub-menu">
                    <li>
                      <Link to="#">Premium</Link>
                    </li>
                    <li>
                      <Link to="#">Training Saham Pemula</Link>
                    </li>
                    <li>
                      <Link to="#">Workshop Full Series</Link>
                    </li>
                    <li>
                      <Link to="#">Seminar</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <div className="text-center footer-alt my-3">
                <p className="f-15">2020 © Neloz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
