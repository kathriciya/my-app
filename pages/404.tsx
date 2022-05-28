import { Heading } from "../components/Heading/Heading";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {
  return (
    <>
      <Heading tag="h1">Ошибка 404</Heading>
    </>
  );
}

export default withLayout(Error404);
