import { createGlobalStyle} from 'styled-components';
import './Index.css';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    font-family: 'Koulen', cursive;
}
body {
    background-color: #73777B;
  }
`;

export default GlobalStyle;