import { parseToArrayPoints } from 'src/api/parser';
import { HeaderInfo } from '../components/HeaderInfo';
import { Message } from '../components/Message';
import { LABEL_NOT_FOUND } from '../consts/labels';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getDatapoints } from 'src/api/getDatapoints';
import { DataPointWidget } from 'src/components/DataPoint';

const DataPointsPage = () => {
  const { equipment } = useParams();
  const { data, isError, error } = useQuery('datapoints', getDatapoints, {
    select: (datastring) => parseToArrayPoints(datastring, equipment),
    refetchInterval: 1000
  });

  if (isError) {
    console.log('error', error);
    // throw new Error(error.msg);
  }

  return (
    <>
      <HeaderInfo header={'DataPointsPage'} />
      <section className="flex flex-col gap-4 p-4 border-1 border-navy-500 rounded-[10px] lg:gap-8 lg:max-w-6xl lg:px-[28px] lg:p-8">
        {data?.map((item) => <DataPointWidget key={item.id} data={item} />)}
        {data?.length === 0 && <Message txt={LABEL_NOT_FOUND} />}
      </section>
    </>
  );
};

export default DataPointsPage;
