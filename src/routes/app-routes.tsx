import { Routes, Route } from 'react-router-dom';
import { CalculateForm } from '../pages/CalculateForm';
import { Table } from '../pages/Table';
import { Analytics } from '../pages/Analytics';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/calculate" element={<CalculateForm />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};
