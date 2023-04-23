import React from 'react'
// // import Carousel from './Image'
// import {
//   Col,
//   Row,
//   Button

// } from "reactstrap";
import Carousel from './carousel/Carousel';
import About from './About/About';
import Media from './Media/Media';
export default function Content() {
  
  return (
    <div className="page-content">
        <Carousel />
        <About />
        <Media />
    </div>
  )
}
