import { GetStaticProps } from "next";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Rating } from "../components/Rating/Rating";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
// import { Layout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { Input } from "../components/Input/Input";
import { Textarea } from "../components/Textarea/Textarea";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Heading tag="h1">Текст</Heading>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="l">Большой</Paragraph>
      <Paragraph size="m">Средний</Paragraph>
      <Paragraph size="s">Маленький</Paragraph>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="m" color="grey">
        Grey
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="jfdhg" />
      <Textarea placeholder="jghfghfdhg" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
