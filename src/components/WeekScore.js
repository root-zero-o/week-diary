import styled from 'styled-components';

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: #eee;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 50px solid #778beb;
    border-right: 50px solid transparent;
`;

const WeekScoreWrap = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
`;

const WeekScore = () => {
    return (
        <>
            <span>일요일</span>
            <Circle></Circle>
            <Triangle></Triangle>
        </>
    );
}

export default WeekScore;