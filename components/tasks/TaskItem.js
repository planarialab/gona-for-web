// @flow
import React from 'react'

type Props = {
  chidlren?: any
}

export default ({ done, children }: Props) => (
  <React.Fragment>
    <style jsx>{`
      input {
        margin-right: 10px;
      }
      span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        width: 450px;
        vertical-align: bottom;
      }
    `}</style>
    <li>
      <label>
        <input type="checkbox" defaultChecked={done} />
        <span>{children}</span>
      </label>
    </li>
  </React.Fragment>
)
