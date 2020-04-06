import React , { Component } from 'react' ;

import ChoiceImg2 from "../assets/img/about/objetivos.jpg" ;

export default class Services extends Component{

    render() {
        return (
            <div className="service-section">


            <div className="col-sm-12 col-xs-12">

              <h2>SERVICIOS</h2> 
           <div className="row">
              <div className="texto-servicios col-md-8 col-sm-12 colxs-12">
              <div className="container">
              <div className="row">
              <ul>
                <li>Prestamo en Sala:
                <p>Se brinda para el uso del material bibliográfico en la sala de consulta de la Biblioteca.
                </p>
                </li>  

                <li>
                 Reprografía: 
                <p>se brinda para la reproducción total o parcial de los documentos.</p>
                </li>

                
                <li>
                  Referencia:
                  <p>
                  Se brinda para proveer información y ayudar a los usuarios, 
                  que no tienen claro que buscan, a identificar sus necesidades de información.
                  </p>
                </li>

                <li>
                Compilación de información:
                <p>
                Se brinda para entregar al usuario un conjunto de documentos sobre un tema en específico, 
                selecciona de la nueva literatura la de probable 
                relevancia o pertinencia, independientemente del formato en que ésta se publique.
                </p>
               
                </li>
                <li>
                Novedades Bibliográficas:
                <p>
                Se brinda a través del correo electrónico y en formato impreso en la Biblioteca, para ofrecer al usuario un listado de las nuevas adquisiciones. 
                
                </p>
                </li>
                
                <li>
                Exposiciones bibliográficas y afines, cursos y actividades culturales. 
                </li>

                </ul> 
                </div>



               </div>


                </div>

               <div className="col-md-4 col-sm-12 col-xs-12 wow animated fadeInRight" data-wow-delay=".3s">
               <div className="container">
               
               <div className="images">
                <img src={ChoiceImg2} alt="" />
               </div>
               </div>
               
                </div>

            </div> 


</div>

</div>

)}};