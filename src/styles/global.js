import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    --black--color: #0C0C0C;
    --light-black--color: #191919;
    --blue--color: #156DAC;
    --dark-blue--color: #0B4FA0;
    --gray--color: #D8DAE8;
    --white--color: #F0F0F0;
  }


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: var(--black--color);
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--gray--color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
