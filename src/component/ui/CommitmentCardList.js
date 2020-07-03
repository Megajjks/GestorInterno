import React from 'react';
import styled from 'styled-components';
import CommitmentCard from './CommitmentCard';

const Wraper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

const CommitmentCardList = ({commitments}) =>{

    return(
        <Wraper>
            { commitments.map( commitment => (
               <CommitmentCard key={commitment.id} data={commitment}/> 
            ))}
        </Wraper>
    )
}

export default CommitmentCardList; 