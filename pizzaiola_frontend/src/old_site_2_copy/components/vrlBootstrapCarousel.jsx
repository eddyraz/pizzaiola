import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' ;


import  vrlCrslImg_1 from  '../assets/img/slider/bg-1.jpg' ;
import  vrlCrslImg_2 from  '../assets/img/slider/bg-2.jpg' ;
import  vrlCrslImg_3 from  '../assets/img/slider/bg-3.jpg' ;
import  vrlCrslImg_4 from  '../assets/img/slider/bg-4.jpg' ;



import $ from 'jquery' ;
import 'popper.js' ;
import 'bootstrap' ;
import 'mixitup' ;



export default class VrlCarousel extends Component {

 
  


  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src={ vrlCrslImg_1 }
      alt="First slide"
    />
    <Carousel.Caption>
        
                <h2>
                  Fomentamos el Conocimiento
                </h2>
                <div className="vrlCrlText">
                <h3> Ofrecemos servicios tradicionales y  especializados con valor agregado dirigidos a estudiantes, profesores e investigadores </h3>
                </div>  
                <a className="btn btn-md btn-common" href="/servicios">
                  <i className="fa fa-book">
                  </i>
                  Conozca nuestros Servicios
                </a>
              
              </Carousel.Caption>
               

  </Carousel.Item>
  
  <Carousel.Item>
 
    <img 
      className="d-block w-100"
      src={ vrlCrslImg_2 }
      alt="Third slide"
    />

    <Carousel.Caption>
    
               <h2>
                  Brindamos información con valor agregado
                </h2>
                <div className="vrlCrlText">
                <h3>
                  Fondo Bibliográfico especializado en Ciencias Sociales y Humanísticas.
                </h3>
                </div>
                <a className="btn btn-common btn-md " href="http://biblioteca.ccpadrevarela.org:3001/opac">
                  <i className="fa fa-book">
                  </i>
                  Consulte nuestro catálogo en línea
                </a>
          
          </Carousel.Caption>
            

  </Carousel.Item>
    

  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src={ vrlCrslImg_3}
      alt="Third slide"
    />

    <Carousel.Caption>
     
                <h2>
                Exposiciones bibliográficas y afines, cursos y actividades culturales
                </h2>
                <div className="vrlCrlText">
                <h3>
                  Puede participar en el taller de Lecturas de Navidad, presentaciones de libros, diversas conferencias y exposiciones fotográficas
                  y/o bibiográficas.
                  
                </h3>
                </div>
                <a className="btn btn-common btn-md " href="#cosmetics">
                  <i className="fa fa-book">
                  </i>
                  Eventos Culturales
                </a>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src={ vrlCrslImg_4}
      alt="Third slide"
    />

    <Carousel.Caption>
     
                <h2>
                  Boletín de Novedades Bibliográficas
                </h2>
                <div className="vrlCrlText">
                <h3>
                  Puede conocer las nuevas adquisiciones de la Biblioteca.
                </h3>
                </div>
                <a className="btn btn-common btn-md " href="/boletines">
                  <i className="fa fa-book">
                  </i>
                  Boletines
                </a>
    </Carousel.Caption>
  </Carousel.Item>
    
</Carousel>
      </div>
    )
  }
}
