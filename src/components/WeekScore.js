import styled from 'styled-components';

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #eee;
    margin-right: 5px;
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

const WeekScore = (props) => {
    
    return (
        <WeekScoreWrap>
            <Span>{props.week[0]}요일</Span>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Triangle></Triangle>
        </WeekScoreWrap>
    );
}

export default WeekScore;