import { DetailedHTMLProps, HTMLAttributes } from 'react';

type ReviewFormType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface ReviewFormProps extends ReviewFormType {
	productId: string;
	isOpened: boolean;
}