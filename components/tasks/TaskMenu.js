// @flow
import React from 'react'
import { Link, Router } from '../../routes'

type Props = {}

export default ({ asPath }: Props) => (
  <div className="profile">
    <style jsx>{`
    .profile {
      width: 200px
      text-align: center
    }
    .active {
      font-weight: bold
    }
    img {
      width: 100px
    }
  `}</style>
    <img src="/static/images/face/147144.svg" alt="" />
    <hr />
    <ul>
      <li>
        <Link route="tasks" params={{ date: 'tomorrow' }}>
          <a className={asPath === '/tasks/tomorrow' ? 'active' : ''}>
            Tomorrow
          </a>
        </Link>
      </li>
      <li>
        <Link route="tasks" params={{ date: 'today' }}>
          <a className={asPath === '/tasks/today' ? 'active' : ''}>Today</a>
        </Link>
      </li>
      <li>
        <Link route="tasks" params={{ date: 'yesterday' }}>
          <a className={asPath === '/tasks/yesterday' ? 'active' : ''}>
            Yesterday
          </a>
        </Link>
      </li>
      <li>
        <Link route="tasks" params={{ date: '2018-03-23' }}>
          <a className={asPath === '/tasks/2018-03-23' ? 'active' : ''}>
            2018-03-23
          </a>
        </Link>
      </li>
    </ul>
  </div>
)
