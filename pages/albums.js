// @flow

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import { Layout } from '../components'

export default class Album extends React.PureComponent {
  static async getInitialProps ({ query: { id } }) {
    const pathname = id || '/'

    if (!id) {
      let albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      albums = await albums.json()
      return { pathname, albums }
    } else {
      let album = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      )
      album = await album.json()
      return { pathname, album }
    }
  }

  render () {
    const { pathname, albums, album } = this.props
    return (
      <Layout>
        <Head>
          <title>{this.props.pathname} - SSR Caching</title>
        </Head>

        {albums
          ? albums.map(album => (
            <React.Fragment key={album.id}>
              <Link
                as={`/albums/${album.id}`}
                href={`/albums?id=${album.id}`}
              >
                <a>{album.title}</a>
              </Link>
              <br />
            </React.Fragment>
          ))
          : null}

        <div id="container" className={`page-${pathname}`}>
          <h1>{pathname}</h1>
        </div>
      </Layout>
    )
  }
}
