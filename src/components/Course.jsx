import React from "react";
import { Element } from "react-scroll";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Course extends React.Component {
  render() {
    return (
      <Element name="course" className="section bg-light">
        {/* Courses Start */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="text-center mb-5">
                <h4 className="text-uppercase mb-0">Workshop Pilihan</h4>
                <div className="my-3">
                  <img
                    src="images/title-border.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              nav
              margin={8}
              autoplay={true}
            >
              <div className="item">
                <div className="testi-content m-3 p-4 position-relative">
                  <div className="testi-icon">
                    <i className="mdi mdi-format-quote-open" />
                  </div>
                  <img
                    src="images/courses/course-1.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                  <h5 className="title mb-1 mt-4">
                    Pelatihan I - SPM Simple Trading
                  </h5>
                  <ul className="list-unstyled f-15 text-warning mb-0">
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                  <p className="text-muted mb-4 position-relative f-15">
                    Training dasar Trading Saham dan Pasar Modal di Indonesia
                    untuk pemula. Belajar saham mulai dari nol, apa itu saham,
                    bagaimana profit dari saham, cara beli, cara jual, &amp;
                    cara mencairkan dana.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="testi-content m-3 p-4 position-relative">
                  <div className="testi-icon">
                    <i className="mdi mdi-format-quote-open" />
                  </div>
                  <img
                    src="images/courses/course-2.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                  <h5 className="title mb-1 mt-4">
                    Pelatihan II - Cerdas Mandiri
                  </h5>
                  <ul className="list-unstyled f-15 text-warning mb-0">
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                  <p className="text-muted mb-4 position-relative f-15">
                    Workshop analisa Saham, analisa trend, pola, tips &amp; trik
                    ODT, scalping &amp; saving memastikan anda bisa mandiri
                    setelah belajar.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="testi-content m-3 p-4 position-relative">
                  <div className="testi-icon">
                    <i className="mdi mdi-format-quote-open" />
                  </div>
                  <img
                    src="images/courses/course-3.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                  <h5 className="title mb-1 mt-4">
                    Pelatihan III - Full Series
                  </h5>
                  <ul className="list-unstyled f-15 text-warning mb-0">
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item mr-1">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                  <p className="text-muted mb-4 position-relative f-15">
                    Workshop full Technical Analysis. Belajar mempelajari
                    seluruh metode dari BSS, menjadikan anda seorang Trader yang
                    handal, termasuk saat Live Trade.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* Courses End */}
      </Element>
    );
  }
}

export default Course;
