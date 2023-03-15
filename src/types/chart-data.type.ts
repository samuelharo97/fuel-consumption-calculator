export type FuelConsumptionChartData = {
  vehicleModel: string;
  totalConsumption: number;
};

export type FuelConsumptionChartProps = {
  data: FuelConsumptionChartData[];
};

export type FuelConsumptionByModel = {
  vehicleModel: string;
  numVehicles: number;
  averageConsumption: number;
};
