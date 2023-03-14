import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`

*, 
*::after, 
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: ${({ theme }) => theme.palette.background.default};
  height: 100vh;
  width: 100%;
  min-width: 480px;
}


a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }


  main{
    padding: 0 20px;

  }


  @media (max-width: 650px) {
    main{
      padding-top: 100px;
    }
  }

`;
