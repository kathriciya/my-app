
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewModel } from '../../interfaces/product.interface';

type ReviewType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface ReviewProps extends ReviewType {
	review: ReviewModel;
}