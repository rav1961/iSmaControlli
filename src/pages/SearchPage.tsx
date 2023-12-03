import { HeaderInfo } from '../components/HeaderInfo';
import { Message } from '../components/Message';
import { LABEL_NOT_FOUND } from '../consts/labels';

const SearchPage = () => {
  const count: number = 0;

  return (
    <>
      <HeaderInfo header={`Search results: ${count}`} />
      <section>
        <Message txt={LABEL_NOT_FOUND} />
      </section>
    </>
  );
};

export default SearchPage;
