// @flow
import React from "react"
import Layout from "../components/layout"
import remark from "remark"
import html from "remark-html"
import recommended from "remark-preset-lint-recommended"

type Props = {
  text: string
}

const Docs = ({text}: Props) => {
  return (
    <Layout className="wrap container-fluid" title="Next Note">
      <div dangerouslySetInnerHTML={{__html: text}} />
    </Layout>
  )
}

Docs.getInitialProps = async ({query}) => {
  let markdown = query.markdown
  const note = await remark().use(recommended).use(html).process(markdown)
  return {text: note.contents}
}

export default Docs
