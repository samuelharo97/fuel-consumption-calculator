import React, { useState, useContext } from 'react';
import { TableCell } from '@mui/material';
import { StyledTableRow } from './styles';
import { VehicleContext } from '~/context';
import { useVehicle } from '~/hooks';
import { VehicleData } from '~/types';
import { DeleteTooltip, EditModal, EditTooltip } from '~/components';

interface VehicleRowProps {
  vehicle: VehicleData;
}

export const VehicleRow: React.FC<VehicleRowProps> = ({ vehicle }) => {
  const [open, setOpen] = useState(false);
  const [editVehicle, setEditVehicle] = useState<VehicleData>();
  const { vehicles } = useContext(VehicleContext);
  const { deleteVehicle } = useVehicle();

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
              deleteVehicle(vehicle.id);
            }}
          />
        </TableCell>
      </StyledTableRow>
    </>
  );
};
