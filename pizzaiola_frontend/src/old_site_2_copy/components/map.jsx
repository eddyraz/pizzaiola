import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import Tooltip from './tooltip' ;


mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkeXJheiIsImEiOiJjamtpeXVwcXkwNGloM3d0amZtMmNvOHB5In0.ehgb3xj0a3BbDT_ayir0gQ' ; 
class EsnoeiMap extends React.Component {
  tooltipContainer;

  
  setTooltip(features) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          Tooltip, {
            features
          }
        ),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = '';
    }
  }    

  componentDidMount() {

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div');

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-80.2050, 25.7636],
      
      zoom: 13
    });

    
    
    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    }).setLngLat([-80.20519,25.76333]).addTo(map);
    

    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      this.setTooltip(features);
    });   
  }

  render() {
    return (
      
      <div ref={el => this.mapContainer = el} className="map" />
    );
  }  
}



export default EsnoeiMap ;

