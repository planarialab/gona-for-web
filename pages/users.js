// @flow

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import { Link as Routes } from '../routes'
import { Layout } from '../components'

export default class Users extends React.PureComponent {
  static async getInitialProps ({ query }) {
    const pathname = query.id || '/'
    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    // const user = await users.json()

    return { pathname }
  }

  render () {
    const { pathname } = this.props
    return (
      <Layout>
        <Head>
          <title>{this.props.pathname} - Page Transitions</title>
        </Head>
        <style jsx>{`
          .active {
            color: red;
          }
        `}</style>
        <header>
          <Link href="/">
            <a className={pathname === '/' ? 'active' : ''}>Homepage</a>
          </Link>

          <Link as="/users/1" href="/users?id=1">
            <a className={pathname === '1' ? 'active' : ''}> page1 </a>
          </Link>

          <Link as="/users/2" href="/users?id=2">
            <a className={pathname === '2' ? 'active' : ''}> page2 </a>
          </Link>

          <Routes route="users" params={{ id: 3 }}>
            <a className={pathname === '3' ? 'active' : ''}> page3 </a>
          </Routes>
        </header>

        <div id="container" className={`page-${pathname}`}>
          <h1>{pathname}</h1>
        </div>
      </Layout>
    )
  }
}
