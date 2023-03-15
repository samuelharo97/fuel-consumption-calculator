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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const fuelConsumptions = [6.5, 7.8, 5.6, 8.2, 6.1]; // liters per 100km

export const FuelConsumptionChart: React.FC<FuelConsumptionChartProps> = ({ data }) => {

  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Average Fuel Consumption by Truck Model',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Liters per Ton per 100km',
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...fuelConsumptions) + 1,
      },
    },
  };

  const value = {
    labels: data.map((d) => d.vehicleModel),
    datasets: [
      {
        label: 'Fuel Consumption by Vehicle Model',
        data: data.map((d) => d.totalConsumption),
        backgroundColor: 'rgba(135, 201, 132, 0.4)',
        borderColor: '#00863F',
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={value} />;
};
