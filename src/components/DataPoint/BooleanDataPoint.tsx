import type { BooleanDataWidget } from './DataPoint.type';

interface BooleanDataPointPropsType {
  data: BooleanDataWidget;
}

export const BooleanDataPoint = ({ data }: BooleanDataPointPropsType) => {
  return (
    <div className="point-item__toggle">
      <h4 className="point-item__title">{data.dis}</h4>
    </div>
  );
};
