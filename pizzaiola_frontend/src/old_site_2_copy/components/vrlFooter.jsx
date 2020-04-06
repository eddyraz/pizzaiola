import React, { Component } from 'react' ;

import TeamMember01 from '../assets/img/team/yanais.png' ; 
import TeamMember02 from '../assets/img/team/yanaisi.png' ;
import TeamMember03 from '../assets/img/team/yeni.png' ;
import TeamMember04 from '../assets/img/team/carolina.png' ;
import TeamMember05 from '../assets/img/team/alejandro.png' ;

export default class Footer extends Component {

  

  constructor(){
    super();

    this.state = {
      img_name: '',
      img_title:'',
      img_path: '',
      img_link: '',
      
      FooterImages: [],
      FooterImagesImportPaths: []

    };

    this.fetchFooterImages = this.fetchFooterImages.bind(this);
  }




  componentDidMount(){
    this.fetchFooterImages();
    

  };

  fetchFooterImages(){
    fetch('http://localhost:3001/api/flickr_images')
    .then(res => res.json())
    .then(data => {
      this.setState({FooterImages: data});
      console.log(this.state.FooterImages);

    });

  }


  

  render() {
    return (
      <div>
          <footer>
          
            <div className="container">
          
              <div className="row section">
          
                <div className="footer-widget col-md-3 col-xs-12 wow fadeIn">
                  <h3 className="small-title">
                    Nuestra Biblioteca en los medios
                  </h3>
                  <p>
                    Tenemos presencia en las redes sociales para una mayor visibilidad, 
                  </p> 
                  <p>Allí tambien podrá encontrar boletines, nuestras ultimas 
                     adquisiciones y acceso a eventos públicos.</p>
                  <div className="social-footer">
                    <a href="#cosmetics"><i className="fa fa-facebook icon-round"></i></a>
                    <a href="https://twitter.com/ccpfv"><i className="fa fa-twitter icon-round"></i></a>
                    <a href="#cosmetics"><i className="fa fa-instagram icon-round"></i></a>
                    <a href="#cosmetics"><i className="fa fa-youtube icon-round "></i></a>
                  </div>           
                </div>
                

               {/* 
                
                <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".2s">
                  <h3 className="small-title">
                    ...Pues y también twiteamos
                  </h3>
                  <ul className="recent-tweets">
                    <li className="tweet">
                      My <a href="#cosmetics">@Quora</a>                
                      <span className="tweet-text">
                        answer to What's the best FAQ plugin for WordPress?
                      </span>
                      <a href="#cosmetics">qr.ae/RFTbIGa</a> 
                      <span className="tweet-date">
                        August 21, 2015 10:29pm
                      </span>
                    </li>
                    
                    
                    <li className="tweet">
                      WPB Advanced FAQ | Probably The Best WordPress FAQ Plugin <a href="#cosmetics">wpbean.com/wpb-advanced-faq-pr…</a>               
                      <span className="tweet-text">
                        via
                      </span>
                      <a href="#cosmetics">@wpbean</a> 
                      <span className="tweet-date">
                        August 19, 2015 8:49 am
                      </span>
                    </li>
                    
                    
                  </ul>
                </div>
      
               */}
                
                <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".5s">
                  <h3 className="small-title">
                    Nuestro Equipo de Trabajadores
                  </h3>
                  <div className="plain-flicker-gallery">
                    
                               
                               <a href="#cosmetics" title="Yanais Barzagas Medina"><img src={ TeamMember01 } alt="member_image"/></a>
                               <a href="#cosmetics" title="Yanaisy Martínez Blanco "><img src={ TeamMember02 } alt="member_image"/></a>
                               <a href="#cosmetics" title="Jenny Martínez Lara"><img src={ TeamMember03 } alt="member_image"/></a>
                               <a href="#cosmetics" title="Alejandro Martínez Rodríguez"><img src={ TeamMember04 } alt="member_image"/></a>
                               <a href="#cosmetics" title="Carolina Sansón Aguiar"><img src={ TeamMember05 } alt="member_image"/></a>
                               

               
                  </div>
                </div>
      
                
                <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".8s">
                  <h3 className="small-title">
                    SUSCRIBASE A NUESTRO BOLETÍN
                  </h3>
                <div className="contact-us">
                    <p>Contáctenos para enviarle nuestro boletín</p>
                    <form>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Nombre y Apellidos"/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="correo electrónico"/>
                    </div>
                    <button type="submit" className="btn btn-common">Suscribirse</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div id="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="copyright-text">
                      ©  2020 <a href="https://www.miraliasoft.com">MIRALIASOFT.</a> Todos los derechos reservados.
                    </p>
                  </div>
                  <div className="col-md-6  col-sm-6">
                    <ul className="nav nav-inline  justify-content-end ">
                      <li className="nav-item">
                        <a className="nav-link active" href="#cosmetics">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#cosmetics">Mapa del Sitio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#cosmetics">Politica de Privacidad</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#cosmetics">Terminos de Uso</a>
                      </li>
                    </ul>        
                  </div>
                </div>
              </div>
            </div>
            
            
          </footer>
         
      
            </div>
          )
  }      
}      
      