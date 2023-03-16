import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableHeaderCell } from './styles';
import React from 'react';
import { VehicleRow } from '~/components';
import { VehicleData } from '~/types';

interface TableProps {
  data: VehicleData[];
}

export const VehicleTable: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Placa</TableHeaderCell>
              <TableHeaderCell>Modelo</TableHeaderCell>
              <TableHeaderCell>Capacidade do tanque</TableHeaderCell>
              <TableHeaderCell>Carga máxima</TableHeaderCell>
              <TableHeaderCell>Consumo médio</TableHeaderCell>
              <TableHeaderCell>Distância percorrida</TableHeaderCell>
              <TableHeaderCell>Consumo total</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((vehicle) => (
              <VehicleRow key={vehicle.id} vehicle={vehicle} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
