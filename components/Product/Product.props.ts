import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../interfaces/product.interface";

type ProductType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface ProductProps extends ProductType {
  product: ProductModel;
}