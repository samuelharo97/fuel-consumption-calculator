import { FuelConsumptionChart } from '../../components/Chart';

const vehicles = [
  {
    vehicleModel: 'Honda Civic',
    totalConsumption: 50,
  },
  {
    vehicleModel: 'Toyota Corolla',
    totalConsumption: 32,
  },
];

export const Analytics = (): any => {
  return <FuelConsumptionChart data={vehicles} />;
};
