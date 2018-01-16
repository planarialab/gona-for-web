// @flow
import * as React from 'react'

import { add, startClock } from '../actions/basic'

import Home from '../components/Home'
import { Layout } from '../components/Layout'
import { bindActionCreators } from 'redux'
import configureStore from '../store'
import withRedux from 'next-redux-wrapper'

type Props = {
  add: () => void,
  startClock: () => number
}

const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(add, dispatch),
  startClock: bindActionCreators(startClock, dispatch)
})

class Index extends React.Component<Props, null> {
  timer: number

  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Index)
