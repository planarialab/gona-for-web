// @flow
import * as React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Home from './home/Home'
import configureStore from '../store'
import { add, startClock } from '../actions/basic'

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
    return <Home />
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Index)
