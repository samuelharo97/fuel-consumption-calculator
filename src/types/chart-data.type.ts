export type FuelConsumptionChartData = {
  vehicleModel: string;
  totalConsumption: number;
};

export type FuelConsumptionChartProps = {
  data: FuelConsumptionChartData[];
};