
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent =({page, products, firstCategory }: TopPageComponentProps): JSX.Element =>{
    return (
      <>
      {products && products.length}
      </>
      
    );
};