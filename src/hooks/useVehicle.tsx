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
    const totalConsumption = calculateTotalFuelConsumption(
      values.maxLoad,
      values.distanceTravelled,
      values.averageConsumption,
    );

    const newVehicle: VehicleData = {
      ...values,
      id: uuidv4(),
      totalConsumption: totalConsumption,
    };

    setVehicles([...vehicles, newVehicle]);
  };

  const calculateTotalFuelConsumption = (
    maxWeightInTons: number,
    distanceInKm: number,
    consumptionPer100km: number,
  ): number => {
    const consumptionPerKm = consumptionPer100km / 100;

    const averageWeightPerKm = maxWeightInTons / (distanceInKm * 0.001);

    const averageConsumptionPerTons = (consumptionPerKm * 1000) / (averageWeightPerKm * 1000);

    return Number(averageConsumptionPerTons.toFixed(3));
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
        const totalConsumption = calculateTotalFuelConsumption(
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

  const deleteVehicle = (id: string | undefined): void => {
    if (!id) {
      throw new Error('ID is undefined');
    }

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
