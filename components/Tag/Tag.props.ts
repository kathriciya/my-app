import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type TagType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface TagProps extends TagType {
  size?: 's'| 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}