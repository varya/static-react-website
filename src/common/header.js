import React, { Component } from 'react'

export default class Header extends Component {

  render() {

    const lang = this.props.lang || 'de'
    const altPath = (lang === 'de' ? '/en/' : '/') + this.props.filename
    const altLang = (lang === 'de' ? 'en' : 'de' )

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
        <ul id="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="examples.html">Examples</a></li>
          <li><a href="page.html">A Page</a></li>
          <li><a href="another_page.html">Another Page</a></li>
          <li className="selected"><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
    </div>
    )
  }

}
