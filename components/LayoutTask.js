// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../styles/bulma.sass'
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
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration =>
          console.info('service worker registration successful')
        )
        .catch(err =>
          console.warn('service worker registration failed', err.message)
        )
    }
  }

  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

        <main>{children}</main>
      </React.Fragment>
    )
  }
}
