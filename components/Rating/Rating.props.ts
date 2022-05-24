import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from 'react-hook-form';

type RatingType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface RatingProps extends RatingType {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number)=>void;
  error?: FieldError;
}