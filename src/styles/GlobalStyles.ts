import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #2e2e2e;
    --light-grey: #C0C0C0;
  }

  html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    
    @media (max-width: 60em) {
      font-size: 56.25%; //1 rem = 10px; 10px/16px = 62.5%
    }
  }

  body {
    font-size: 2rem;
  }
`
