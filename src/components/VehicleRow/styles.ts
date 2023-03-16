import { TableRow, styled } from '@mui/material';

export const StyledTableRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.palette.common.white};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
