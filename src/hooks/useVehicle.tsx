import { useContext } from 'react';
import { VehicleData, VehicleFormValues } from '../types';
import { saveToLocalStorage } from '../utils';
import { VehicleContext } from '../context/VehicleContext';
import { v4 as uuidv4 } from 'uuid';

export const useVehicle = () => {
  const { setVehicles, vehicles } = useContext(VehicleContext);

  const createVehicle = (values: VehicleFormValues): void => {
    const newVehicle: VehicleData = {
      id: '',
      licensePlate: '',
      vehicleModel: '',
      tankCapacity: 0,
      maxLoad: 0,
      averageConsumption: 0,
      distanceTravelled: 0,
      totalConsumption: 0,
    };

    newVehicle.id = uuidv4();
    newVehicle.averageConsumption = values.averageConsumption;
    newVehicle.distanceTravelled = values.distanceTravelled;
    newVehicle.licensePlate = values.licensePlate;
    newVehicle.maxLoad = values.maxLoad;
    newVehicle.tankCapacity = values.tankCapacity;
    newVehicle.vehicleModel = values.vehicleModel;
    newVehicle.totalConsumption = 500;

    setVehicles([...vehicles, newVehicle]);
  };

  const handleEdit = (values: VehicleFormValues, id: string): void => {
    const updatedData = vehicles.map((data) => {
      if (data.id === id) {
        // const total = calculateConsumption(values)
        return {
          ...data,
          licensePlate: values.licensePlate,
          vehicleModel: values.vehicleModel,
          tankCapacity: values.tankCapacity,
          maxLoad: values.maxLoad,
          averageConsumption: values.averageConsumption,
          distanceTravelled: values.distanceTravelled,
          // totalConsumption: total
        };
      } else {
        return data;
      }
    });
    setVehicles([...updatedData]);
    saveToLocalStorage('@Trucks', updatedData);
  };

  return { handleEdit, createVehicle };
};
