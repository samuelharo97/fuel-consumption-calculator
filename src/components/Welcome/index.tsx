import { Link } from '@mui/material';
import { StyledWelcomePage, Title, Description, StartButton } from './styles';
import { Link as BrowserLink } from 'react-router-dom';

export const Welcome = () => {
  return (
    <StyledWelcomePage>
      <Title variant="h1" align="center">
        Bem-vindo à nossa Calculadora de Consumo de Combustível!
      </Title>
      <Description variant="body1" align="center">
        Nosso aplicativo permite calcular o consumo médio de combustível por tonelada transportada
        para sua frota de caminhões.
      </Description>
      <Link component={BrowserLink} to={'/calculate'}>
        <StartButton size="large" variant="contained" color="primary">
          Começar
        </StartButton>
      </Link>
    </StyledWelcomePage>
  );
};
