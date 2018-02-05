// @flow
import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <style jsx>{`
      h1,
      a {
        color: yellow;
      }
    `}</style>
    <h1>b page</h1>
    <Link href="/">
      <a>home</a>
    </Link>
  </div>
)
