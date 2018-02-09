// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

import { Nav, Footer, Copyright } from './'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
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
