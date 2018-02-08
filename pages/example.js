// @flow
import React from 'react'
import Link from 'next/link'

import { Nav, Copyright } from '../components'

export default () => (
  <div id="wrapper">
    {/* Header */}
    <header id="header">
      <a className="logo">example</a>
    </header>

    {/* Nav */}
    <Nav />

    {/* Main */}
    <div id="main">
      <Link href="#">
        <a>scss</a>
      </Link>
    </div>

    {/* Copyright */}
    <Copyright />
  </div>
)
