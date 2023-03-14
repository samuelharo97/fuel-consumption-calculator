import { createBrowserRouter } from 'react-router-dom';
import { Analytics } from '../pages/Analytics';
import { CalculateForm } from '../pages/CalculateForm';
import { Home } from '../pages/Home';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calculate',
    element: <CalculateForm />,
  },
  {
    path: '/analytics', // details
    element: <Analytics />,
  },
]);
