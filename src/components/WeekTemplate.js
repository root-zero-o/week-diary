import styled from 'styled-components';
import WeekScore from './WeekScore'

const WeekTemplateBlock = styled.div`
    width: 500px;
    height: 80vh;

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



const WeekTemplate = () => {
    return (
        <>
            <WeekTemplateBlock>
                <WeekTemplateH1>나의 일주일을 평가해보자!😎</WeekTemplateH1>
                <WeekScore/>
            </WeekTemplateBlock>
        </>
    )
};

export default WeekTemplate;