import React, { Component } from 'react'
import axios from 'axios' ;
import {default as StyledNavBar} from './components/navBar' ;
//import LinearDeterminate from './components/LinearProgress' ;


//Para la Tabla
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends Component{

  

    
   
    state = {

        //Prueba
        

        nombre_recurso: 'amelia', 
        recursos_opac:[],
        consulta: [],
        indice: '', 
        query: '',
        datos: '' ,
        datos_recolectados: [],
        datos_indice: [], 
        datos_a_mostrar: [],
        datos_finales: [],


      };
    

      onInputChange(event) {
        console.log(event.target.value);
        this.setState({ nombre_recurso: StyledNavBar.input });
      };  

      onKeyPress = event => {
        if (event.key === 'Enter') {
            this.setState({ nombre_recurso: event.target.value })
        }
    }


    async componentDidMount() {

      
      
      const {data: recursos_opac}  = await axios.get('http://biblioteca.ccpadrevarela.org:19200/_search?q=' + this.state.indice + this.state.query ,
      {
        params: {
            
            q: this.state.nombre_recurso,
            sort: 'signatura:asc',
            size: 10000
         },
      });
     
      this.state.datos = recursos_opac['hits']['hits'] ;
      
      this.state.datos_recolectados = this.state.datos.map(resultado => resultado['_source']);
      this.state.datos_indice = this.state.datos.map(resultado => resultado['_index']);
      
      console.log(this.state.datos_recolectados) ; 
      this.setState(this.state.datos_recolectados) ;
      console.log(this.state.nombre_recurso) ;


}
    
    
render() {
  return (
      <div>
      {/*}  <LinearDeterminate />   */}
          <React.Fragment>
          <StyledNavBar
           placeholder="Search forecast for your favorite cities..."
           value={this.state.term}
           writeInput={this.onInputChange}
           onKeyPress={this.onKeyPress}
           
          />



      <table className="table table-hover">
      <thead>
      <tr>
    {/*  <th scope="col">tipo de recurso</th> */}
      <th scope="col">signatura</th>
      <th scope="col">autor</th>
      <th scope="col">autor2</th>
      <th scope="col">título</th>
      <th scope="col">descriptores</th>
    {/*  <th scope="col">editorial</th> */}
      <th scope="col">resumen</th>
      <th scope="col">localizacion</th>
      </tr>
      </thead>
      <tbody>
    
        {this.state.datos_recolectados.map(dato => {
          return ( <tr>
          <td>{dato['signatura']}</td>
          <td>{dato['autor']['nombre_autor']}</td>
          <td>{dato['autor2']['nombre_autor']}</td>
          <td>{dato['título']}</td>
          <td>
          {dato['descriptores'].map( descr => (descr['nombre_descriptor']))}
          </td>
        {/*   <td>{dato['editorial']['nombre_editorial']}</td> */}
          <td>{dato['resumen']}</td>
          <td>{dato['localización']}</td>
          </tr>
        )})}
       
      
      </tbody>
</table>
      

          </React.Fragment>

      </div>
        )
    }
}

export default App ;

