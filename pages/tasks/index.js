// @flow
import React from 'react'

import TaskItem from '../../components/tasks/TaskItem'
import TaskMenu from '../../components/tasks/TaskMenu'
import { Layout } from '../../components'

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
                  <ul>
                    <li>
                      <TaskItem>task 0</TaskItem>
                    </li>
                    <li>
                      <TaskItem>
                        길고길고길고길고길고길고길ㄹ로댜몽띄어쓰기도없이길고길다말다길까말까너무나도긴할일은어떻게
                      </TaskItem>
                    </li>
                    <li>
                      <TaskItem>
                        https://hackernoon.com/five-things-i-learned-building-a-saas-app-with-vue-js-90b6a5acd275
                        문서 번역해야지
                      </TaskItem>
                    </li>
                    <li>
                      <TaskItem>task 1</TaskItem>
                    </li>
                    <li>
                      <TaskItem>task 2</TaskItem>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Tasks
