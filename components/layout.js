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

/*
 * next Link error with export static files
 */
export default ({ children, title = "", className }: Props) => (
  <div className={className}>
    <Head title={`Title | ${pkg.name}`} />

    <header className="site-header">
      <h1><a href="/">{pkg.name}</a></h1>
      <Nav {...pkg.repository} />
    </header>

    <section className="main">
      <aside>
        <div>
          <span className="chap">Basic</span>
          <ul>
            <li>
              <a href="/p/basic/install">Install</a>
            </li>
            <li>
              <a href="/p/basic/getting-stated">Getting Stated</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="chap">Advanced</span>
          <ul>
            <li>
              <a href="/p/advanced/custom-style">Custom Style</a>
            </li>
            <li><a href="/p/advanced/theme">Theme</a></li>
          </ul>
        </div>
        <div>
          <span className="chap">title</span>
          <ul>
            <li><Link href=""><a>a</a></Link></li>
            <li><Link href=""><a>a</a></Link></li>
            <li><Link href=""><a>a</a></Link></li>
            <li><Link href=""><a>a</a></Link></li>
          </ul>
        </div>
      </aside>
      <article>
        {children}
      </article>
    </section>

    {pkg.author
      ? <footer>
          © 2017 <a href={pkg.author.url}>{pkg.author.name}</a>
          . All rights reserved.
        </footer>
      : null}
  </div>
);
