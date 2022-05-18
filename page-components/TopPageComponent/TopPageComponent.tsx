
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Heading } from '../../components/Heading/Heading';
import { Tag } from '../../components/Tag/Tag';
import { HhData } from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { Paragraph } from '../../components/Paragraph/Paragraph';

export const TopPageComponent =({page, products, firstCategory }: TopPageComponentProps): JSX.Element =>{
    return (
      <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag='h1'>{page.title}</Heading>
        {products &&<Tag color='grey' size='m'>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p=> (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Heading tag='h2'>Вакансии - {page.category}</Heading>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
				<Heading tag='h2'>Преимущства</Heading>
				<Advantages advantages={page.advantages} />
			</>
			}
      {page.seoText && <Paragraph>{page.seoText}</Paragraph>}
      <Heading tag='h2'>Получаемые навыки</Heading>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
      </div>
      
    );
};