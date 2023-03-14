import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Form } from './components/Form';
import { HeaderSidebar } from './components/Header';
import { VehicleTable } from './components/VehicleTable';

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
    licensePlate: 'ABC123',
    vehicleModel: 'Honda Civic',
    tankCapacity: 50,
    maxLoad: 1000,
    averageConsumption: 10,
    distanceTravelled: 500,
    consumption: 50
  },
  {
    licensePlate: 'DEF456',
    vehicleModel: 'Toyota Corolla',
    tankCapacity: 40,
    maxLoad: 800,
    averageConsumption: 8,
    distanceTravelled: 400,
    consumption: 32
  }
];

export default function App() {
  return (
    <>
      <HeaderSidebar />
      <Container maxWidth="lg">
        <Box sx={{ my: 24 }}>
          <Typography variant="h1" component="h1" gutterBottom></Typography>
        </Box>
        <VehicleTable data={vehicles} />
      </Container>
    </>
  );
}
