import { createContext, useContext } from 'react';
import { EquipmentType } from '../api/getEquipments.type';
import { useQuery } from 'react-query';
import { getEquipments } from '../api/getEquipments';
import { parseToArray } from '../api/parser';
import { useErrorBoundary } from 'react-error-boundary';

import type { PropsWithChildren } from 'react';

type EquipmentContextType = {
  data?: EquipmentType[];
};

const DriverContext = createContext<EquipmentContextType | undefined>(undefined);

export const DriverProvider = ({ children }: PropsWithChildren) => {
  const { showBoundary } = useErrorBoundary();

  const data = useQuery('equipments', getEquipments, {
    select: parseToArray
  });

  if (data.isError) {
    showBoundary(data.error);
    return null;
  }

  return <DriverContext.Provider value={data}>{children}</DriverContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDriverData = () => {
  const context = useContext(DriverContext);

  if (!context) {
    throw new Error('useDriverData must be used within a DriverProvider');
  }

  return context;
};
