import { Routes, Route } from 'react-router-dom';
import { CalculateForm, NotFound, Analytics, Home, Table } from '~/pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/calculate" element={<CalculateForm />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
