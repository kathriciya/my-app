import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from 'react-hook-form';

type TextareaType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface TextareaProps extends TextareaType {
  error?: FieldError;
}