// import
import styled from 'styled-components';
import React, { useState } from 'react';

// Components
import WeekScore from '../components/WeekScore';
import Average from '../components/Average';

function Home(){

    // 오늘에 해당하는 요일이 맨 앞에 오는 배열을 만들어서 props로 넘겨줌
    const DayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const getDate = new Date().getDay(); 
    const lastPang = DayList.map((value, index) => (value = DayList[(getDate + index)%7]));
    
    // 1부터 5까지 범위의 랜덤숫자 배열 만들기
    let GetRandomScore = DayList.map(value => Math.floor(Math.random() * 5 + 1));
    
    // 버튼 누르면 랜덤숫자 배열이 모두 0으로 리셋되는 함수를 만들어 버튼에 연결
    const [count, setCount] = useState(GetRandomScore);
    const OnClickBtn = () => {
        let ScoreArr = [0, 0, 0, 0, 0, 0, 0];
        setCount(ScoreArr);
    }

    return(
        <WeekTemplateBlock>
            <WeekTemplateH1>How was your week?😎</WeekTemplateH1>
            {lastPang.map((value, index) => <WeekScore week={value} score={count[index]}/>)}
            <Average score={count}/>
            <AverageBtn onClick={OnClickBtn}><BtnSpan>Reset</BtnSpan></AverageBtn>
        </WeekTemplateBlock>
    )
}

// Styled Component
const WeekTemplateBlock = styled.div`
    width: 500px;

    margin: 50px auto;
    padding: 30px 0px;

    background: white;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);

    text-align: center;
`;

const WeekTemplateH1 = styled.h1`
    font-size: 30px;
`;

const AverageBtn = styled.button`
    width: 100px;
    height: 50px;

    background-color: #15133C;
    color: white;

    border: none;
    border-radius: 10px;

    margin-top: 20px;

    box-shadow: 0 2px 5px rgba(0,0,0,0.1);

    &:hover{
        background-color: rgba(21,19,60,0.7);
        cursor: pointer;
    }
`;

const BtnSpan = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

export default Home;