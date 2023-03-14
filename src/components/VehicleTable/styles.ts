import { TableRow, TableCell } from '@mui/material';
import styled from 'styled-components';

export const StyledTableRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.palette.common.white};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export const TableHeaderCell = styled(TableCell)`
  font-weight: bold;
`;
