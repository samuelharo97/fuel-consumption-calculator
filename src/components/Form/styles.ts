import styled from 'styled-components';
import { Box } from '@mui/system';
import { Autocomplete, Button, TextField } from '@mui/material';

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

export const Container = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

export const StyledInput = styled(TextField)({
  width: '800px',
});
export const StyledAuto = styled(Autocomplete)({
  width: '800px',
});

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: start;
`;

export const FormTitle = styled('h2')({
  marginBottom: '20px',
});

export const SubmitButton = styled(Button)({
  marginTop: '20px',
  width: '120px',
  alignSelf: 'flex-end',
});

export const StyledDivForInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  gap: '43px',
});
