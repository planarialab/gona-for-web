// @flow
import React from 'react'
import Link from 'next/link'

type Props = {
  id: string,
  title: string
}

const PostItem = ({ id, title }: Props) => {
  return (
    <li>
      <Link as={`/post/${id}`} href={`/post?id=${id}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

export default PostItem
