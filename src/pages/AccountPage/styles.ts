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

export const ContentDeposit = styled.div`
    display:flex ;
    flex-direction: column ;
    width: 500px ;
    height: 230px ;
    background-color: #121825 ;
    border-radius: 8px ;

    @media only screen and (max-width: 768px) {
        height:350px ;
        align-items: center ;
    }
`

export const WrapperText = styled.h2`
    margin: 10px 0 0 25px;

    font-weight: 400 ;
    color: #FFFFFF ;
    font-size: 1rem ;

    @media only screen and (max-width: 768px) {
        display: flex ;
        align-items: center ;
        justify-content: center ;
    }
`

export const ContentInput = styled.div`
    display: flex ;
    gap:20px;

    @media only screen and (max-width: 768px) {
        flex-direction: column ;
        justify-content:center ;
        align-items: center ;
        gap: 0 ;
    }
`

export const Input = styled.input`
    width: 200px ;
    height: 30px ;
    margin: 10px 0 0 25px;
    background-color: #0B0F16 ;
    color: white ;
    border: none ;
    border-radius: 8px ;
`

export const ButtonSubmit = styled.button`
    height: 30px ;
    width: 75px ;
    margin: 10px 0 0 25px;
    padding : 0 1rem ;
    background-color: #F12C4C ;
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
        background-color: #A81E35;
    }
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

    margin: 10px 0 0 25px;
`