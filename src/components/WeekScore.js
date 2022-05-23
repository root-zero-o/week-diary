import styled from 'styled-components';

const WeekScore = (props) => {
 
    return (
        <WeekScoreWrap>
            <Span>{props.week[0]}요일</Span>
            <Circle score={props.score}></Circle>
            <Circle score={props.score}></Circle>
            <Circle score={props.score}></Circle>
            <Circle score={props.score}></Circle>
            <Circle score={props.score}></Circle> 
            <Triangle></Triangle>
        </WeekScoreWrap>
    );
}
const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 5px;
    background-color: #eee;
    &:nth-child(2){
        background-color: ${props => (props.score >= 1 ? "#EC994B" : "#eee")};
    }
    &:nth-child(3){
        background-color: ${props => (props.score >= 2 ? "#EC994B" : "#eee")};
    }
    &:nth-child(4){
        background-color: ${props => (props.score >= 3 ? "#EC994B" : "#eee")};
    }
    &:nth-child(5){
        background-color: ${props => (props.score >= 4 ? "#EC994B" : "#eee")};
    }
    &:nth-child(6){
        background-color: ${props => (props.score >= 5 ? "#EC994B" : "#eee")};
    }
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid #15133C;
    border-right: 20px solid transparent;
    margin-left: 20px;
`;

const WeekScoreWrap = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
`;

const Span = styled.span`
    margin-right: 20px;
    font-size : 15px;
`;

export default WeekScore;