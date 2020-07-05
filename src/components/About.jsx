import React from "react";
import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <Element name="about" className="section bg-light">
        {/* About us Start */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="text-center mb-5">
                <h2 className="text-uppercase mb-0">WHY BSS</h2>
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
            <div className="col-lg-5 about-img">
              <img
                src="images/bsspro/about.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="text-muted mt-5 mt-lg-0">
                <p className="mb-4 f-20">
                  Trading Saham menjadi sangat mudah untuk anda{" "}
                  <b>
                    Karyawan, Pensiunan, Wirausaha, Ibu Rumah Tangga, Pegawai,
                    dan semua profesi
                  </b>
                  . Bersama BSS simple trading meraih kesempatan untuk
                  memperoleh <b>Hidup yang Lebih Baik</b> dari Trading Saham.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* About us End */}
      </Element>
    );
  }
}

export default About;
