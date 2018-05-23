/*global google*/
import React, { Component } from 'react'

export default class GoogleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: []
    }

  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapEl, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });

    this.createMarkers(this.props.data)
  }

  createMarkers = (d) => {
    d.map(house => {
      this.marker = new google.maps.Marker({
        position: {lat: house.lat, lng: house.lng},
        map: this.map
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
