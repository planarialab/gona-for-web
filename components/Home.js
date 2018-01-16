// @flow
import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

type Props = {
  lastUpdate: number,
  light: boolean
}

const mapStateToProps = state => ({
  lastUpdate: state.basic.lastUpdate,
  light: state.basic.light
})

const Home = (props: Props) => (
// export default connect(state => state.basic)(({ lastUpdate, light}) => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
      Hello World.

    <Clock lastUpdate={props.lastUpdate} light={props.light} />
  </div>
)
// )

export default connect(mapStateToProps, null)(Home)
