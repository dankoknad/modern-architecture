/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker.svg'

export default class GoogleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: []
    }

  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapEl, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 6
    });

    this.createMarkers(this.props.data)
  }

  createMarkers = (d) => {
    const icon = {
      url: markerIcon, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(25, 50) // anchor
    };

    d.map(house => {
      this.marker = new google.maps.Marker({
        position: { lat: house.lat, lng: house.lng },
        map: this.map,
        icon: icon,
        title: house.name
      });
    })
  }

  render() {
    return (
      <div>
        <div className="map" ref={el => this.mapEl = el}></div>
      </div>
    )
  }
}
