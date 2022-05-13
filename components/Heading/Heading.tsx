import { HeadingProps } from "./Heading.props";
import styles from './Heading.module.css';

export const Heading =({tag, children, ...props }: HeadingProps): JSX.Element =>{
  switch(tag) {
    case 'h1':
    return <h1 {...props} className={styles.h1}>{children}</h1>;
    case 'h2':
    return <h2 {...props} className={styles.h2}>{children}</h2>;
    case 'h3':
    return <h3 {...props}  className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};