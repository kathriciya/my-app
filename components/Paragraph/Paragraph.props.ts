import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type ParagraphType = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface ParagraphProps extends ParagraphType {
  size?: 's'| 'm'| 'l';
  children: ReactNode;
}