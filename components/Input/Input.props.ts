import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {FieldError} from 'react-hook-form';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputProps extends InputType {
  error?: FieldError
}