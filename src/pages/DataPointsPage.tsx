import { HeaderInfo } from '../components/HeaderInfo';
import { Message } from '../components/Message';
import { LABEL_NOT_FOUND } from '../consts/labels';

const DataPointsPage = () => {
  return (
    <>
      <HeaderInfo header={'DataPointsPage'} />
      <section>
        <Message txt={LABEL_NOT_FOUND} />
      </section>
    </>
  );
};

export default DataPointsPage;
