import React, { Component } from 'react'

import Menu from './menu'

export default class Header extends Component {

  render() {

    const lang = this.props.lang || 'en'
    const altPath = (lang === 'en' ? '/' : '/ru/') + this.props.pagename + '.html'
    const altLang = (lang === 'en' ? 'ru' : 'en' )

    const words = {
      shop: {
        en: 'Shop on the go',
        de: 'Shop on the go'
      },
      what: {
        en: 'What is Fleek?',
       de: 'Was ist Fleek'
      },
      download: {
        en: 'Get the app',
        de: 'Download'
      }
    }

    return (
    <div>
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <h1><a href="index.html">textured<span className="logo_colour">_stars_light</span></a></h1>
          <h2>Simple. Contemporary. Website Template.</h2>
        </div>
      </div>
      <div id="menubar">
        <Menu {...this.props}/>
      </div>
    </div>
    </div>
    )
  }

}
