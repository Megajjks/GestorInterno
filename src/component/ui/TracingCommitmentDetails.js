import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 70% auto;
    column-gap:2em;
`;

const WrapperTask = styled.div`
    place-self:start stretch;
    border:2px solid black;
`;

const WrapperOpc = styled.div`
    place-self:start stretch;
    border:2px solid black;
`;

const WrapperColaborators = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Colaborator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TracingCommitmentDetails = (props) =>{
    const history = useHistory()
    const [commitment, setCommitment] = useState(history.location.state)

    return(
        <div>
            <h1> {commitment.title} </h1>
            <Wrapper>
                <WrapperTask>Lista de tareas de seguimiento</WrapperTask>
                <WrapperOpc>
                    <WrapperColaborators>
                        <h2>Colaboradores</h2>
                        <Colaborator>
                            <img alt='perfil'/>
                        </Colaborator>
                    </WrapperColaborators>
                </WrapperOpc> 
            </Wrapper>
        </div>
    )
}

export default TracingCommitmentDetails;