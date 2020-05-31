import React from "react";
import { Element } from "react-scroll";

class Pricing extends React.Component {
  render() {
    return (
      <Element name="pricing" className="section">
        {/* <!-- Pricing Start --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="text-center mb-5">
                <h4 className="text-uppercase mb-0">Premium Member</h4>
                <div className="my-3">
                  <img
                    src="images/title-border.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <p className="text-muted f-14">
                  Biaya investasi untuk memulai.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="pricing-box rounded position-relative px-4 py-3 mb-4 bg-primary ">
                <h3 className="pricing-title title text-uppercase text-center mt-5 mb-4 text-white">
                  BENEFIT
                </h3>
                <hr />
                <div className="text-muted py-3 text-left text-white">
                  <p className="mdi mdi-menu-right">
                    Info Trading plan setiap hari
                  </p>
                  <p className="mdi mdi-menu-right">Info live saat jam bursa</p>
                  <p className="mdi mdi-menu-right">
                    Info pagi saat market open
                  </p>
                  <p className="mdi mdi-menu-right">Konsultasi portofolio</p>
                  <p className="mdi mdi-menu-right">
                    Arahan & bimbingan saat trading
                  </p>
                </div>
                <p className="text-muted f-15 mb-4"></p>
                {/* <a href="" className="btn btn-outline-primary">Buy Now <span className="ml-2 right-icon">&#8594;</span></a> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pricing-box rounded text-center position-relative px-4 py-5 mb-4">
                <div className="ribbon">
                  <p className="mb-0 text-white f-13">-16.7%</p>
                </div>
                <h3 className="pricing-title title text-uppercase mt-3 mb-4">
                  1 Bulan
                </h3>
                <hr />
                <h5 className="mt-3 mb-4 text-muted">
                  <s>Rp. 300.000,-</s>
                </h5>
                <div className="text-muted py-3">
                  <p className="">Channel Telegram</p>
                  <p className="">Group Diskusi</p>
                  <p className="">Aplikasi ATIOS</p>
                </div>
                <p className="f-15 mb-4">
                  <span className="d-block f-18">
                    <b>Rp. 250.000,-</b>
                  </span>
                </p>
                <a href="" className="btn btn-outline-primary">
                  Daftar <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pricing-box rounded text-center position-relative px-4 py-5 mb-4">
                <div className="ribbon">
                  <p className="mb-0 text-white f-13">-33.3%</p>
                </div>
                <h3 className="pricing-title title text-uppercase mt-3 mb-4">
                  4 Bulan
                </h3>
                <hr />
                <h5 className="mt-3 mb-4 text-muted">
                  <s>Rp. 1.200.000,-</s>
                </h5>
                <div className="text-muted py-3">
                  <p className="">Channel Telegram</p>
                  <p className="">Group Diskusi</p>
                  <p className="">Aplikasi ATIOS</p>
                  <p className="">Signal Saham</p>
                </div>
                <p className="f-15 mb-4">
                  <span className="d-block f-18">
                    <b>Rp. 800.000,-</b>
                  </span>
                </p>
                <a href="" className="btn btn-outline-primary">
                  Daftar <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pricing-box rounded text-center position-relative px-4 py-5 mb-4">
                <div className="ribbon">
                  <p className="mb-0 text-white f-13">-50%</p>
                </div>
                <h3 className="pricing-title title text-uppercase mt-3 mb-4">
                  12 Bulan
                </h3>
                <hr />
                <h5 className="mt-3 mb-4 text-muted">
                  <s>Rp. 3.600.000,-</s>
                </h5>
                <div className="text-muted py-3">
                  <p className="">Channel Telegram</p>
                  <p className="">Group Diskusi</p>
                  <p className="">Aplikasi ATIOS</p>
                  <p className="">Signal Saham</p>
                  <p className="">Group Bot Chat</p>
                </div>
                <p className="f-15 mb-4">
                  <span className="d-block f-18">
                    <b>Rp. 1.800.000,-</b>
                  </span>
                </p>
                <a href="" className="btn btn-outline-primary">
                  Daftar <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pricing End --> */}
      </Element>
    );
  }
}

export default Pricing;
