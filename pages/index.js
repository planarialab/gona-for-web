// @flow
import React from "react"
import Layout from "../components/layout"
// import remark from "remark"
// import html from "remark-html"
// import recommended from "remark-preset-lint-recommended"

type Props = {
  contents: string
}

const Docs = ({contents}: Props) => {
  return (
    <Layout className="wrap container-fluid" title="Next Note">
      <div dangerouslySetInnerHTML={{__html: contents}} />
    </Layout>
  )
}

Docs.getInitialProps = ({query}) => {
  return {contents: query.contents}
}

export default Docs
