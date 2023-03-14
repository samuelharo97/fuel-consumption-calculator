import { StyledWelcomePage, Title, Description, StartButton } from './styles';

export const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <Title variant="h1" align="center">
        Bem-vindo à nossa Calculadora de Consumo de Combustível!
      </Title>
      <Description variant="body1" align="center">
        Nosso aplicativo permite calcular o consumo médio de combustível por tonelada transportada
        para sua frota de caminhões.
      </Description>
      <StartButton variant="contained" size="large" color="primary">
        Começar
      </StartButton>
    </StyledWelcomePage>
  );
};
