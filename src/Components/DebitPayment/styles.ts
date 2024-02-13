import styled from "styled-components";


export const Contain  = styled.div`
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

export const ContentCreditPayment = styled.div`
    display:flex ;
    flex-direction: column ;
    width: 500px ;
    height: 240px ;
    background-color: #121825 ;
    border-radius: 8px ;

    @media only screen and (max-width: 768px) {
        height:450px ;
        justify-content:center;
        align-items:center ;
    }
`

export const WrapperText = styled.h2`
    display:flex ;
    gap: 10px ;
    margin-top: 10px ;
    margin-left: 15px;
    font-size: 1rem ;
    font-weight: 300 ;
    color: white ;
    line-height: 1.5;

    @media only screen and (max-width: 768px) {
        display:flex ;
        margin-top: 10px ;
        margin-left: 0 ;
        text-align:center ;
        justify-content:center;
        align-items:center
    }
`

export const RecomendPaymentMetod = styled.p`
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #BCBFBD ;
    margin-left: 15px;
    margin-bottom: 4px;
    text-align: left;
    margin-top: 0;
    text-transform: uppercase;
 `

export const WrapperForm = styled.div`
    display: flex;
    flex-direction:column ;

    margin-left: 15px;

    @media only screen and (max-width: 768px) {
        justify-content: center ;
        align-items: center ;
    }
`

export const WrapperFormButton = styled.div`
    display: flex ;
    gap: 150px;

    margin-top: 15px ;
    margin-left: 15px ;

`

export const Input = styled.input`
    width:400px ;
    height:30px;
    border-radius:8px;
    border:none ;

    @media only screen and (max-width: 768px) {
        width: 320px;
    }
`

export const InputNumber = styled.input`
    width:400px ;
    height:30px;
    margin-top: 15px ;
    border-radius:8px;
    border:none ;

    @media only screen and (max-width: 768px) {
        width: 320px;
    }
`

export const InputCard = styled.input`
    width:200px ;
    height:30px;
    border-radius:8px;
    border:none ;

    @media only screen and (max-width: 768px) {
        width: 320px ;
    }

`

export const InputCardDate = styled.input`
    width:180px ;
    height:30px;
    border-radius:8px;
    border:none ;

    @media only screen and (max-width: 768px) {
        width: 320px ;
    }
`

export const WrapperName = styled.div`
    display: flex ;

    margin-top:15px ;
    gap:20px ;

    @media only screen and (max-width: 768px) {
        display: flex ;
        flex-direction: column ;
    }
`

export const ButtonSubmit = styled.button`
    height: 30px ;
    padding : 0 1rem ;
    background-color: #F12C4C ;
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;

    display: flex ;
    align-items: center ;
    justify-content:center ;
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
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    border-radius: 8px ;
    border: none ;
    width: 70px ;
    height: 30px ;
    
    font-size: .8rem ;
    background-color: #0B0F16 ;
    color: white ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #2980b9 ;
    }
`