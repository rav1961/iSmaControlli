const useEquipmentsList = () => {
  return '';
};

export default useEquipmentsList;

/*
enum DataItemHeader {
  id = 'id',
  dis = 'dis',
  equip = 'equip',
  writable = 'writable',
  cur = 'cur',
  curStatus = 'curStatus',
  point = 'point',
  curVal = 'curVal',
  kind = 'kind',
  enum = 'enum',
  equipRef = 'equipRef',
  unit = 'unit'
}

type DataItem = {
  id: string;
  dis: string;
  equip: string;
  writable: 'M' | 'F';
  cur: string;
  curStatus: 'ok' | 'unknown';
  point: string;
  curVal: 'F' | 'T' | number;
  kind: 'Number' | 'Bool';
  enum?: string;
  equipRef?: string;
  unit?: string;
};

type ListType = {
  data: Array<DataItem> | [];
  depth: number;
};

const haystackParser = (content: string) => {
  const rows = content.split('\n');
  const headers = rows[1].split(',');

  if (rows[0] !== 'ver:"3.0"') {
    return [];
  }

  return rows.slice(2).map((row: string) => {
    const values = row.split(',');

    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];

      return obj;
    }, {});
  });
};

const data = haystackParser(fixtures);
const onlyEquipment = data.filter((item) => item.equip === 'M');

const buildList = (data: DataItem[] = [], depth: number = 0) => {
  if (Array.isArray(data)) {
    return ;
  } else if (typeof data === 'object') {
  } else {
  }
};

*/
