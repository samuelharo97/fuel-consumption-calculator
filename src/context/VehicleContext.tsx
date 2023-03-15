import { createContext } from 'react';
import { FuelConsumptionChartData, VehicleData } from '../types';

type VehicleContextType = {
  vehicles: VehicleData[];
  setVehicles: React.Dispatch<React.SetStateAction<VehicleData[]>>;
  chartInfo: FuelConsumptionChartData[];
  setChartInfo: React.Dispatch<React.SetStateAction<FuelConsumptionChartData[]>>;
};

export const VehicleContext = createContext<VehicleContextType>({
  vehicles: [],
  setVehicles: () => {},
  chartInfo: [],
  setChartInfo: () => {},
});
