// @flow
import React from 'react'

type Props = {
  lastUpdate: number,
  light: boolean
}

export default ({ lastUpdate, light }: Props) => {
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          display: inline-block;
          color: #82fa58;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)
