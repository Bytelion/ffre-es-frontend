import React from 'react';
import { SearchKitComponent, Utils } from 'searchkit';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './styles.module.scss';

export class MapContainer extends SearchKitComponent {
    constructor(props) {
        super(props);
    }

    defineBEMBlocks(){
      return {
        "container":"container",
        "option":"item"
      }
    }

    defineAccessor(){
      //return a configured Accessor
    }

    render() {
        return (
            <div className={styles.mapContainer}>
                <Map google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCt76Ys1M5Fb4XrCvXWedvCndDZI9HkuzQ')
})(MapContainer)
