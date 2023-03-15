import { useEffect, useState } from 'react';
import { VehicleData } from '../types';
import { VehicleContext } from './VehicleContext';
import { loadFromLocalStorage } from '../utils';

interface VehicleProviderProps {
  children: React.ReactNode;
}

export const VehicleProvider: React.FC<VehicleProviderProps> = ({ children }) => {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);

  useEffect(() => {
    const saved = loadFromLocalStorage('@Trucks');
    if (saved) {
      setVehicles([...saved]);
    }
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles }}>{children}</VehicleContext.Provider>
  );
};
