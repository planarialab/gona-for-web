// @flow
import Link from "next/link";

type ILink = {
  href: string,
  label: string,
  key?: string
};

type Props = {
  url: string,
  type?: string
};

const links: ILink[] = [
  { href: "/", label: "Home" }
].map((link: ILink, i: number) => {
  link.key = `nav-link-${i}`;
  return link;
});

const Nav = ({ url, type }: Props) => (
  <nav className="nav-link">
    {links.map(({ key, href, label }) => <a href={href} key={key}>{label}</a>)}
    <a href={url}>Github</a>
  </nav>
);

export default Nav;
