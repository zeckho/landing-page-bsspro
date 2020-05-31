import React from "react";
import { Link, Events, animateScroll as scroll } from "react-scroll";
// import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      // console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark nav-light">
        <div className="container">
          {/* <!-- LOGO --> */}
          <Link className="navbar-brand logo" to="#">
            <img
              src="images/logo-dark.png"
              alt=""
              className="logo-dark"
              height="21"
            />
            <img
              src="images/logo-light.png"
              alt=""
              className="logo-light"
              height="21"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
              <li className="nav-item active">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#home"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#about"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Why BSS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#features"
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#pricing"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#course"
                  to="course"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  href="#contact"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="login"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Login
                </Link>
              </li>
            </ul>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-sm btn-warning">
                Free Trial
              </button>
              <button type="button" className="btn btn-sm btn-info">
                Open Acc. Sekuritas
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
