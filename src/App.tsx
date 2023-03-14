import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Form } from './components/Form';
import { HeaderSidebar } from './components/Header';
import { VehicleTable } from './components/VehicleTable';
import { useEffect, useState } from 'react';
import { VehicleData } from './types/vehicle-data.type';
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from './utils/local-storage';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

const vehicles = [
  {
    id: 'asdfjnuio',
    licensePlate: 'ABC123',
    vehicleModel: 'Honda Civic',
    tankCapacity: 50,
    maxLoad: 1000,
    averageConsumption: 10,
    distanceTravelled: 500,
    totalConsumption: 50
  },
  {
    id: '23rpdś',
    licensePlate: 'DEF456',
    vehicleModel: 'Toyota Corolla',
    tankCapacity: 40,
    maxLoad: 800,
    averageConsumption: 8,
    distanceTravelled: 400,
    totalConsumption: 32
  }
];

export default function App() {
  const [trucks, setTrucks] = useState<VehicleData[]>([]);

  useEffect(() => {
    const trucksExist: VehicleData[] = loadFromLocalStorage('@Trucks');

    trucksExist.length > 0 ? setTrucks(trucksExist) : setTrucks([...vehicles]);
    saveToLocalStorage('@Trucks', vehicles);
  }, []);

  const deleteVehicle = (id: string) => {
    console.log(id);
    const vehicles = trucks.filter(vehicle => vehicle.id != id);
    saveToLocalStorage('@Trucks', vehicles);
    setTrucks(vehicles);
  };

  // const handleEdit = (vehicle: VehicleData) => {
  //   setTrucks((prevData: VehicleData[]) => {
  //     const updatedData = prevData.map(data => {
  //       if (data.id === vehicle.id) {
  //         console.log(vehicle.id);
  //         return {
  //           ...data,
  //           licensePlate: vehicle.licensePlate,
  //           vehicleModel: vehicle.vehicleModel,
  //           tankCapacity: vehicle.tankCapacity,
  //           maxLoad: vehicle.maxLoad,
  //           averageConsumption: vehicle.averageConsumption,
  //           distanceTravelled: vehicle.distanceTravelled,
  //           totalConsumption: vehicle.totalConsumption
  //         };
  //       } else {
  //         return data;
  //       }
  //     });
  //     return updatedData;
  //   });
  // };

  return (
    <>
      <HeaderSidebar />
      <Container maxWidth="lg">
        <Box sx={{ my: 24 }}>
          <Typography variant="h1" component="h1" gutterBottom></Typography>
        </Box>
        <VehicleTable handleDeleteTruck={deleteVehicle} data={trucks} />
      </Container>
    </>
  );
}
