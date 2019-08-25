import React from "react"
import "./SearchBar.css"
import {loadGoogleMaps} from "../SearchBar/LoadScript/LoadScript"
import Geocode from "react-geocode";
import { KEY } from "./apiKey"

Geocode.setApiKey(KEY)
/* global google */
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
   
    }
    this.autoCompleteInput = React.createRef();
    this.autocomplete = null;

  }
componentWillMount(){
    loadGoogleMaps(()=>{
        
    })
}

  onChangeHandler = (event) => {

    let userInfo = JSON.parse(JSON.stringify(this.state.value))
    userInfo = event.target.value
    this.setState({ value: userInfo })
  }
  initGoogleAuto=()=>{
    this.autocomplete = new google.maps.places.Autocomplete(this.autoCompleteInput.current,
        { "types": ["geocode"] });
  
      this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }
  componentDidMount() {
    this.initGoogleAuto()

  }

  handlePlaceChanged = () => {
    const place = JSON.parse(JSON.stringify(this.autocomplete.getPlace()));
    Geocode.fromAddress(place.formatted_address).then(res => {
   console.log("re",res)
      this.setState({ value: "" })
    }).catch(err => {
         this.props.onPlaceLoaded(400)
      this.setState({ value: "" })

    })

  }


  render() {

    return (
      <div style={this.props.searchStyle} className="wrapper-auto">
        <input ref={this.autoCompleteInput} autoComplete="on"
          onChange={(e) => this.onChangeHandler(e)}
          placeholder={this.props.address ? this.props.address:"Enter a address"}
          className="searchTerm"
          value={this.state.value}
          type="text" />
        <button className="searchButton" >
     
        </button>


      </div>
    );
  }
}
export default SearchBar