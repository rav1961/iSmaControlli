import { BooleanDataPoint } from './BooleanDataPoint';
import NumberDataPoint from './NumberDataPoint';
import './DataPoint.style.scss';
import type { DataPoint, DataPointGenericType } from './DataPoint.type';

const DataPointWidget = <T extends DataPoint>({ data }: DataPointGenericType<T>) => {
  switch (data.type) {
    case 'Bool':
      return (
        <div className="point-item">
          <BooleanDataPoint data={data} />
        </div>
      );
    case 'Number':
      return (
        <div className="point-item">
          <NumberDataPoint data={data} />
        </div>
      );
    default:
      return null;
  }
};

export default DataPointWidget;
