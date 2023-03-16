import { useContext } from 'react';
import { VehicleTable } from '../../components';
import { VehicleContext } from '../../context/VehicleContext';

export const Table = (): any => {
  const { vehicles } = useContext(VehicleContext);

  return <VehicleTable data={vehicles} />;
};
