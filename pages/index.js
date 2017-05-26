// @flow
import React from "react";
import Layout from "../components/layout";
import remark from "remark";
import html from "remark-html";
import recommended from "remark-preset-lint-recommended";
import fs from "fs";

type Props = {
  content: string
};

type DefaultProps = {
  query: Object
};

class Docs extends React.Component {
  static async getInitialProps({ query }) {
    let markdown;
    try {
      markdown = await fs.readFile(query.file);
    } catch (err) {
      console.error(err);
    }

    console.log(query.file);
    console.log(markdown);
    const note = await remark().use(recommended).use(html).process(markdown);

    return { body: note };
  }

  render() {
    const { body } = this.props;
    return (
      <Layout className="wrap container-fluid">
        <div dangerouslySetInnerHTML={{ __html: body }}>&gt; content !!</div>
      </Layout>
    );
  }
}

export default Docs;
