import styled from 'styled-components';
import { Box } from '@mui/system';
import { TextField, Button } from '@mui/material';

export const StyledDiv = styled(Box)({
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px'
});

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto'
});

export const StyledDive = styled.div`          <~ WORKING
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const FormTitle = styled('h2')({
  marginBottom: '20px'
});

export const FormField = styled(TextField)({
  marginBottom: '20px'
});

export const SubmitButton = styled(Button)({
  marginTop: '20px',
  alignSelf: 'flex-end'
});
