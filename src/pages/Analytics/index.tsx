import { useContext } from 'react';
import { FuelConsumptionChart } from '../../components/Chart';
import { VehicleContext } from '../../context/VehicleContext';

// const vehicles = [
//   {
//     vehicleModel: 'Honda Civic',
//     totalConsumption: 50,
//   },
//   {
//     vehicleModel: 'Toyota Corolla',
//     totalConsumption: 32,
//   },
// ];

export const Analytics = (): any => {
  const { chartInfo } = useContext(VehicleContext);

  return <FuelConsumptionChart data={chartInfo} />;
};
