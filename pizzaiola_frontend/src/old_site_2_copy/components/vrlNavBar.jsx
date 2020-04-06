import React, { Component } from 'react'


    import VrlLogo from '../assets/img/logo.svg'  
    import '../assets/img/favicon.png'
    //Bootstrap 
    import 'bootstrap/dist/css/bootstrap.min.css'
    //Main Style
    import '../assets/css/main.css'
    
    //Slicknav Css
    import "../assets/css/slicknav.css" ;

    //Responsive Style
    import '../assets/css/responsive.css'
    //Fonts-->
    import '../assets/fonts/font-awesome/font-awesome.min.css'
    import '../assets/fonts/simple-line-icons.css'
     
    //Extras
    import '../assets/extras/owl/owl.carousel.css'
    import '../assets/extras/owl/owl.theme.css'
    import '../assets/extras/animate.css'
    import '../assets/extras/normalize.css'
    
    
    //import '../assets/extras/settings.css'

    //Color CSS Styles  
    
    import '../assets/css/colors/green.css'



export default class NavBar extends Component {
  render() {
    return (
    <div style={{ 'marginBottom': '81px' }}>
    
      
      
        <nav className="navbar navbar-expand-md fixed-top" style={{'backgroundColor': '#343a40' }} >
        <div className="container">
    

          <div className="navbar-header">
            <a className="navbar-brand" href="/home">
              <img src={ VrlLogo } alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>           
          </div>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link active" href="/home">Inicio<span className="sr-only">(current)</span></a>
              </li>
              
              <li className="nav-item active">
                <a className="nav-link active" href="/opac" aria-expanded="false">Catálogo en Linea</a>
              </li>

              <li className="nav-item active">
                <a className="nav-link active" href="/about" aria-expanded="false">Quienes Somos</a>
              </li>


              <li className="nav-item active">
                <a className="nav-link active" href="/blog" aria-expanded="false">Nuestro Boletín </a>
              </li>


              <li className="nav-item active">
                <a className="nav-link active" href="/contact" aria-expanded="false">Contáctenos </a>
              </li>
               

            </ul>
            <form className="form-inline">
              <div className="top_search_con">
                <input className=" mr-sm-2" type="text" placeholder="Busqueda ..."/>
                <span className="top_search_icon"><i className="icon-magnifier"></i></span>
              </div>            
            </form>
          </div>

          
          <ul className="wpb-mobile-menu">
            <li>
              <a className="active" href="index.html">Home</a>    
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
                <li><a href="about-us2.html">About Us 2</a></li>
                <li><a href="team-page.html">Team Members</a></li>                      
                <li><a href="services.html">Services</a></li> 
                <li><a href="service2.html">Services 2</a></li> 
                <li><a href="/contact">Contact Us</a></li> 
                <li><a href="pricing.html">Pricing</a></li> 
                <li><a href="404.html">404</a></li>
              </ul>                        
            </li>
            <li>
              <a href="#">Shortcodes</a>
              <ul>
                <li><a href="accordions.html">Accordions</a></li>
                <li><a href="tabs.html">Tabs</a></li>
                <li><a href="buttons.html">Buttons</a></li>
                <li><a href="skills.html">Progress Bars</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="clients.html">Clients</a></li>
                <li><a href="icon.html">Icon Boxes</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="carousel.html">Carousel</a></li>
                <li><a href="maps.html">Google Maps</a></li>
                <li><a href="pricing.html">Pricing tables</a></li>
                <li><a href="notification.html">Notification</a></li>
              </ul>                        
            </li>
            <li>
              <a href="#">Portfolio</a>
              <ul>
                <li><a href="portfolio-col-2.html">Portfolio 2 Columns</a></li>
                <li><a href="portfolio-item.html">Portfolio Single</a></li>
              </ul>                        
            </li>  
            <li>
              <a href="#">Blog</a>
              <ul>
                                    
                <li><a href="sidebar-left.html">Sidebar Left</a></li>
                <li><a href="blog-grids.html">Blog Grids</a></li>
              </ul>                        
            </li>              
            <li>
              <a href="/contact">Contact Us</a>
                 
            </li>  
          </ul>
         
        </div>
      </nav>
       
      </div>
      
    )
  }
}




