// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

import { Nav, Footer, Copyright } from './'
import '../styles/gona.sass'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

type Props = {
  children: any,
  hideNav?: boolean,
  role?: string,
  title?: string
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
    const { children, hideNav, title = '', role = '' } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        {hideNav ? null : <Nav />}
        <main role={role}>{children}</main>
      </React.Fragment>
    )
  }
}
