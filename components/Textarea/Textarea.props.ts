import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type TextareaType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface TextareaProps extends TextareaType {}