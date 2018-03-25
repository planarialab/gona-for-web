// @flow
import * as React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import { Layout } from '../components'
import Home from './home/Home'
import configureStore from '../store'

type Props = {}

const mapDispatchToProps = dispatch => ({})

class Index extends React.Component<Props, null> {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
      <Layout role="main">
        <Home />
      </Layout>
    )
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Index)
