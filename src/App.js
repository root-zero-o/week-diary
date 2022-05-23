import React from 'react';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import WeekScore from './components/WeekScore';
import Average from './components/Average';


function App() {

  const DayList = ['일', '월', '화', '수', '목', '금', '토'];
  let ChangeDay = ["","","","","","",""];
  let getDate = new Date().getDay(); 
  let LastPang = ChangeDay.map((value, index) => (value = DayList[(getDate + index)%7]));
  
    
  return (
    <WeekTemplateBlock>
      <GlobalStyle/>
      <WeekTemplateH1>나의 일주일을 평가해보자!😎</WeekTemplateH1>
      <WeekScore week={LastPang[0]}/>
      <WeekScore week={LastPang[1]}/>
      <WeekScore week={LastPang[2]}/>
      <WeekScore week={LastPang[3]}/>
      <WeekScore week={LastPang[4]}/>
      <WeekScore week={LastPang[5]}/>
      <WeekScore week={LastPang[6]}/>
      <Average/>
    </WeekTemplateBlock>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F1EEE9;
  }
`;

const WeekTemplateBlock = styled.div`
    width: 500px;
    height: 90vh;

    margin: 50px auto;
    padding-top: 30px;

    background: white;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);

    text-align: center;
`;

const WeekTemplateH1 = styled.h1`
    font-size: 20px;
`;

export default App;
