import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    font-family: 'Spartan', Helvetica, sans-serif;
    font-size: 16px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  
        @media (max-width: 280px) {
          font-size: 15px;
        }
  
        @media (min-width: 768px) {
          font-size: 16px;
        }
  
        @media (min-width: 1024px) {
          font-size: 18px;
        }
  }
`