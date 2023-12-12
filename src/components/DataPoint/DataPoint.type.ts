export type AnalogDataWidget = {
  id: string;
  dis: string;
  equipRef: string;
  type: 'Number';
  curVal: number;
  unit: string;
};

export type BooleanDataWidget = {
  id: string;
  dis: string;
  equipRef: string;
  type: 'Bool';
  curVal: 'F' | 'T';
  enum: string[];
};

export type DataPoint = AnalogDataWidget | BooleanDataWidget;

export interface DataPointGenericType<T extends DataPoint> {
  data: T;
}
