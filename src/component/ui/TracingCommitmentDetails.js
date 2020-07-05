import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeletedIco from '../../assets/img/delete.svg';
import AddIco from '../../assets/img/add.svg';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 70% auto;
    column-gap:2em;
`;

const WrapperTask = styled.div`
    place-self:start stretch;
`;

const WrapperOpc = styled.div`
    place-self:start stretch;
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

const NameColaborator = styled.p`
    width: 10em;
    margin: 0;
    padding: 0 .5em;
`;

const BtnDeleteColaborator = styled.img`
    width: 1em;
    &:hover{
        cursor:pointer;
    }
`;

const BtnAddColaborator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    color: ${({ theme: { colors } }) => colors.primary};
    font-weight: 600;
    &:hover{
        cursor:pointer;
    }
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
                            <AccountCircleIcon style={{ fontSize: 50 }}/>
                            <NameColaborator> {commitment.colaborators} </NameColaborator>
                            <BtnDeleteColaborator src={DeletedIco} alt='ico_deleted'/>
                        </Colaborator>
                        <BtnAddColaborator>
                            <img src={AddIco} alt='add-ico' style={{width:'18px'}}/>
                            <p style={{margin:'0', padding:'0 .5em'}}> Agregar colaborador </p>
                        </BtnAddColaborator>
                    </WrapperColaborators>
                </WrapperOpc> 
            </Wrapper>
        </div>
    )
}

export default TracingCommitmentDetails;