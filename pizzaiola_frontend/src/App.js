import React from 'react';
import PzlNavBar from './components/pzl_NavBar' ;
import PzlCarousel from './components/pzl_Carousel' ;
import PzlMainBanner from './components/pzl_MainBanner' ;
import PzlAbout from './components/pzl_About' ;
import PzlFooter from './components/pzl_Footer' ;
import PzlBtstrpCarousel from './components/pzl_ReactOwlCarousel' ;

import './App.css';

function App() {
  return (
    <div className="App">
      

  {/*}      
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  */}

  <title>Pizzaiola Italian Cuisine Restaurant</title>
  {/*}
  <meta content="" name="descriptison" />
  <meta content="" name="keywords" />

  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />


  
      <PzlNavBar />
      <PzlBtstrpCarousel />
      <PzlFooter />
      
    </div>
  );
}

export default App;
