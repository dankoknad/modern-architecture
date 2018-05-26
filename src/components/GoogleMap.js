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
    // this.createMarkers(this.props.houses, this.props.activeHouse)

    this.state.markers.map(marker => marker.setMap(this.map));
    // marker.setMap(this.map)
  }

  createMarkers = (d) => {
    const icon = {
      url: markerIcon, // url
      scaledSize: new google.maps.Size(38, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(19, 50), // anchor
      labelOrigin: new google.maps.Point(19, 19) // label position
    };
    const _self = this;
    var maxZIndex = 1;

    const markers = d.map(house => {
      if(house.id === this.props.activeHouse.id) {

      }
      // maxZIndex = () ? maxZIndex + 1 : maxZIndex

      return new google.maps.Marker({
        position: { lat: house.lat, lng: house.lng },
        // map: this.map,
        icon: icon,
        zIndex: maxZIndex,
        label: String(house.id + 1),
        title: house.name,
        houseId: house.id
      });
    })

    markers.map((marker, i) => marker.addListener('click', function(e) {
      _self.props.selectHouse(d[i])
      this.setZIndex(maxZIndex++);
      this.map.panTo({
        lat: this.getPosition().lat(), 
        lng: this.getPosition().lng()
      });
      // _self.setState({selectedMarker: { title: this.title, id: this.houseId }})
    }))

    // console.log(markers)

    this.setState({markers: markers}, () => console.log('m', this.state.markers))
    // setTimeout(() =>{ _self.setState({markers: markers.concat(markers.concat(markers))})} , 10000)
  }

  render() {
    const { selectedMarker } = this.state
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
