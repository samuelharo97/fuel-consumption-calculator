import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FuelConsumptionChartProps } from '../../types';
import { useVehicle } from '../../hooks/useVehicle';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const FuelConsumptionChart: React.FC<FuelConsumptionChartProps> = ({ data }) => {
  const { calculateAverageConsumptionByModel } = useVehicle();
  const averageConsumptionsByModel = calculateAverageConsumptionByModel(data);
  const dataMax = data.map((vehicle) => vehicle.totalConsumption);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Consumo médio por modelo',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Litros por Tonelada por 100km',
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...dataMax) + 1,
      },
    },
  };

  const value = {
    labels: averageConsumptionsByModel.map((item) => item.vehicleModel),
    datasets: [
      {
        label: 'Consumo de combustível por modelo em L/t-km',
        data: averageConsumptionsByModel.map((item) => item.averageConsumption),
        backgroundColor: 'rgba(135, 201, 132, 0.4)',
        borderColor: '#00863F',
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={value} />;
};
