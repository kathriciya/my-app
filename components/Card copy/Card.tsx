
import cn from 'classnames';
import styles from './Card.module.css';
import { CardProps } from '../Card/Card.props';

export const Card =({color = 'white', children, className, ...props }: CardProps): JSX.Element =>{
    return <div {...props}  className={cn(styles.card, className, {
      [styles.blue]: color == 'blue',
    })}>{children}</div>;
  
};