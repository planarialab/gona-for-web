// @flow
import React from 'react'
import Link from 'next/link'

import { Layout } from '../components'

export default () => (
  <Layout>
    <Link href="/example/scss">
      <a>scss</a>
    </Link>
  </Layout>
)
