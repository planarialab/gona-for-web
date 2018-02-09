// @flow
import React from 'react'
import fetch from 'isomorphic-fetch'
import { Layout } from '../components'
import PostItem from './posts/PostItem'

type Props = {
  posts: any[]
}

const Posts = ({ posts }: Props) => (
  <Layout>
    <ul>{posts.map(post => <PostItem key={post.id} {...post} />)}</ul>
  </Layout>
)

Posts.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return { posts }
}

export default Posts
