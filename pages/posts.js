// @flow
import React from 'react'
import { Link } from 'next/link'
import fetch from 'isomorphic-fetch'
import { Nav, Footer, Copyright } from './components'
import PostItem from './posts/PostItem'

type Props = {
  posts: any[]
}

const Posts = ({ posts }: Props) => (
  <div id="wrapper">
    {/* Header */}
    <header id="header">
      <a href="index.html" className="logo">
        Massively
      </a>
    </header>

    {/* Nav */}
    <Nav />

    {/* Main */}
    <div id="main">
      {/* {posts.length} */}
      <ul>{posts.map(post => <PostItem key={post.id} {...post} />)}</ul>
    </div>

    {/* Footer */}
    <Footer />

    {/* Copyright */}
    <Copyright />
  </div>
)

Posts.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  const posts = await res.json()

  return { posts }
}

export default Posts
