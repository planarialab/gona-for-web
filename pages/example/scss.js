// @flow
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Layout } from '../../components'
import '../../styles/style.scss'

export default () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <div>
      <h1 className="text-danger">SCSS Example</h1>
      <Link href="/">
        <a>home</a>
      </Link>
      <span className="example">scss text</span>
    </div>
  </Layout>
)
