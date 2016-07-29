import React, { Component } from 'react'

import GoogleTagManager from './google-tag-manager'
import Header from './header'
import Footer from './footer'

export default class Body extends Component {

  render() {
    return (
      <body>
        <GoogleTagManager/>
        <Header { ...this.props }/>
        {this.props.children}
        <Footer  { ...this.props }/>
      </body>
    )
  }

}
