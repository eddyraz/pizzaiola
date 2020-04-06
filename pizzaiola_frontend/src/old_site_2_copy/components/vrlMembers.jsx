import React, { Component } from 'react' ;

import TeamMember01 from '../assets/img/team/yanais.jpg' ; 
import TeamMember02 from '../assets/img/team/yanaisy.jpg' ;
import TeamMember03 from '../assets/img/team/jenny.jpg' ;
import TeamMember04 from '../assets/img/team/carolina.jpg' ;
import TeamMember05 from '../assets/img/team/alejandro.jpg' ;




export default class Members extends Component {
    render() {
      return (
        <section id="team" className="section">
        <div className="container">  
          <h1 className="section-title wow fadeInDown" data-wow-delay=".5s">
            Equipo de la Biblioteca
          </h1>
          <p className="section-subcontent">Somos un equipo de profesionales comprometidos con nuestra labor y nuestros usuarios 
          </p>      
          <div className="row">          
            <div className="col-sm-6 col-md-3">
              <div className="team-item wow fadeInUpQuick" data-wow-delay="1s">
                <figure className="team-profile">
                  <img src={ TeamMember01 } alt=""/>
                  <figcaption className="our-team">
                    <div className="details">
                      <p className="content-white">
                      MSc. Yanais Barzagas Medina, Directora de la Biblioteca del Centro Cultural 
                      P. Félix Varela. Graduada en el año 2005 en Información Científico- Técnica 
                      y Bibliotecología y en el 2013 en la Maestría Desarrollo Social. 
                      Labora en la Biblioteca desde su fundación.
                      </p>
                     <div className="orange-line"></div>
                     <div className="social"> 
                       <a className="facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a> 
                       <a className="twitter" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a> 
                       <a className="google-plus" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a>
                     </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="info">
                  <h2>
                  Yanais Barzaga Medina
                  </h2>
                  <div className="orange-line"></div>
                  <p>
                   Directora de la Biblioteca 
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-sm-6 col-md-3">
              <div className="team-item wow fadeInUpQuick" data-wow-delay="1.4s">
               <figure className="team-profile">
                   <img src={ TeamMember02 } alt=""/>
                  <figcaption className="our-team">
                    <div className="details">
                      <p className="content-white">
                      Lic. Yanaisy Martínez Blanco especialista en información de la Biblioteca del CCPFV. 
                      Graduada en Información Científico-Técnica y Bibliotecología en 
                      la Universidad de la Habana en 2005, experiencia en la actividad bibliotecaria 
                      de más 12 años. Labora en la Biblioteca desde su fundación. Ha participado 
                      en diferentes cursos y eventos, en calidad de ponente, vinculados a la actividad. 
                      Actualmente cursa la Maestría en Bioética de la Universidad Católica 
                      de Valencia San Vicente Mártir, en el Instituto de Bioética Juan Pablo II.
                      </p>
                     <div className="orange-line"></div>
                     <div className="social"> 
                       <a className="facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a> 
                       <a className="twitter" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a> 
                       <a className="google-plus" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a>
                     </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="info">
                  <h2>
                  Yanaisy Martínez Blanco
                  </h2>
                  <div className="orange-line"></div>
                  <p>
                    Bibliotecaria  
                  </p>
                </div>
              </div>
            </div>


            


  
            <div className="col-sm-6 col-md-3">
             
              <div className="team-item wow fadeInUpQuick" data-wow-delay="1.8s">
                <figure className="team-profile">
                    <img src={ TeamMember03 } alt=""/>
                  <figcaption className="our-team">
                    <div className="details">
                      <p className="content-white">
                      Lic. Jenny Martínez Lara, especialista en información de la Biblioteca del CCPFV. 
                      Graduada en Tecnología de la Salud. Perfil: Gestión de la Información, 
                      del Instituto superior de Ciencias Médicas, en 2008. Experiencia en la actividad 
                      bibliotecaria de más 25 años. Labora en la Biblioteca desde su fundación. 
                      Ha participado en diferentes cursos y eventos vinculados a la actividad.
                      </p>
                     <div className="orange-line"></div>
                     <div className="social"> 
                       <a className="facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a> 
                       <a className="twitter" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a> 
                       <a className="google-plus" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a>
                     </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="info">
                  <h2>
                  Jenny Martínez Lara
                  </h2>
                  <div className="orange-line"></div>
                  <p>
                    Bibliotecaria
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6 col-md-3">
              <div className="team-item wow fadeInUpQuick" data-wow-delay="2.2s">
                <figure className="team-profile">
                  <img src={ TeamMember04 } alt=""/>
                  <figcaption className="our-team">
                    <div className="details">
                      <p className="content-white">
                      Tec. Carolina Sánsón Aguiar técnico en información de la Biblioteca del CCPFV. 
                      Graduada de Bachiller Técnico de Bibliotecología y Técnicas Documentarias en 2011.  
                      Con experiencia de 8 años en la actividad bibliotecaria. Labora en la Biblioteca 
                      desde su fundación. Ha participado en diferentes cursos y eventos vinculados a la actividad.
                      </p>
                     <div className="orange-line"></div>
                     <div className="social"> 
                       <a className="facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a> 
                       <a className="twitter" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a> 
                       <a className="google-plus" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a>
                     </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="info">
                  <h2>
                    Carolina Sansón Aguiar
                  </h2>
                  <div className="orange-line"></div>
                  <p>
                    Bibliotecaria
                  </p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-3">
              <div className="team-item wow fadeInUpQuick" data-wow-delay="1.4s">
               <figure className="team-profile">
                   <img src={ TeamMember05 } alt=""/>
                  <figcaption className="our-team">
                    <div className="details">
                      <p className="content-white">
                      Especialista en Información de la Biblioteca del Centro Cultural Padre Félix Varela 
                      desde su fundación (2015). Técnico “A” en Telecomunicaciones (1999). 
                      Obtuvo el grado de Bachiller en Teología por la Pontificia Universidad 
                      Santo Tomás de Aquino (Angelicum) de Roma (2013). Experiencia multicultural 
                      y de servicio a la comunidad por nueve años como misionero en áreas vulnerables 
                      y/o de extrema pobreza en algunos países de América Latina, Europa y África. 
                      Ha participado en diferentes cursos y eventos vinculados a la conservación de documentos. 
                      Domina el idioma inglés (nivel avanzado) e italiano (nivel intermedio).
                      </p>
                     <div className="orange-line"></div>
                     <div className="social"> 
                       <a className="facebook" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a> 
                       <a className="twitter" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a> 
                       <a className="google-plus" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a>
                     </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="info">
                  <h2>
                    Alejandro Martínez Rodríguez
                  </h2>
                  <div className="orange-line"></div>
                  <p>
                    Bibliotecario  
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
        )
    }
  }; 
