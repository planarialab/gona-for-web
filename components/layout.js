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

    <header className="site-header">
      <h1>{pkg.name}</h1>
      <Nav />
    </header>

    <section className="main">
      <aside>
        <div>
          <span className="chap">title</span>
          <ul>
            <li><Link href="/basic/install">Install</Link></li>
            <li><Link href="">Getting Stated</Link></li>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
          </ul>
        </div>
        <div>
          <span className="chap">title</span>
          <ul>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
          </ul>
        </div>
        <div>
          <span className="chap">title</span>
          <ul>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
            <li><Link href="">a</Link></li>
          </ul>
        </div>
      </aside>
      <article>
        {children}
      </article>
    </section>

    <footer>
      © 2017 <a href="https://github.com/slothlab">Slothlab</a>
      . All rights reserved.
    </footer>
  </div>
);
