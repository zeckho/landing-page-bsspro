import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";
import { Element } from "react-scroll";

class Hero extends React.Component {
  render() {
    return (
      <Element
        name="home"
        className="hero-7-bg position-relative bg-gradient-primary"
      >
        <div className="hero-7-bg-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-title">
                <div className="mb-4">
                  <i className="mdi mdi-google-circles-extended mdi-spin text-light h1"></i>
                </div>
                <h1 className="hero-7-title">
                  <span className="text-wrapper">
                    <span className="letters text-light font-weight-normal">
                      <Typical
                        steps={[
                          "",
                          1000,
                          "Your Trusted Partner In Stock Treading!",
                          500,
                        ]}
                        loop={Infinity}
                        wrapper="span"
                      />
                    </span>
                  </span>
                </h1>
                <p className="text-light-70 mb-4 pb-2">
                  Temukan peluan dan kemudahan belajar Trading Saham bersama
                  kami, dengan pola analisa sederhana dan terukur.
                </p>
                <Link
                  className="btn btn-light"
                  href="#about"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Learn More
                  <span className="ml-2 right-icon">&#8594;</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mt-5 mt-lg-0">
                <img
                  src="images/hero-7-img.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="hero-bottom-img">
                <img
                  src="images/hero-7-shape-light.png"
                  alt=""
                  className="img-fluid shape-light mx-auto"
                />
                <img
                  src="images/hero-7-shape-dark.png"
                  alt=""
                  className="img-fluid shape-dark mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Hero;
