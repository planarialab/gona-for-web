// @flow
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

type Props = {}

const Nav = (props: Props) => {
  return (
    <React.Fragment>
      <style jsx>{`
        .navbar-brand img {
          width: 20px
          margin-right: 10px
        }
        .navbar-brand span {
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>
      <nav className="fixed-top">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/static/images/logo.png" alt="" />
                <span>Planaria Lab</span>
              </a>
            </Link>
          </h5>
          <div className="my-2 my-md-0 mr-md-3">
            <Link href="/features">
              <a className="p-2 text-dark">Features</a>
            </Link>
            <Link href="/faq">
              <a className="p-2 text-dark">FAQ</a>
            </Link>
            <Link href="/pricing">
              <a className="p-2 text-dark">Pricing</a>
            </Link>
            <Link href="/signin">
              <a className="p-2 text-dark">Sign in</a>
            </Link>
          </div>
          <Link href="/tasks">
            <a className="btn btn-outline-primary" href="#">
              Tasks
            </a>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav
