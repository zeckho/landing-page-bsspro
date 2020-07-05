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
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark nav-light">
        <div className="container">
          {/* <!-- LOGO --> */}
          <Link className="navbar-brand logo" to="#">
            <img
              src="images/logo-bss.png"
              alt=""
              className="logo-dark"
              height="40"
            />
            <img
              src="images/logo-bss.png"
              alt=""
              className="logo-light"
              height="40"
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
                <a
                  href="http://training.bsspro.id"
                  className="nav-link"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </li>
            </ul>
            <div className="btn-group" role="group" aria-label="Basic example">
              <a
                href="https://bit.ly/FreeGroupBSS"
                className="btn btn-sm btn-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Trial
              </a>
              <a
                href="https://www.mncsekuritas.id/opening_account/sales/C6/BSS"
                className="btn btn-sm nav-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buka Akun Saham
              </a>
            </div>
          </div>
        </div>

        <button onClick={this.scrollToTop} className="top-button" id="myBtn">
          <i className="mdi mdi-chevron-up"></i>
        </button>
      </nav>
    );
  }
}

export default Navbar;
