/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker.svg'
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
  static propTypes = {
    houses: PropTypes.array.isRequired,
    activeHouse: PropTypes.object.isRequired,
    selectHouse: PropTypes.func.isRequired
  } 

  state = {
    markers: [],
    counter: 2
  }

  componentDidMount() {
    const {lat, lng} = this.props.houses[0]

    this.map = new google.maps.Map(this.mapEl, {
      center: { lat, lng },
      zoom: 5
    });

    this.createMarkers(this.props.houses, this.props.activeHouse)

  }

  componentDidUpdate() {
    this.props.activeHouse && this.map.panTo({
      lat: this.props.activeHouse.lat, 
      lng: this.props.activeHouse.lng
    });
  }
  
  UNSAFE_componentWillReceiveProps() {
    this.setState({counter: this.state.counter + 1}, () => (
      this.markers.length && 
      this.markers[this.props.activeHouse.id]
        .setZIndex(this.state.counter))
    )  
  }

  createMarkers = (houses) => {
    const icon = {
      url: markerIcon, // url
      scaledSize: new google.maps.Size(38, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(19, 50), // anchor
      labelOrigin: new google.maps.Point(19, 19) // label position
    };
    
    const _self = this;

    this.markers = houses.map(house => {
      return new google.maps.Marker({
        position: { lat: house.lat, lng: house.lng },
        map: this.map,
        icon: icon,
        zIndex: _self.props.activeHouse.id === house.id ? 2 : 1,
        label: String(house.id + 1),
        title: house.name,
        id: house.id
      });
    })

    this.markers.map((marker, i) => marker.addListener('click', function(e) {
      _self.props.selectHouse(houses[i])
    }))

    this.setState({markers: this.markers})
  }

  render() {
    const { activeHouse } = this.props

    return (
      <div>
        <div className="map" ref={el => this.mapEl = el}></div>
        <div className="text-center is-size-4">
          {activeHouse && `active is ${activeHouse.name}`}
        </div>
      </div>
    )
  }
}
