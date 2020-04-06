import React, { Component } from 'react'

import  esnCrslImg_1 from  '../assets/img/slider/bg-1.jpg' ;
import  esnCrslImg_2 from  '../assets/img/slider/bg-2.jpg' ;
import  esnCrslImg_3 from  '../assets/img/slider/bg-3.jpg' ;


export default class ESNCarousel extends Component {
  render() {
    return (
      <div>
        
      
      <div id="carousel-area">
        <div id="carousel-slider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-slider" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-slider" data-slide-to="1"></li>
            <li data-target="#carousel-slider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={ esnCrslImg_1 } alt=""/>
              <div className="carousel-caption">
                <h2>
                  ESNOEI Services
                </h2>
                <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui</h3>
                <a className="btn btn-lg btn-common" href="#cosmetics">
                  <i className="fa fa-cloud">
                  </i>
                  Purchase VPS
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ esnCrslImg_2 } alt=""/>
              <div className="carousel-caption">
                <h2>
                  Dedicated servers
                </h2>
                <h3>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                </h3>
                <a className="btn btn-common btn-lg " href="#cosmetics">
                  <i className="fa fa-book">
                  </i>
                  Product description
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ esnCrslImg_3 } alt=""/>
              <div className="carousel-caption">
                <h2>
                  Refreshing Cool Design
                </h2>
                <h3>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                </h3>
                <a className="btn btn-common btn-lg " href="#cosmetics">
                  <i className="fa fa-download">
                  </i>
                  Download
                </a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
            <span className="carousel-control carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
            <span className="carousel-control carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>  


      </div>
    )
  }
}
