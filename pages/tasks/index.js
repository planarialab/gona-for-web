// @flow
import React from 'react'

import TaskItem from '../../components/tasks/TaskItem'
import TaskMenu from '../../components/tasks/TaskMenu'
import { LayoutTask } from '../../components'
type Props = {}

class Tasks extends React.Component<Props, null> {
  static async getInitialProps ({ query }) {
    return {}
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
                <TaskMenu />
              </div>
              <div className="column" style={{ minWidth: '500px' }}>
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
        </section>
      </LayoutTask>
    )
  }
}

export default Tasks
