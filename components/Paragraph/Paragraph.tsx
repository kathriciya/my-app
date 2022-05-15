import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph =({size = 'm', children, className, ...props }: ParagraphProps): JSX.Element =>{
    return <p {...props}  className={cn(styles.paragraph, className, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.l]: size == 'l'
    })}>{children}</p>;
  
};