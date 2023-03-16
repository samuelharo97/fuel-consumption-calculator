import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { VehicleContext } from '~/context';
import {
  VehicleFormValues,
  VehicleData,
  FuelConsumptionChartData,
  FuelConsumptionByModel,
} from '~/types';
import { saveToLocalStorage } from '~/utils';

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

  function calculateAverageConsumptionByModel(
    vehicles: FuelConsumptionChartData[],
  ): FuelConsumptionByModel[] {
    const fuelConsumptionsByModel: { [model: string]: number[] } = {};
    const numVehiclesByModel: { [model: string]: number } = {};

    vehicles.forEach((vehicle) => {
      const { vehicleModel, totalConsumption } = vehicle;
      if (!fuelConsumptionsByModel[vehicleModel]) {
        fuelConsumptionsByModel[vehicleModel] = [];
        numVehiclesByModel[vehicleModel] = 0;
      }
      fuelConsumptionsByModel[vehicleModel].push(totalConsumption);
      numVehiclesByModel[vehicleModel]++;
    });

    const fuelConsumptionByModel: FuelConsumptionByModel[] = Object.keys(
      fuelConsumptionsByModel,
    ).map((model) => {
      const totalConsumption = fuelConsumptionsByModel[model].reduce((acc, curr) => acc + curr, 0);
      const numVehicles = numVehiclesByModel[model];
      const averageConsumption = totalConsumption / numVehicles;
      return {
        vehicleModel: model,
        numVehicles: numVehicles,
        averageConsumption,
      };
    });

    return fuelConsumptionByModel;
  }

  const deleteVehicle = (id: string): void => {
    const filteredVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    saveToLocalStorage('@Trucks', filteredVehicles);
    setVehicles(filteredVehicles);
  };

  return {
    handleEdit,
    createVehicle,
    createChartReadyData,
    calculateAverageConsumptionByModel,
    deleteVehicle,
  };
};
