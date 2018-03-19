// @flow
import React from 'react'
import withRedux from 'next-redux-wrapper'

import TaskItemList from '../../components/tasks/TaskItemList'
import TaskMenu from '../../components/tasks/TaskMenu'
import { LayoutTask } from '../../components'
import configureStore from '../../store'

const mapDispatchToProps = dispatch => ({})

type Props = {}

class Tasks extends React.Component<Props, null> {
  static async getInitialProps ({ query, pathname, asPath }) {
    return { pathname, asPath }
  }

  render () {
    return (
      <LayoutTask>
        <style jsx>{`
          * {
            color: black;
            font-size: 12px;
          }
          li {
            transition: 0.3s;
          }
          /*li:hover {
            transform: scale(1.02);
          }*/
        `}</style>
        <section className="section">
          <div className="container" style={{ padding: '0 100px' }}>
            <div className="columns is-mobile">
              <div className="column is-narrow">
                <TaskMenu {...this.props} />
              </div>
              <div className="column" style={{ minWidth: '500px' }}>
                <TaskItemList />
              </div>
            </div>
          </div>
        </section>
      </LayoutTask>
    )
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Tasks)
