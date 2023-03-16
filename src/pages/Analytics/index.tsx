import { useContext } from 'react';
import { FuelConsumptionChart } from '../../components/Chart';
import { VehicleContext } from '../../context/VehicleContext';

export const Analytics = (): any => {
  const { chartInfo } = useContext(VehicleContext);

  return <FuelConsumptionChart data={chartInfo} />;
};
