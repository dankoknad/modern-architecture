/*global google*/
import React, { Component } from 'react'
import markerIcon from '../img/marker.svg'
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
    maxZIndex: this.props.houses.length,
    activeMarkerId: null,
    activeCategory: this.props.activeCategory
  }

  componentDidMount() {
    const defaultCenter = {
      lat: -35,
      lng: 149.5
    }

    this.map = new google.maps.Map(this.mapEl, {
      center: defaultCenter,
      zoom: 7
    });

    this.createMarkers(this.props.houses, this.props.activeHouse)
    this.infowindow = new google.maps.InfoWindow()
  }

  componentDidUpdate() {
    this.props.activeHouse && this.map.panTo({
      lat: this.props.activeHouse.lat,
      lng: this.props.activeHouse.lng
    });

    this.markers.length &&
      this.markers[this.props.activeHouse.id]
        .setZIndex(this.state.maxZIndex)

    //hidding info window if selected marker isn't visible
    const filtered = this.props.houses.filter(item => item.category === this.props.activeCategory)
    const isActiveMarkerVisible = filtered.some(item => item.category === this.markers[this.props.activeHouse.id].category)

    if (isActiveMarkerVisible || !this.props.activeCategory) {
      this.infowindow.setContent(this.props.activeHouse.name)
      this.infowindow.open(this.map, this.markers[this.state.activeMarkerId]);
    } else {
      this.infowindow.close()
    }

    this.markers.map(marker => {
      return marker.category !== this.props.activeCategory && this.props.activeCategory
        ? marker.setVisible(false)
        : marker.setVisible(true);
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.activeHouse && props.activeHouse.id !== state.activeMarkerId) {
      return {
        maxZIndex: state.maxZIndex + 1,
        activeMarkerId: props.activeHouse.id
      };
    }

    if (props.activeCategory !== state.activeCategory) {
      return {
        activeCategory: props.activeCategory
      };
    }

    return null
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
      <div className="col m12 xl4 map-container">
        <div className="map" ref={el => this.mapEl = el}></div>
      </div>
    )
  }
}
