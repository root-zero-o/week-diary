// import
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const MyWeek = (props) => {
    const { MyWeek } = useParams();

    const [circleScore, setCircleScore] = useState(0);
    const onClickCircle = (event) => {
        let circleId = event.target.id;
        setCircleScore(circleId);
    }

    return(
        <>
            <MyWeekTemplate>
                <WeekH2>Today is {MyWeek} !</WeekH2>
                <MyWeekSpan>How was your day?✍️</MyWeekSpan>
                <CircleContainer>
                    <Circle id="1" onClick={onClickCircle} score={circleScore}/>
                    <Circle id="2" onClick={onClickCircle} score={circleScore}/>
                    <Circle id="3" onClick={onClickCircle} score={circleScore}/>
                    <Circle id="4" onClick={onClickCircle} score={circleScore}/>
                    <Circle id="5" onClick={onClickCircle} score={circleScore}/>
                </CircleContainer>
                <MyWeekSpan>Today's score is {circleScore} 😋</MyWeekSpan>
                <Link to={`/`}><MyWeekBtn><MyWeekSpan>Submit</MyWeekSpan></MyWeekBtn></Link>
            </MyWeekTemplate>
        </>
    )
}

const MyWeekTemplate = styled.div`
    width: 500px;

    margin: 50px auto;
    padding: 40px 0px;

    background: white;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WeekH2 = styled.h2`
    font-size: 40px;
    margin-bottom: 10px;
`;

const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 60px 0px;
`;

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin-right: 10px;
    background-color: #eee;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);

    &:first-child{
        background-color: ${props => props.score >= 1 ? "#EC994B" : "#eee"};
    }
    &:nth-child(2){
        background-color: ${props => props.score >= 2 ? "#EC994B" : "#eee"};
    }
    &:nth-child(3){
        background-color: ${props => props.score >= 3 ? "#EC994B" : "#eee"};
    }
    &:nth-child(4){
        background-color: ${props => props.score >= 4 ? "#EC994B" : "#eee"};
    }
    &:nth-child(5){
        background-color: ${props => props.score >= 5 ? "#EC994B" : "#eee"};
    }
    &:hover{
        background-color: #EC994B;
        cursor: pointer;
    }
`;

const MyWeekBtn = styled.div`
    width: 150px;
    height: 50px;

    background-color: #15133C;
    color: white;

    border: none;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 2px 3px rgba(0,0,0,0.1);

    margin-top: 20px;

    &:hover{
        background-color: rgba(21,19,60,0.7);
    }
`;

const MyWeekSpan = styled.span`
    text-decoration: none;
    font-size: 25px;
`;

export default MyWeek;