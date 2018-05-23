import React, { Component } from 'react'

export default class GoogleMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <hr />  
        i'm GoogleMap component
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
        i'm GoogleMap component
        <hr />  
      </div>
    )
  }
}
