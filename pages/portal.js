// @flow
import React from 'react'
import Link from 'next/link'

import { Modal } from '../components/modal'

export default () => (
  <div>
    <style jsx>{`
      h1,
      a {
        color: yellow;
      }
    `}</style>
    <h1>portal example</h1>
    <Link href="/">
      <a>home</a>
    </Link>
    <Modal />
  </div>
)
