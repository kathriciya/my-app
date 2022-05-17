import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type CardType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface CardProps extends CardType {
  color?: 'white'| 'blue';
  children: ReactNode;
}