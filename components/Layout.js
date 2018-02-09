// @flow
import React from 'react'
import Head from 'next/head'
import { Nav, Header, Footer, Copyright } from './'

type Props = {
  children: any
}

export default class Layout extends React.Component<Props, {}> {
  render () {
    const { children } = this.props
    return (
      <div className="container-fluid">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div id="wrapper">
          {/* Header */}
          <header id="header">
            <a href="index.html" className="logo">
              Massively
            </a>
          </header>

          {/* Nav */}
          <Nav />

          {/* Main */}
          <div id="main">
            <main>{children}</main>
          </div>

          {/* Footer */}
          <Footer />

          {/* Copyright */}
          <Copyright />
        </div>
      </div>
    )
  }
}
