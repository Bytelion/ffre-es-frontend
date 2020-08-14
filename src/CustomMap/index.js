import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './styles.module.scss';

class CustomMap extends Component<{}> {

  render() {
    const position = [51.505, -0.09]
    return (
        <div className={styles.map_container}>
          <Map zoomControl={false}
                doubleClickZoom= {false}
                closePopupOnClick= {false}
                dragging= {false}
                zoomSnap= {false}
                zoomDelta= {false}
                trackResize= {false}
                scrollWheelZoom= {false}
                touchZoom={false}
                className="map"
                worldCopyJump={true}
                center={position}
                zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
    )
  }
}

export default CustomMap;
