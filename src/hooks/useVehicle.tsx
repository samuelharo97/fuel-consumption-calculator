import { useContext } from 'react';
import { FuelConsumptionChartData, VehicleData, VehicleFormValues } from '../types';
import { saveToLocalStorage } from '../utils';
import { VehicleContext } from '../context/VehicleContext';
import { v4 as uuidv4 } from 'uuid';

export const useVehicle = () => {
  const { setVehicles, vehicles } = useContext(VehicleContext);

  const createVehicle = (values: VehicleFormValues): void => {
    const totalConsumption = calculateTotal(
      values.maxLoad,
      values.distanceTravelled,
      values.averageConsumption,
    );
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
    newVehicle.totalConsumption = totalConsumption;
    setVehicles([...vehicles, newVehicle]);
  };

  const calculateTotal = (
    truckLoad: number,
    distanceTravelled: number,
    averageConsumption: number,
  ): number => {
    const averageWeight = truckLoad / (distanceTravelled * 0.001);

    return Number(((averageConsumption * 1000) / (averageWeight * 1000)).toFixed(3));
  };

  const createChartReadyData = (vehicleData: VehicleData[]): FuelConsumptionChartData[] => {
    return vehicleData.map((vehicle) => ({
      totalConsumption: vehicle.totalConsumption,
      vehicleModel: vehicle.vehicleModel,
    }));
  };

  const handleEdit = (values: VehicleFormValues, id: string): void => {
    const updatedData = vehicles.map((data) => {
      if (data.id === id) {
        const totalConsumption = calculateTotal(
          values.maxLoad,
          values.distanceTravelled,
          values.averageConsumption,
        );
        return {
          ...data,
          licensePlate: values.licensePlate,
          vehicleModel: values.vehicleModel,
          tankCapacity: values.tankCapacity,
          maxLoad: values.maxLoad,
          averageConsumption: values.averageConsumption,
          distanceTravelled: values.distanceTravelled,
          totalConsumption: totalConsumption,
        };
      } else {
        return data;
      }
    });
    setVehicles([...updatedData]);
    saveToLocalStorage('@Trucks', updatedData);
  };

  return {
    handleEdit,
    createVehicle,
    createChartReadyData,
  };
};
