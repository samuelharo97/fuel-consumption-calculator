import styled from 'styled-components';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export const StyledDiv = styled(Box)({
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
});

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  gap: '20px',
});

export const FlexDiv = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const FormTitle = styled('h2')({
  marginBottom: '20px',
});

export const SubmitButton = styled(Button)({
  marginTop: '20px',
  width: '120px',
  alignSelf: 'flex-end',
});
