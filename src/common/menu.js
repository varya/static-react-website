import React, { Component } from 'react'

export default class Menu extends Component {

  render() {

    const lang = this.props.lang || 'en'

    const words = {
      index: {
        en: 'Index',
        ru: 'Главная'
      },
      links: {
        en: 'Links',
        ru: 'Ссылки'
      },
      cats: {
        en: 'Cats',
        ru: 'Коты'
      },
      contact: {
        en: 'Contact',
        ru: 'Контакты'
      }
    }

    const menuItems = [
      'index',
      'links',
      'cats',
      'contact'
    ]

    const getMenu = () => {

      const prePath = lang === 'en' ? '/' : '/ru/'

      return menuItems.map((ind) => {
        let isSelected = ind === this.props.pagename ? 'selected' : ''
        let pagefile = prePath + ind + '.html'
        return (
          <li key={ind}>
            <a href={pagefile} className={isSelected}>{words[ind][lang]}</a>
          </li>  
        )
      })
    }

    return (
        <ul id="menu">
          { getMenu() }
        </ul>
    )
  }

}
