import styled from 'styled-components';

const Average = (props) => {

    let ScoreSum = props.score.reduce((acc, cur) => acc+cur);
    let ScoreAverage = Math.floor(ScoreSum/7 * 100)/100

    return (
        <AverageWrap>
            <AverageSpan>Score Average : {ScoreAverage}</AverageSpan>
        </AverageWrap> 
    )
}

const AverageWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AverageSpan = styled.div`
    font-size : 25px;
`;

export default Average;