import { useState, useEffect } from 'react';
import { VehicleTable } from '../../components';
import type { VehicleData } from '../../types';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage';

const vehicles = [
  {
    id: 'asdfjnuio',
    licensePlate: 'ABC123',
    vehicleModel: 'Honda Civic',
    tankCapacity: 50,
    maxLoad: 1000,
    averageConsumption: 10,
    distanceTravelled: 500,
    totalConsumption: 50,
  },
  {
    id: '23rpdś',
    licensePlate: 'DEF456',
    vehicleModel: 'Toyota Corolla',
    tankCapacity: 40,
    maxLoad: 800,
    averageConsumption: 8,
    distanceTravelled: 400,
    totalConsumption: 32,
  },
];

export const Table = (): any => {
  const [trucks, setTrucks] = useState<VehicleData[]>([]);

  useEffect(() => {
    const trucksExist: VehicleData[] = loadFromLocalStorage('@Trucks');

    if (!trucksExist) {
      setTrucks([...vehicles]);
    }

    saveToLocalStorage('@Trucks', vehicles);
  }, []);

  const deleteVehicle = (id: string): void => {
    console.log(id);
    const vehicles = trucks.filter((vehicle) => vehicle.id !== id);
    saveToLocalStorage('@Trucks', vehicles);
    setTrucks(vehicles);
  };
  return <VehicleTable handleDeleteTruck={deleteVehicle} data={trucks} />;
};
