// @flow
import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <style jsx>{`
      h1,
      a {
        color: white;
      }
    `}</style>
    <h1>a page</h1>
    <Link href="/">
      <a>home</a>
    </Link>
  </div>
)
