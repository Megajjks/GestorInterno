import React from 'react';
import styled from 'styled-components';
import ErrorImg from '../../assets/img/error.svg'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 200px;
`;

const txt = styled.p`
    margin: 0;
    padding: 0;
`;

const Error = () => {
    return (  
        <Wrapper>
            <Img src={ErrorImg} alt='error img'/>
            <h1>¡Ups! ha ocurrido un problema</h1>
            <txt>Verifica si tienes conexión a internet y vuelve a intentar</txt>
        </Wrapper>
    );
}
 
export default Error;