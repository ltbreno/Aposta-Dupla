import styled from "styled-components";


export const Deposit = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Sombreamento de fundo */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export const ContentAccountBalance = styled.div`
    display:flex ;
    flex-direction: column ;
    width: 500px ;
    height: 230px ;
    background-color: #121825 ;
    border-radius: 8px ;

    @media only screen and (max-width: 768px) {
        height:350px ;
    }
`

export const WrapperText = styled.h2`
    margin: 10px 0 0 25px;

    font-weight: 400 ;
    color: #FFFFFF ;
    font-size: 1rem ;
`

export const Container = styled.div`
    display: flex ;
    gap: 20px ;
    margin-top: 25px ;
    margin-left: 10px ;
    margin-right: 10px ;
`

export const AccountBalance = styled.div`
    display: flex ;
    flex-direction:column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:200px;
    height:100px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;
`

export const TextAccount = styled.h2`
    font-size: .8rem;
    font-weight: 400 ;
    color: #BCBFC7 ;
`

export const AccountBonusBalance = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:200px;
    height:100px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;
`

export const AccountBalanceTotal = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:200px;
    height:100px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;
`

export const TotalBalance = styled.p`
    font-size: .8rem;
    font-weight: 400 ;
    color: #BCBFC7 ;
`

export const ButtonClose = styled.button`
    height: 30px ;
    padding : 0 1rem ;
    background-color: #0B0F16 ;
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;

    display: flex ;
    align-items: center ;
    gap: 0.3rem ;

    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }

    width: 75px ;

    margin: 10px 0 0 10px;
`