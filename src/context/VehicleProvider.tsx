import { useEffect, useState } from 'react';
import { FuelConsumptionChartData, VehicleData } from '../types';
import { VehicleContext } from './VehicleContext';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils';
import { useVehicle } from '../hooks/useVehicle';

interface VehicleProviderProps {
  children: React.ReactNode;
}

export const VehicleProvider: React.FC<VehicleProviderProps> = ({ children }) => {
  const { createChartReadyData } = useVehicle();
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [chartInfo, setChartInfo] = useState<FuelConsumptionChartData[]>([]);

  useEffect(() => {
    const saved = loadFromLocalStorage('@Trucks');
    console.log('saved');
    if (saved.length > 0) {
      setVehicles([...saved]);
    }
  }, []);

  useEffect(() => {
    console.log('checks for loop');
    saveToLocalStorage('@Trucks', vehicles);
    const chartData = createChartReadyData(vehicles);
    setChartInfo(chartData);
  }, [vehicles]);

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles, chartInfo, setChartInfo }}>
      {children}
    </VehicleContext.Provider>
  );
};
