// @flow
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import style from '../../styles/style.scss'

export default () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <div className={style.example}>
      <h1>SCSS Example</h1>
      <Link href="/">
        <a>home</a>
      </Link>
      <span>scss text</span>
    </div>
  </React.Fragment>
)
