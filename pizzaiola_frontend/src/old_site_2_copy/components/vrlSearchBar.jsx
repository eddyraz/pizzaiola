import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Col from 'reactstrap/lib/Col';


import ResultsTable from './vrlSearchResults' ;



const SearchBar = (props) => {

  

  
  return (
    <div className="container" style={{"backgroundColor":"d3f9d8"}}>
    <div className="row">
    <div className="search-terms col-md-8 col-sm-12 col-xs-12">
    <Form action='onSubmit=/opac'>
         
         <Label check>
           <div className="search-form-label" style={{"fontFamily":"Verdana","fontSize":"16"}}></div>
           Busqueda Simple
          </Label> 
          <Col> 
      <FormGroup>
        <Label for="searchFormTitle">Título</Label>
        <Input type="text" name="form-title" id="searchFormTitle" placeholder="" />
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
    <ResultsTable></ResultsTable>
    </div> 
    
    


  )
  
}

export default SearchBar;