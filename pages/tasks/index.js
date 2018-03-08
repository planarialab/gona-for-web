// @flow
import React from 'react'
import Link from 'next/link'

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
          li input {
            margin-right: 10px;
          }
          li span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            width: 450px;
            vertical-align: bottom;
          }
          /*li:hover {
            transform: scale(1.02);
          }*/
        `}</style>
        <section className="section">
          <div className="container" style={{ padding: '0 100px' }}>
            <div className="columns is-mobile">
              <div className="column is-narrow">
                <div style={{ width: '200px' }}>
                  <ul>
                    <li>
                      <Link href="">
                        <a>Tomorrow</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <a>Today</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <a>Yesterday</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column" style={{ minWidth: '500px' }}>
                <ul>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>task 1</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>
                        길고길고길고길고길고길고길ㄹ로댜몽띄어쓰기도없이길고길다말다길까말까너무나도긴할일은어떻게
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />{' '}
                      <span>
                        https://hackernoon.com/five-things-i-learned-building-a-saas-app-with-vue-js-90b6a5acd275
                        문서 번역해야지
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>task 1</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>task 1</span>
                    </label>
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
