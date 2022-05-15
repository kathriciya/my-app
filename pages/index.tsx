import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";


export default function Home(): JSX.Element {
  return (
    <>
      <Heading tag='h1'>Текст</Heading>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
    </>
  );
}
