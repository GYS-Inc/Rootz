import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    height: '100%',
    width: '100%'
  };
  

class Maps extends React.Component {
    render() {
        return (
            <div>
                <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDYM6Fo8RdwR-IcFW7yCRe-BWIRlzE3kvc'
})(Maps);