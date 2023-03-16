import React from 'react';
import { TableCell } from '@mui/material';
import { StyledTableRow } from './styles';
import { VehicleData } from '~/types';
import { DeleteTooltip, EditTooltip } from '~/components';

interface VehicleRowProps {
  vehicle: VehicleData;
  handleOpen: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const VehicleRow: React.FC<VehicleRowProps> = ({ vehicle, handleOpen, handleDelete }) => {
  return (
    <>
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
              handleDelete(vehicle.id);
            }}
          />
        </TableCell>
      </StyledTableRow>
    </>
  );
};
