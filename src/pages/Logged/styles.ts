import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    width: 140px ;
    
`

export const AccountButton = styled.button`
    display:flex;
    width: 144px ;
    height: 25px ;
    padding: .3rem ;

    align-items:center;
    font-size: 1rem ;
    gap:5px ;
    border: none ;
    background-color: white ;
    transition: 0.1s ease-in ;

    &:hover {
        background-color: #E4E4E4;
        color: #EF4964 ;
    }
`

export const BoxTiger = styled.div`
    display: flex ;
    justify-content: center ;
    align-items: center ;
`

export const Game = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`