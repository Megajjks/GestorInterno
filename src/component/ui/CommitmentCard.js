import React from 'react';
import styled from 'styled-components';
import User from '../../assets/img/usercard.svg'
import Map from '../../assets/img/mapcard.svg'

const Wrapper = styled.div`
    width: 300px;
    display: flex;
    padding:1rem 2rem;
    margin-bottom:1em;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.greylight};
    border-radius: 10px; 
    box-shadow: 0 4px 8px 0 #ddd;
    transition: transform .2s ease-out;
    &:hover{
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
    }
`;
const Logo = styled.img`
    width:12rem;
`;
const Badge = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SvgImg = styled.img`
    width:15px;
    height:15px;
    padding-right:5px;
`;
const Status = styled.p`
    font-weight:600;
    font-size:12px;
    text-align:center;
    color: ${props => props.status.color};
    padding: 5px 10px;
    background-color: ${props => props.status.background};
    margin: 0;
`;
const TxtPrimary = styled.p`
    font-weight:800;
    font-size:20px;
    text-align:left;
    margin: 0;
`;
const TxtSecundary = styled.p`
    font-weight:500;
    font-size:15px;
    text-align:left;
    width:300px;
    margin: 0;
`;
const Txtlight = styled.p`
    font-weight:400;
    font-size:12px;
    text-align:left;
    margin: 0;
`;

const status = {
    validando:{
        value:'Por validar', background:'#FFE110', color:'#000000'
    },
    proceso:{
        value:'En proceso', background:'#FF4F13', color:'#FFFFFF'
    },
    finalizado:{
        value:'Finalizado', background:'#C0392B', color:'#FFFFFF'
    },
    oculto:{
        value:'Oculto', background:'#707070', color:'#FFFFFF'
    },

}

const CommitmentCard = ({ data }) =>{
    return(
        <div style={{display: 'flex', justifyContent:'space-beetwen'}}>
            <Wrapper>
                <Logo src={data.logo}/>
                <TxtPrimary> {data.title} </TxtPrimary>
                <Badge style={{alignSelf:'flex-start', padding:'.5rem 0'}}>
                    <SvgImg src = {User}/>
                    <Txtlight> {data.organization} </Txtlight>
                </Badge>
                <TxtSecundary> {data.brief} </TxtSecundary>
                <Badge style={{width:"100%", padding:'.5rem 0'}}>
                    <Badge style={{alignSelf:'flex-start', padding:'.5rem 0'}}>
                        <SvgImg src = {Map}/>
                        <Txtlight> {data.location} </Txtlight>
                    </Badge>
                    <Status status={status[data.status]}> {status[data.status].value} </Status>
                </Badge>
            </Wrapper>
        </div>
        
    )
}

export default CommitmentCard;