import { createContext } from 'react';
import { VehicleData } from '../types';

type VehicleContextType = {
  vehicles: VehicleData[];
  setVehicles: React.Dispatch<React.SetStateAction<VehicleData[]>>;
};

export const VehicleContext = createContext<VehicleContextType>({
  vehicles: [],
  setVehicles: () => {},
});
