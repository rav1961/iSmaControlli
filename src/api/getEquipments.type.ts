export type EquipmentType = {
  id: string;
  dis: string;
  equip: string;
  equipRef: string;
};

export type DataPointType = {
  id: string;
  writable: string;
  cur: string;
  curStatus: string;
  dis: string;
  point: string;
  curVal: string;
  kind: string;
  equipRef?: string | null;
  enum: string;
  unit: string;
};
