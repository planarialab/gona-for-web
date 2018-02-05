// @flow
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <Link href="/">
            <a>This is Massively</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Generic Page</a>
          </Link>
        </li>
        <li>
          <Link href="/elements">
            <a>Elements Reference</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link prefetch href="/a">
            <a className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/b">
            <a
              onMouseEnter={() => {
                Router.prefetch('/b')
                console.log('prefetching /b!')
              }}
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="#" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
