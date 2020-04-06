import React, { Component } from 'react'

import {default as StyledNavBar} from './components/navBar' ;
import BibliotecaMain from './components/BibliotecaMainPage' ;
import BottomAppBar from './components/Footer' ;

//Para la Tabla
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends Component{

  

    
   
    state = {

       dummy_prop : [] ,

    }
    
    async componentDidMount() {

}
    
    
render() {
  return (
      <div>
      
          
          <StyledNavBar
           placeholder="Search forecast for your favorite cities..."
           value={this.state.term}
           writeInput={this.onInputChange}
           onKeyPress={this.onKeyPress}
           
          />
          <BibliotecaMain/>
          <BottomAppBar/>
          

      </div>
        )
    }
}

export default App ;
