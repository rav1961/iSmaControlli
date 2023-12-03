import type { EquipmentType } from './getEquipments.type';

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
