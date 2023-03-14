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
import type React from 'react';
import { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/local-storage';

interface TableProps {
  data: VehicleData[];
  handleDeleteTruck: (id: string) => void;
}

export const VehicleTable: React.FC<TableProps> = ({ data, handleDeleteTruck }) => {
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState<VehicleData>();

  const handleOpen = (id: string): void => {
    const allTrucks: VehicleData[] = loadFromLocalStorage('@Trucks');

    const truckToEdit = allTrucks.find((vehicle) => vehicle.id === id);

    if (truckToEdit == null) {
      throw new Error('Truck not found');
    }

    setVehicle(truckToEdit);
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <EditModal vehicle={vehicle} handleClose={handleClose} isOpen={open}></EditModal>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>License Plate</TableHeaderCell>
              <TableHeaderCell>Vehicle Model</TableHeaderCell>
              <TableHeaderCell>Tank Capacity</TableHeaderCell>
              <TableHeaderCell>Max Load</TableHeaderCell>
              <TableHeaderCell>Average Consumption</TableHeaderCell>
              <TableHeaderCell>Distance Travelled</TableHeaderCell>
              <TableHeaderCell>Consumption</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((vehicle) => (
              <StyledTableRow key={vehicle.id}>
                <TableCell>{vehicle.licensePlate}</TableCell>
                <TableCell>{vehicle.vehicleModel}</TableCell>
                <TableCell>{vehicle.tankCapacity}</TableCell>
                <TableCell>{vehicle.maxLoad}</TableCell>
                <TableCell>{vehicle.averageConsumption}</TableCell>
                <TableCell>{vehicle.distanceTravelled}</TableCell>
                <TableCell>{vehicle.totalConsumption}</TableCell>
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
