import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { TableHeaderCell, StyledTableRow } from './styles';
import { DeleteTooltip } from '../DeleteTooltip';
import type { VehicleData } from '../../types/vehicle-data.type';
import { EditTooltip } from '../EditTooltip';
import { EditModal } from '../EditModal';
import React, { useContext, useState } from 'react';
import { VehicleContext } from '../../context/VehicleContext';

interface TableProps {
  data: VehicleData[];
  handleDeleteTruck: (id: string) => void;
}

export const VehicleTable: React.FC<TableProps> = ({ data, handleDeleteTruck }) => {
  const [open, setOpen] = useState(false);
  const [editVehicle, setEditVehicle] = useState<VehicleData>();
  const { vehicles } = useContext(VehicleContext);

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
      <EditModal vehicle={editVehicle} handleClose={handleClose} isOpen={open}></EditModal>
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
              <StyledTableRow key={vehicle.id}>
                <TableCell>{vehicle.licensePlate}</TableCell>
                <TableCell>{vehicle.vehicleModel}</TableCell>
                <TableCell>{vehicle.tankCapacity} L</TableCell>
                <TableCell>{vehicle.maxLoad} t</TableCell>
                <TableCell>{vehicle.averageConsumption} L/100km</TableCell>
                <TableCell>{vehicle.distanceTravelled} km</TableCell>
                <TableCell>{vehicle.totalConsumption} L/t-km</TableCell>
                <TableCell>
                  <EditTooltip
                    editRow={() => {
                      handleOpen(vehicle.id);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <DeleteTooltip
                    removeRow={() => {
                      handleDeleteTruck(vehicle.id);
                    }}
                  />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
