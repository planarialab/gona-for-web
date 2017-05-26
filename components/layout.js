// @flow
import type { Element } from "react";
import Link from "next/link";
import Head from "./head";
import Nav from "./nav";
import pkg from "../package.json";

type Props = {
  children?: Element<any>,
  title?: string,
  className?: string
};

export default ({ children, title = "", className }: Props) => (
  <div className={className}>
    <Head title={`Title | ${pkg.name}`} />

    <header>
      <h1>{pkg.name}</h1>
      <Nav />
    </header>

    {children}

    <footer>
      <p className="">
        © 2017
        {" "}
        <a href="https://github.com/slothlab">Slothlab</a>
        . All rights reserved.
      </p>
    </footer>
  </div>
);
