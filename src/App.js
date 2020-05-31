import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './scss/style.scss';

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Course from './components/Course'
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Loader />
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Course />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
