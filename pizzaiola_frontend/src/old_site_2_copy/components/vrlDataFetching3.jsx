import React, { Component } from 'react' ;
import axios from 'axios' ;

import MaterialTable from "material-table";


const ELASTIC_INDEX = ['_all','opac_libros','opac_articulos_revistas','opac_tesis'] ;
const SEARCH_TERM = 'amelia' ; 
const API_URL = 'http://biblioteca.ccpadrevarela.org:19200/'+  ELASTIC_INDEX[0] + '/_search?q=' + SEARCH_TERM ;


export default class AxiosFetching extends Component{

state = {

    recursos: [], 
    proto_signatura: [],
    proto_tipo_recurso : [],
    proto_titulo : [],
    proto_autor : [],
    proto_autor2 : [],
    proto_resumen : [],
    proto_isbn : [],
    proto_editorial: [],
    proto_localizacion: [],
    proto_results_count: [],



  };
  componentDidMount() {
    const url = `${API_URL}` ;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ recursos: data['hits']['hits'] })
      this.setState({ proto_results_count: data['hits']['total']});
      this.setState({ proto_tipo_recurso: data['hits']['hits'].map(biblio_res => biblio_res['_index'])});
      this.setState({ proto_titulo: data['hits']['hits'].map(biblio_res => biblio_res._source['título'])});
      this.setState({ proto_autor: data['hits']['hits'].map(biblio_res => biblio_res._source['autor']['nombre_autor'])});
      this.setState({ proto_autor2: data['hits']['hits'].map(biblio_res => biblio_res._source['autor2']['nombre_autor'])});
      this.setState({ proto_resumen: data['hits']['hits'].map(biblio_res => biblio_res._source['resumen'])});
      this.setState({ proto_isbn: data['hits']['hits'].map(biblio_res => biblio_res._source['isbn'])});
      this.setState({ proto_editorial: data['hits']['hits'].map(biblio_res => biblio_res._source['editorial'])});
      this.setState({ proto_localizacion: data['hits']['hits'].map(biblio_res => biblio_res._source['localización'])});
    
  
      console.log(this.state.proto_results_count) ; 
      console.log(this.state.proto_tipo_recurso) ;
      console.log(this.state.proto_titulo) ;
      console.log(this.state.proto_autor) ;
      console.log(this.state.proto_autor2) ;
      console.log(this.state.proto_resumen) ;
      console.log(this.state.proto_isbn) ;
      console.log(this.state.proto_editorial) ;
      console.log(this.state.proto_localizacion) ;

     })
  }

  renderTableData() {
    return this.state.recursos.map((biblio_resources, index) => {
       const { tipo_recurso,signatura,titulo,autor,autor2,resumen,isbn,editorial,localizacion } = biblio_resources //destructuring
       return (
          <tr key={signatura}>
             <td>{signatura}</td>
             <td>{tipo_recurso}</td>
             <td>{titulo}</td>
             <td>{autor}</td>
             <td>{autor2}</td>
             <td>{resumen}</td>
             <td>{isbn}</td>
             <td>{editorial}</td>
             <td>{localizacion}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }

}