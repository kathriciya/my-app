import { Heading } from "../components/Heading/Heading";
import { withLayout } from "../layout/Layout";

function Error500(): JSX.Element {
  return (
    <>
      <Heading tag="h1">Ошибка 500</Heading>
    </>
  );
}

export default withLayout(Error500);
