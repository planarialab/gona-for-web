// @flow
import React from 'react'
import withRedux from 'next-redux-wrapper'

import TaskItemList from '../../components/tasks/TaskItemList'
import TaskMenu from '../../components/tasks/TaskMenu'
import { Layout } from '../../components'
import configureStore from '../../store'

const mapDispatchToProps = dispatch => ({})

type Props = {}

class Tasks extends React.Component<Props, null> {
  static async getInitialProps ({ query, pathname, asPath }) {
    return { pathname, asPath }
  }

  render () {
    return (
      <Layout title="Tasks | Gona" role="main" hideNav={true}>
        <style jsx>{`
          * {
            color: black;
            font-size: 12px;
          }
          li {
            transition: 0.3s;
          }
          .todo-state {
            height: 100px;
            margin: 10px 0;
            background-color: #efefef;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TaskMenu {...this.props} />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="todo-state">할일 처리 상태</div>
                </div>
                <div className="col-lg-12">
                  <TaskItemList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Tasks)
