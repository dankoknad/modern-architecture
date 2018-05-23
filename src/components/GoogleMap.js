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
      zoom: 8
    });

    console.log('m', this.mapEl)
  }

  render() {
    return (
      <div>
        <div className="map" ref={el => this.mapEl = el}></div>
        <hr />  
        i'm GoogleMap component
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
        i'm GoogleMap component
        <hr />  
      </div>
    )
  }
}
