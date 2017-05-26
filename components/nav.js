// @flow
import Link from "next/link";

type ILink = {
  href: string,
  label: string,
  key?: string
};

const links: ILink[] = [
  { href: "/", label: "Home" },
  { href: "https://github.com/rhiokim/.seed-next-app", label: "Github" }
].map((link: ILink, i: number) => {
  link.key = `nav-link-${i}`;
  return link;
});

const Nav = () => (
  <nav className="nav-link">
    {links.map(({ key, href, label }) => (
      <Link href={href} key={key}>
        <a>{label}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
