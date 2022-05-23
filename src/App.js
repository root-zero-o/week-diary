import React, { useState } from 'react';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import WeekScore from './components/WeekScore';
import Average from './components/Average';


function App() {

  const DayList = ['일', '월', '화', '수', '목', '금', '토'];
  const getDate = new Date().getDay(); 
  const lastPang = DayList.map((value, index) => (value = DayList[(getDate + index)%7]));

  // let Score = ["", "", "", "", "", "", ""];
  let GetRandomScore = DayList.map(value => Math.floor(Math.random() * 5 + 1));

  const [count, setCount] = useState(GetRandomScore);
  const OnClickBtn = () => {
    let ScoreArr = [0, 0, 0, 0, 0, 0, 0];
    setCount(ScoreArr);
  }

  return (
    <WeekTemplateBlock>
      <GlobalStyle/>
      <WeekTemplateH1>나의 일주일을 평가해보자!😎</WeekTemplateH1>
      {lastPang.map((value, index) => <WeekScore week={value} score={count[index]}/>)}
      <Average score={count}/>
      <AverageBtn onClick={OnClickBtn}>Reset</AverageBtn>
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

const AverageBtn = styled.button`
    width: 100px;
    height: 50px;

    background-color: #15133C;
    color: white;

    border: none;
    border-radius: 10px;

    margin-top: 20px;

    &:hover{
        background-color: rgba(21,19,60,0.7);
    }
`;

export default App;
