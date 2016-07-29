import React, { Component } from 'react'

import Head from './common/head'
import Body from './common/body'
import BodyPage from './common/body-page'

export default class Contact extends Component {
  render() {
    return (
      <html>
        <Head/>
        <Body filename="contact.html">
          <BodyPage title="Kontakt">
            Hello Murzik!
          </BodyPage>
        </Body>
      </html>
    )
  }
}
