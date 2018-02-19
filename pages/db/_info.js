// @flow
import React from 'react'
import fetch from 'isomorphic-fetch'

import db from '../../actions/db'

type Props = {}

export default class extends React.PureComponent<Props> {
  static getInitialProps = async () => {
    const result = await db.info()

    return { ...result }
  }

  render () {
    return (
      <pre>
        <style jsx>{`
          pre {
            font-size: 0.8em;
          }
        `}</style>
        {JSON.stringify(this.props, null, 2)}
      </pre>
    )
  }
}
