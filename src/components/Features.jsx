import React from "react";
import { Element } from "react-scroll";

class Features extends React.Component {
  render() {
    return (
      <Element name="features" className="section">
        {/* <!-- Fetures Start --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="text-center mb-5">
                <h4 className="text-uppercase mb-0">Features</h4>
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
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="service-img mr-lg-5 mb-5 mb-lg-0">
                <img
                  src="images/service.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-box service-box-1 p-4">
                    <div className="service-icon icon-primary mb-4 mt-3">
                      <i className="mdi mdi-account-group"></i>
                    </div>
                    <h4 className="mb-3 service-title">Expert Mentor</h4>
                    <p className="text-muted f-15">
                      Dipandu oleh mentor profesional & konsultasi analis saham.
                    </p>
                  </div>
                  <div className="service-box service-box-1 p-4">
                    <div className="service-icon icon-danger mb-4 mt-3">
                      <i className="mdi mdi-waves"></i>
                    </div>
                    <h4 className="mb-3 service-title">Trading Alert</h4>
                    <p className="text-muted f-15">
                      Setting personalisasi Info Saham pilihan.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-box service-box-1 p-4 mt-md-5">
                    <div className="service-icon icon-success mb-4 mt-3">
                      <i className="mdi mdi-check-all"></i>
                    </div>
                    <h4 className="mb-3 service-title">Metode yang Terukur</h4>
                    <p className="text-muted f-15">
                      Dengan formula analisa sederhana untuk anda gunakan dalam
                      trading.
                    </p>
                  </div>
                  <div className="service-box service-box-1 p-4">
                    <div className="service-icon icon-info mb-4 mt-3">
                      <i className="mdi mdi-coin"></i>
                    </div>
                    <h4 className="mb-3 service-title">Money Management</h4>
                    <p className="text-muted f-15">
                      Rahasia mengelola keuangan dalam trading saham.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Fetures End --> */}
      </Element>
    );
  }
}

export default Features;
