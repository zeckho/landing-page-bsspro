import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Counter Start --> */}
        <section className="section counter-bg">
          <div className="counter-bg-overlay"></div>
          <div className="container">
            <div className="row align-items-center" id="counter">
              <div className="col-lg-3 col-md-6">
                <div className="mb-4 mb-lg-0">
                  <h2 className="text-white mb-4">Important Facts</h2>
                  <p className="f-15 text-white-70 mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                  {/* <a href="" className="btn btn-light">Read More <span className="ml-2 right-icon">&#8594;</span></a> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-box-1 text-center px-4 py-5 mb-4 mb-lg-0">
                  <div className="text-white">
                    <img
                      src="images/icon/icon-1.png"
                      alt=""
                      className="img-fluid mx-auto d-blok"
                    />
                    <h1 className="mb-2 mt-3">
                      <span className="counter-value mt-4" data-count="620">
                        0
                      </span>
                      +
                    </h1>
                    <p className="mb-0 text-white-70">Successful Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-box-1 text-center px-4 py-5 mb-4 mb-lg-0">
                  <div className="text-white">
                    <img
                      src="images/icon/icon-2.png"
                      alt=""
                      className="img-fluid mx-auto d-blok"
                    />
                    <h1 className="mb-2 mt-3">
                      <span className="counter-value mt-4" data-count="1200">
                        0
                      </span>
                    </h1>
                    <p className="mb-0 text-white-70">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-box-1 text-center px-4 py-5 mb-4 mb-lg-0">
                  <div className="text-white">
                    <img
                      src="images/icon/icon-3.png"
                      alt=""
                      className="img-fluid mx-auto d-blok"
                    />
                    <h1 className="mb-2 mt-3">
                      <span className="counter-value mt-4" data-count="450">
                        0
                      </span>
                    </h1>
                    <p className="mb-0 text-white-70">Awards Win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Counter End --> */}
      </div>
    );
  }
}

export default Counter;