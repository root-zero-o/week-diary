import React from 'react';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import WeekTemplate from './components/WeekTemplate';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <WeekTemplate/>
    </>
  );
}

export default App;
