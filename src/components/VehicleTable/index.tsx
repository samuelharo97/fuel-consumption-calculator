import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableHeaderCell } from './styles';
import React, { useContext, useState } from 'react';
import { EditModal, VehicleRow } from '~/components';
import { VehicleData } from '~/types';
import { VehicleContext } from '~/context';

interface TableProps {
  data: VehicleData[];
}

export const VehicleTable: React.FC<TableProps> = ({ data }) => {
  const { vehicles } = useContext(VehicleContext);
  const [open, setOpen] = useState(false);
  const [editVehicle, setEditVehicle] = useState<VehicleData>();

  const handleOpen = (id: string): void => {
    const truckToEdit = vehicles.find((vehicle) => vehicle.id === id);
    if (truckToEdit == null) {
      throw new Error('Truck not found');
    }
    setEditVehicle(truckToEdit);
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <EditModal vehicle={editVehicle} handleClose={handleClose} isOpen={open}></EditModal>;
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
              <VehicleRow
                key={vehicle.id}
                handleOpen={() => handleOpen(vehicle.id)}
                vehicle={vehicle}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
