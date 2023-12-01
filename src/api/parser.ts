import type { EquipmentType } from './getEquipments.type';

export const parseToArray = (content: string) => {
  const rows = content.split('\n');
  const headers = rows[1].split(',');

  if (rows[0] !== 'ver:"3.0"') {
    return [];
  }

  return rows.slice(2).map((row): EquipmentType[] | object => {
    const values = row.split(',');

    return headers.reduce<{ [key: string]: string }>((obj, header, index) => {
      obj[header] = values[index]?.replace(/^"(.*)"$/, '$1');

      return obj;
    }, {});
  });
};
