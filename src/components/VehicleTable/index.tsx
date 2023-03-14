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

interface VehicleFormValues {
  licensePlate: string;
  vehicleModel: string;
  tankCapacity: number;
  maxLoad: number;
  averageConsumption: number;
  distanceTravelled: number;
  consumption: number;
}

interface TableProps {
  data: VehicleFormValues[];
}

export const VehicleTable: React.FC<TableProps> = ({ data }) => {
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
          {data.map((vehicle, index) => (
            <StyledTableRow key={index}>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>{vehicle.vehicleModel}</TableCell>
              <TableCell>{vehicle.tankCapacity}</TableCell>
              <TableCell>{vehicle.maxLoad}</TableCell>
              <TableCell>{vehicle.averageConsumption}</TableCell>
              <TableCell>{vehicle.distanceTravelled}</TableCell>
              <TableCell>{vehicle.consumption}</TableCell>
              <TableCell>
                <DeleteTooltip />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
