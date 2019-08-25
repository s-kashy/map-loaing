import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import  {loadGoogleMaps} from "./SearchBar/LoadScript/LoadScript"
import "./App.css"
import SearchBar from "./SearchBar/SearchBar";

 class App extends Component {
   componentDidMount(){
    // loadGoogleMaps(()=>{

    // })
   }
  render() {
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className="App">
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 42.39,
          lng: -72.52
        }}
        bounds={bounds}
      />
      <SearchBar/>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDYXML4_gyGp2cNPECpnl6t4gDg7jCWj_o")
})(App)