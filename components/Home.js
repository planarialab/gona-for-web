// @flow
import React from 'react'
import Link from 'next/link'

type Props = {}

export const Home = (props: Props) => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
