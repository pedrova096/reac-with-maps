import '../css/map.css';
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class MapComponent extends Component {
    props = {
        current_location:{lat: 37.7682742,lng: -122.4211885}
    }
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Map
                google={this.props.google} 
                zoom={14}
                style={{
                    width: '100%', 
                    height: '100%', 
                    position: 'inherit'
                }}
                center={this.props.current_location}
                className={'map-container'}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <Marker
                    title={'aja.'}
                    name={'SOMA'}
                    position={this.props.current_location} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        {/* <h1>{this.state.selectedPlace.name}</h1> */}
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
	apiKey: "AIzaSyBc7bEZ3hNQX4Pxwdx8Qeh8kalVjFbBws4"
  })(MapComponent);
