import React, { Component } from 'react' ;
//import Carousel from './esnCarousel' ;
import VrlCarousel  from './vrlBootstrapCarousel' ;
import Blog from './vrlBlog' ;
import Contact from './vrlContact';
import About from './vrlAbout' ;
import Members from './vrlMembers' ;

export default class Home extends Component {
  render() {
    return (
      <div>
        <VrlCarousel></VrlCarousel>
        <About></About>
        <Members></Members>

      </div>
    )
  }
  
  


}


