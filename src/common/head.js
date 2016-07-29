import React, { Component } from 'react'

export default class Header extends Component {

  render() {

    const isIndex = (this.props.mode === 'index')
    const lang = this.props.lang || 'en'

    const words = {
      title: {
        en: 'Simple React => static website',
        ru: 'Простой React => static сайт'
      },
      desc: {
        en: 'Simple static multilingual website generated with React templates',
        ru: 'Простой статический многоязычный сайт, сгенерированный React шаблонами'
      }
    }

    const getMeta = ()=> {
      return <meta name="description" content="{words.desc[lang]}"/>
    }

    return (
      <head>
        <title>{ words.title[lang] }</title>
        { isIndex  && getMeta() }
        <meta name="keywords" content="website keywords, website keywords" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" type="text/css" href="/assets/style.css" title="style" />
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </head>
    )
  }

}
