import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type HeadingType = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export interface HeadingProps extends HeadingType {
  tag: 'h1'| 'h2'| 'h3';
  children: ReactNode;
}