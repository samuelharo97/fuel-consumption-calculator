import { useContext } from 'react';
import { FuelConsumptionChart } from '../../components/FuelConsumptionChart';
import { VehicleContext } from '../../context/VehicleContext';

export const Analytics = (): any => {
  const { chartInfo } = useContext(VehicleContext);

  return <FuelConsumptionChart data={chartInfo} />;
};
