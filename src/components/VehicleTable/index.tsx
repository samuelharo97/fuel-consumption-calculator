import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { TableHeaderCell, StyledTableRow } from './styles';
import { DeleteTooltip } from '../DeleteTooltip';
import { VehicleData } from '../../types/vehicle-data.type';

interface TableProps {
  data: VehicleData[];
}

export const VehicleTable: React.FC<TableProps> = ({ data }) => {
  const deleteVehicle = (id: string) => {
    console.log(id);
    const vehicles = data.filter(vehicle => vehicle.id != id);

    localStorage.setItem('@Trucks', JSON.stringify(vehicles));
  };

  return (
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
          {data.map(vehicle => (
            <StyledTableRow key={vehicle.id}>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>{vehicle.vehicleModel}</TableCell>
              <TableCell>{vehicle.tankCapacity}</TableCell>
              <TableCell>{vehicle.maxLoad}</TableCell>
              <TableCell>{vehicle.averageConsumption}</TableCell>
              <TableCell>{vehicle.distanceTravelled}</TableCell>
              <TableCell>{vehicle.totalConsumption}</TableCell>
              <TableCell>
                <DeleteTooltip removeRow={() => deleteVehicle(vehicle.id)} />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
