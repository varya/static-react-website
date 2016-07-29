import React, { Component } from 'react'

export default class BodyPage extends Component {

  render() {
    return (
        <div className="bodypage">
          <h2>{this.props.title}</h2>
          <div className="pagetext">
            { this.props.children }
          </div>
        </div>
    
    )
  }

}
