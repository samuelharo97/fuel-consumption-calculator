/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useVehicle } from '~/hooks';
import { VehicleData, FuelConsumptionChartData } from '~/types';
import { loadFromLocalStorage, saveToLocalStorage } from '~/utils';
import { VehicleContext } from '~/context';

interface VehicleProviderProps {
  children: React.ReactNode;
}

export const VehicleProvider: React.FC<VehicleProviderProps> = ({ children }) => {
  const { createChartReadyData } = useVehicle();
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [chartInfo, setChartInfo] = useState<FuelConsumptionChartData[]>([]);

  useEffect(() => {
    let saved = loadFromLocalStorage('@Trucks');

    if (saved === null) {
      saved = [];
    }

    if (saved.length > 0) {
      setVehicles([...saved]);
    }
  }, []);

  useEffect(() => {
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
