import React, { Component } from 'react' ;
import axios from 'axios' ;

import MaterialTable from "material-table";

//search form embedding
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Col from 'reactstrap/lib/Col';



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
    proto_rows: [],
    search_term: '',



  };



  componentDidMount() {
    const url = `${API_URL}` ;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ recursos: data['hits']['hits'] })
      this.setState({ proto_results_count: data['hits']['total']});
      this.setState({ proto_tipo_recurso: data['hits']['hits'].map(biblio_res => biblio_res['_index'])});
      this.setState({ proto_signatura: data['hits']['hits'].map(biblio_res => biblio_res._source['signatura'])});
      this.setState({ proto_titulo: data['hits']['hits'].map(biblio_res => biblio_res._source['título'])});
      this.setState({ proto_autor: data['hits']['hits'].map(biblio_res => biblio_res._source['autor']['nombre_autor'])});
      this.setState({ proto_autor2: data['hits']['hits'].map(biblio_res => biblio_res._source['autor2']['nombre_autor'])});
      this.setState({ proto_resumen: data['hits']['hits'].map(biblio_res => biblio_res._source['resumen'])});
      this.setState({ proto_isbn: data['hits']['hits'].map(biblio_res => biblio_res._source['isbn'])});
      this.setState({ proto_editorial: data['hits']['hits'].map(biblio_res => biblio_res._source['editorial'])});
      this.setState({ proto_localizacion: data['hits']['hits'].map(biblio_res => biblio_res._source['localización'])});
    
  
      console.log(this.state.proto_results_count) ;
      console.log(this.state.proto_signatura) ; 
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

  render() {
    return (
     <div className="container">
    
     {/*
     <div className="searchForm">
      <div className="container" style={{"backgroundColor":"d3f9d8"}}>
    <div className="row">
    <div className="search-terms col-md-8 col-sm-12 col-xs-12">
    
    <Form action='onSubmit={ this.handleClick(e)}'>
         
         <Label check>
           <div className="search-form-label" style={{"fontFamily":"Verdana","fontSize":"16"}}></div>
           Busqueda Simple
          </Label> 
          <Col> 
      <FormGroup>
        <Label for="searchFormTitle">Título</Label>
        <Input type="text" name="form-title" id="searchFormTitle" placeholder=""/>
      </FormGroup>
      </Col>
      
      <Col>
      <FormGroup>
        <Label for="searchFormAuthor">Autor</Label>
        <Input type="text" name="form-author" id="searchFormAuthor" placeholder="" />
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="searchFormNotes">Resumen</Label>
        <Input type="text" name="form-notes" id="searchFormNotes" placeholder="" />
      </FormGroup>
      </Col>

            <Col>
      <FormGroup>
        <Label for="searchFormEditorial">Editorial</Label>
        <Input type="text" name="q" id="searchFormEditorial" placeholder="" />
      </FormGroup>
      </Col>

            <Col>
      <FormGroup>
        <Label for="exampleEmail">Descriptor</Label>
        <Input type="text" name="q" id="searchFormDecriptor" placeholder="" />
      </FormGroup>
      </Col>
      



      <Button>Buscar</Button>
      <br/>
      <br/>
    
    </Form>
    </div>  
    </div>
    </div> 

     </div> 

     */}



      <div className="tableData">

      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="results-table">
        <MaterialTable
          title="Resultados Locales"
          columns={[
            {
              title: 'Signatura', field: 'signatura',
              cellStyle: {
              color: '#714B23'
              },
              headerStyle: {
                backgroundColor: '#e9fac8',
              }
            },
          { title: 'Tipo de recurso', field: 'tipo_recurso'},


            { title: 'Título', field: 'titulo' },
            { title: 'Autor', field: 'autor', type: 'numeric' },
            { title: 'Autor2', field: 'autor2' },
            { title: 'Resumen', field: 'resumen' },
            { title: 'ISBN', field: 'isbn' },
            { title: 'Editorial', field: 'editorial' },
            { title: 'Localización', field: 'localizacion' },


          ]}


          data={[

            { signatura:'4633-EJ.1-2008', tipo_recurso: 'libro', titulo: 'AMELIA PELAEZ, CERAMICA', autor: 'JUBRIAS, MARIA ELENA', autor2: '' , resumen: 'Este libro es una obra de referencia sobre la cerámica y su relación con la creación artística de Amelia Peláez. En él la autora plasma toda la vitalidad y diversidad de la cerámica de Amelia. ', 
            isbn: '978-84-936047-3-8', editorial: 'EDICIONES VANGUARDIA CUBANA',localizacion: 'D:\Localización\Estante 20.docx'},
            { signatura:'978-959-7126-52-2', tipo_recurso: 'libro', titulo: 'AMELIA PELAEZ', autor: 'ALONSO, ALEJANDRO G.', autor2: '' , resumen: 'Pendiente Resumen', isbn: '890-367657657657', editorial: 'EDICIONES BOLOÑA',localizacion: 'D:\Localización\Estante 37.docx'},
            { signatura:'', tipo_recurso: 'libro', titulo: 'FOUR CUBAN MODERNISTS: MARIO CARREÑO, AMELIA PELAEZ, FIDELIO PONCE RENE PORTOCARRERO', autor: 'LUIS, CARLOS M' , autor2: '', resumen: 'Biblioteca Cubana\r\nNota: Texto Bilingue.', isbn: '890-367657657657', editorial: 'CONTEMPORARY FINE ART SINCE',localizacion: 'D:\Localización\Estante 37.docx'},
            { signatura:'', tipo_recurso: 'tesis', titulo: 'La simetría en la pintura de Amelia Peláez', autor: '', autor2: '' , resumen: 'La simetría en la pintura de Amelia Peláez', isbn: '890-367657657657', editorial: '',localizacion: ''},             
          ]}
          
          options={{
            headerStyle: {
              backgroundColor: '#C5E1A5',
              color: '#714B23'
            }
          }}
        />

        </div>

        <br/>
        <br/>
        <div className="results-table">
        <MaterialTable
          title="Resultados en otras Bibliotecas"
          columns={[
            {
              title: 'Biblioteca', field: 'propietario_recurso',
              cellStyle: {
              //  backgroundColor: '#E9FAC8',
                color: '#714B23'
              },
              headerStyle: {
                backgroundColor: '#E9FAC8',
              }
            },
            { title: 'Signatura', field: 'signatura' },
            { title: 'Tipo de recurso', field: 'tipo_recurso' },
            { title: 'Título', field: 'titulo' },
            { title: 'Autor', field: 'autor', type: 'numeric' },
            { title: 'Autor2', field: 'autor2' },
            { title: 'Resumen', field: 'resumen' },
            { title: 'ISBN', field: 'isbn' },
           // { title: 'Editorial', field: 'editorial' },
            


          ]}


          data={[
            { biblioteca: 'Letran', signatura:'4633-EJ.1-2008', tipo_recurso: 'libro', titulo: 'AMELIA PELAEZ, CERAMICA', autor: 'JUBRIAS, MARIA ELENA', autor2: '' , resumen: 'Este libro es una obra de referencia sobre la cerámica y su relación con la creación artística de Amelia Peláez. En él la autora plasma toda la vitalidad y diversidad de la cerámica de Amelia. '},  
       
          ]}
          options={{
            headerStyle: {
              backgroundColor: '#C5E1A5',
              color: '#714B23'
            }
          }}
        />
           </div>
        </div> 
      </div>
      </div> 
    ) 
}

}