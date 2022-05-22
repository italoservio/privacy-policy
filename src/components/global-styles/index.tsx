import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mitr:wght@400;500&family=Montserrat&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-shadow: none;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Mitr', sans-serif;
  }
`;
