// @flow
import type { Element } from "react";

type Props = {
  children?: Element<any>,
  title: string
};

export default ({ children, title }: Props) => (
  <div className="chap">
    <span className="chap-title">{title}</span>
    <ul>
      {children}
    </ul>
  </div>
);
