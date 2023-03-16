import { Box, Typography, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledWelcomePage = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;
  background-color: #f2f2f2;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Description = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const StartButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
`;
