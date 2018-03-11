// @flow
import React from 'react'

type Props = {
  chidlren?: any
}

export default ({ children }: Props) => (
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
    <label>
      <input type="checkbox" />
      <span>{children}</span>
    </label>
  </React.Fragment>
)
