import styled from 'styled-components';

const Average = () => {

    return (
        <AverageWrap>
            <AverageSpan>평균 점수 : 00.00점</AverageSpan>
            <AverageBtn>Reset</AverageBtn>
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

const AverageBtn = styled.button`
    width: 100px;
    height: 50px;

    background-color: #15133C;
    color: white;

    border-radius: 10px;

    margin-top: 20px;
`;


export default Average;