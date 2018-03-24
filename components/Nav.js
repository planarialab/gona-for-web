// @flow
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="navbar level">
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <Link href="/">
              <a className="has-text-light">Gona</a>
            </Link>
          </p>
        </div>
      </div>

      <div className="level-right">
        <div className="nav-menu">
          <Link href="/pricing">
            <a className="nav-menu-item has-text-light">Pricing</a>
          </Link>
          <Link href="/faq">
            <a className="nav-menu-item has-text-light">FAQ</a>
          </Link>
          <Link href="/contact">
            <a className="nav-menu-item has-text-light">Contact</a>
          </Link>
          <Link href="/signin">
            <a className="nav-menu-item has-text-light">Sign in</a>
          </Link>
          <Link href="/tasks">
            <a className="nav-menu-item has-text-light">Tasks</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
