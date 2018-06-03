/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker-gray.svg'
import mapStyles from '../mapStyles.json'
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element'

export default class GoogleMap extends Component {
  static propTypes = {
    houses: PropTypes.array.isRequired,
    activeHouse: PropTypes.object,
    selectHouse: PropTypes.func.isRequired,
    activeCategory: PropTypes.string.isRequired
  }

  state = {
    maxZIndex: this.props.houses.length
  }

  componentDidMount() {
    const defaultCenter = {
      lat: this.props.houses[2].lat,
      lng: this.props.houses[2].lng
    }

    this.map = new google.maps.Map(this.mapEl, {
      center: defaultCenter,
      styles: mapStyles,
      zoom: 7
    });

    this.createMarkers(this.props.houses, this.props.activeHouse)
    this.infowindow = new google.maps.InfoWindow()
  }

  componentDidUpdate(prevProps) {
    const { activeHouse, activeCategory } = this.props
    const { maxZIndex } = this.state

    if (activeHouse && activeHouse.id > -1 && (activeCategory === this.markers[activeHouse.id].category || !activeCategory )) {
      this.infowindow.setContent(activeHouse.name)
      this.infowindow.open(this.map, this.markers[activeHouse.id]);
    } else {
      this.infowindow.close()
    }
    
    if(prevProps.activeHouse !== this.props.activeHouse) {
      this.map.panTo({
        lat: activeHouse.lat,
        lng: activeHouse.lng
      })
      
      this.markers.map(marker => {
        return marker.category !== activeCategory && activeCategory
        ? marker.setVisible(false)
        : marker.setVisible(true);
      })

      this.markers[activeHouse.id]
        .setZIndex(maxZIndex)
      
      this.setState({
        maxZIndex: this.state.maxZIndex + 1
      })
    }
  }

  createMarkers = (houses) => {
    const _self = this;

    const icon = {
      url: markerIcon, // url
      scaledSize: new google.maps.Size(38, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(19, 50), // anchor
      labelOrigin: new google.maps.Point(19, 19) // label position
    };

    this.markers = houses.map(house => {
      return new google.maps.Marker({
        position: { lat: house.lat, lng: house.lng },
        map: this.map,
        icon: icon,
        zIndex: _self.props.activeHouse && _self.props.activeHouse.id === house.id ? _self.state.maxZIndex : house.id,
        label: String(house.id + 1),
        title: house.name,
        id: house.id,
        category: house.category
      });
    })

    this.markers.map((marker, i) => marker.addListener('click', function (e) {
      _self.props.selectHouse(_self.props.houses[marker.id])
      const elem = document.getElementById(marker.id);

      scrollToElement(elem, {
        align: 'middle',
        ease: 'out-back',
        duration: 1000
      });
    }))
  }

  render() {
    return (
      <div className="col-md-12 col-lg-4 map-container">
        <div className="map" ref={el => this.mapEl = el}></div>
      </div>
    )
  }
}
