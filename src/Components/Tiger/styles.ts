import styled from "styled-components";

export const TigerIframe = styled.iframe`

    width: 700px ;
    height: 600px ;

    border: none ;
    border-radius: 8px ;

    margin-top: 10px ;

    @media only screen and (max-width: 768px) {
        width:100vw ;
    }
`

export const GameStats = styled.div`
    display:flex ;
    justify-content: space-around ;
    align-items: center ;

    width: 700px;
    height: 200px ;

    margin-top:20px ;

    border-radius: 8px ;
    background-color: #121825 ;

    @media only screen and (max-width: 768px) {
        display: flex ;
        flex-direction: column ;

        width:100vw ;
        height:500px ;
    }
`

export const GameTitle = styled.h3`
    margin-top: 1rem ;
    margin-left: 3rem ;

    color: white ;
    font-size: 1rem ;
    font-weight: 400 ; 

`

export const TigerImg = styled.img`

    margin-top: .7rem ;
    margin-left: 1rem ;

    width:200px;
    height:150px;
    border-radius: 8px ;
    transition: 0.3s ease-in ;

    &:hover {
    transform:scale(1.05)
    }
`

export const DivGameTips = styled.div`

    background-color: #101620 ;
    border-radius:8px;
    width: 220px;
    text-align:center ;

`

export const GameTips = styled.h4`
    color: white ;
    font-size: .9rem ;
    font-weight: 300 ; 
`