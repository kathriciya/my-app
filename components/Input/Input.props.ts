import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputProps extends InputType {}