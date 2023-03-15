import { HeaderSidebar as Header } from './components/Header/Header';
import './App.css';
import { Container } from '@mui/material';
import { AppRoutes } from './routes/app-routes';

const vehicles = [
  {
    id: 'asdfjnuio',
    licensePlate: 'ABC123',
    vehicleModel: 'Honda Civic',
    tankCapacity: 50,
    maxLoad: 1000,
    averageConsumption: 10,
    distanceTravelled: 500,
    totalConsumption: 50,
  },
  {
    id: '23rpdś',
    licensePlate: 'DEF456',
    vehicleModel: 'Toyota Corolla',
    tankCapacity: 40,
    maxLoad: 800,
    averageConsumption: 8,
    distanceTravelled: 400,
    totalConsumption: 32,
  },
];
function App() {
  return (
    <Container>
      <Header />
      {<AppRoutes />}
    </Container>
  );
}

export default App;
