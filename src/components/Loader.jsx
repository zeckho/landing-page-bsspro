import React from 'react'

class Loader extends React.Component {
  render() {
    return (
      <div id="preloader">
        <div id="status">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;