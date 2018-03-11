// @flow
import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="profile">
    <style jsx>{`
    .profile {
      width: 200px
      text-align: center
    }
    img {
      width: 100px
    }
  `}</style>
    <img src="static/images/face/147144.svg" alt="" />
    <hr />
    <ul>
      <li>
        <Link href="/tasks/tomorrow">
          <a>Tomorrow</a>
        </Link>
      </li>
      <li>
        <Link href="/tasks/today">
          <a>Today</a>
        </Link>
      </li>
      <li>
        <Link href="/tasks/yesterday">
          <a>Yesterday</a>
        </Link>
      </li>
    </ul>
  </div>
)
