/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker.svg'

export default class GoogleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: [],
      selectedMarker: null
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
      anchor: new google.maps.Point(25, 50), // anchor
      labelOrigin: new google.maps.Point(25, 19) // label position
    };
    var _self = this
    d.map(house => {
      this.marker = new google.maps.Marker({
        position: { lat: house.lat, lng: house.lng },
        map: this.map,
        icon: icon,
        label: String(house.id + 1),
        title: house.name,
        houseId: house.id
      });

      _self.marker.addListener('click', function(e) {
        this.map.panTo({
          lat: this.getPosition().lat(), 
          lng: this.getPosition().lng()
        });
        _self.setState({selectedMarker: { title: this.title, id: this.houseId }})
      })
    })
  }

  render() {
    const { selectedMarker } = this.state

    return (
      <div>
        <div className="map" ref={el => this.mapEl = el}></div>
        <h2 className="text-center">
          {selectedMarker 
            ? `${selectedMarker.title} selected with id: ${selectedMarker.id}` 
            : 'pls click at some of the markers'}
        </h2>
      </div>
    )
  }
}
