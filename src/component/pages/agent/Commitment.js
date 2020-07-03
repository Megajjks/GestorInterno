import React from 'react';
import CommitmentCardList from '../../ui/CommitmentCardList';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Logo from '../../../assets/img/logcom.png'

const Section = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
const Btn = styled(Link)`
    text-decoration:none;
    cursor: default;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 600;
    padding:.8em;
    transition: all 150ms ease-out;
    &:hover{
        cursor:pointer;
        transform: translateY(-0.125rem);
		box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
	}
    &:active{
        transform: translateY(-0.-125rem);
		box-shadow: none;
    }
`;

const data = [
    {
        id:"1",
        logo:Logo,
        title:'La universidad Anáhuac Querétaro.', 
        organization:'Anáhuac Queretaro', 
        brief:'La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...', 
        location:'Querétaro', 
        status:'validando'
    },
    {
        id:"2",
        logo:Logo,
        title:'La universidad Anáhuac Querétaro.', 
        organization:'Anáhuac Queretaro', 
        brief:'La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...', 
        location:'Querétaro', 
        status:'proceso'  
    },
    {
        id:"3",
        logo:Logo,
        title:'La universidad Anáhuac Querétaro.', 
        organization:'Anáhuac Queretaro', 
        brief:'La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...', 
        location:'Querétaro', 
        status:'finalizado'
    },
    {
        id:"4",
        logo:Logo,
        title:'La universidad Anáhuac Querétaro.', 
        organization:'Anáhuac Queretaro', 
        brief:'La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...', 
        location:'Querétaro', 
        status:'oculto'
    }
]


const Commitment = () =>{

    return(
        <div>
            <Section>
                <h1>Mis compromisos</h1>
                <Btn to='/new_commitment'>Crear un compromiso</Btn>
            </Section>
            <CommitmentCardList commitments={data}/>

        </div>
    )
}

export default Commitment;