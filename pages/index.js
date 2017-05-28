// @flow
import React from "react"
import Layout from "../components/layout"
// import remark from "remark"
// import html from "remark-html"
// import recommended from "remark-preset-lint-recommended"

type Props = {
  contents: string,
  toc: Object
}

const Docs = ({contents, toc}: Props) => (
  <Layout className="wrap container-fluid" title="Next Note" toc={toc}>
    <div dangerouslySetInnerHTML={{__html: contents}} />
  </Layout>
)

Docs.getInitialProps = ({query}) => {
  return {...query}
}

export default Docs
