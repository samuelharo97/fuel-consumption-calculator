import './App.css';
import { Container } from '@mui/material';
import { AppRoutes } from './routes/app-routes';
import PageLayout from './layout';

function App() {
  return (
    <Container>
      <PageLayout />
      {<AppRoutes />}
    </Container>
  );
}

export default App;
