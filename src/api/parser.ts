import {
  AnalogDataWidget,
  BooleanDataWidget,
  DataPoint
} from 'src/components/DataPoint/DataPoint.type';
import type { EquipmentType, DataPointType } from './getEquipments.type';

export const parseToArray = (content: string): EquipmentType[] => {
  const rows = content.split('\n');
  const headers = rows[1].split(',');

  if (rows[0] !== 'ver:"3.0"') {
    throw new Error('Undefinde API data response');
  }

  const parseArray: EquipmentType[] = rows.slice(2).map((row) => {
    const values = row.split(',');

    return headers.reduce((obj, header, index) => {
      obj[header as keyof EquipmentType] = values[index]?.replace(/^"(.*)"$/, '$1') as string;

      return obj;
    }, {} as EquipmentType);
  });

  return parseArray.filter((item) => item.id !== '');
};

export const parseToArrayPoints = (content: string, equipParent?: string): DataPoint[] => {
  const rows = content.split('\n');
  const headers = rows[1].split(',');

  if (rows[0] !== 'ver:"3.0"') {
    throw new Error('Undefinde API data response');
  }

  const parseArray: DataPoint[] = rows
    .slice(2)
    .map((row) => {
      const values = row.split(',');

      return headers.reduce((obj, header, index) => {
        obj[header as keyof DataPointType] = values[index]?.replace(/^"(.*)"$/, '$1') as string;

        return obj;
      }, {} as DataPointType);
    })
    .filter((item) => item.id !== '' && item.equipRef === equipParent)
    .map((item) => {
      switch (item.kind) {
        case 'Bool':
          return {
            id: item.id,
            equipRef: item.equipRef,
            dis: item.dis,
            type: 'Bool',
            curVal: item.curVal as 'F' | 'T',
            enum: item.enum.split(',')
          } as BooleanDataWidget;
        case 'Number':
          return {
            id: item.id,
            equipRef: item.equipRef,
            dis: item.dis,
            type: 'Number',
            curVal: parseFloat(item.curVal),
            unit: item.unit
          } as AnalogDataWidget;
        default:
          return null;
      }
    })
    .filter((item): item is AnalogDataWidget | BooleanDataWidget => item?.equipRef === equipParent);

  return parseArray;
};
