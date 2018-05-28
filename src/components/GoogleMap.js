/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker.svg'
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
  static propTypes = {
    houses: PropTypes.array.isRequired,
    activeHouse: PropTypes.object.isRequired,
    selectHouse: PropTypes.func.isRequired,
    activeCategory: PropTypes.string.isRequired
  } 

  state = {
    maxZIndex: 1
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
  
  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({maxZIndex: this.state.maxZIndex + 1}, () => (
      this.markers.length && 
      this.markers[this.props.activeHouse.id]
        .setZIndex(this.state.maxZIndex))
    )
    if(this.props.activeCategory !== newProps.activeCategory) {
      console.log('category has changed:', newProps.activeCategory)
      this.markers.map(marker => { 
        marker.category !== newProps.activeCategory && newProps.activeCategory
          ? marker.setVisible(false)
          : marker.setVisible(true);
      })
    }
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
        id: house.id,
        category: house.category
      });
    })

    this.markers.map((marker, i) => marker.addListener('click', function(e) {
      if(_self.props.activeHouse.id !== marker.id) {
        _self.props.selectHouse(_self.props.houses[marker.id])
      } else return
    }))

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
