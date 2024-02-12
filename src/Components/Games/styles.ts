import styled from "styled-components";

export const Wrapper  = styled.div`
    display: flex ;
    flex-direction: column ;
    margin: 0 5px ;
`

export const OriginsGames = styled.h3`
    color: #5B677D ;
    font-size: 1.1rem ;
    font-weight: 500 ; 
    text-align: left ;
    margin: 0 .2rem ;
`

export const Games = styled.button`
    display: flex ;
    margin: 1rem 0 ;

    align-items: center ;
    text-align: center ;
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
    padding : 0 1rem ;
    background-color: #121825 ;
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;
    gap: 5px ;

    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #2980b9;
        transform: scale(1.1);
    }
`