import { DetailedHTMLProps, HTMLAttributes } from "react";

type RatingType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface RatingProps extends RatingType {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number)=>void;
}