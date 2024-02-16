import styled from "styled-components";


export const Deposit = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
`;

export const ContentDeposit = styled.div`
    width: 450px;
    height: 350px;
    background-color: #121825;
    border-radius: 8px;
    opacity: ${({ showContent }) => (showContent ? 1 : 0)};
    transform: ${({ showContent }) => (showContent ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;








export const Wrapper = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content:center ;
    align-items: center ;
`

export const TitlePaymentoMetod = styled.h2`
    margin-top: 10px ;
    font-size: 1.2rem;
    font-weight: 300 ;
    color: white ;
`

export const RecomendPaymentMetod = styled.p`
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #BCBFBD ;
    margin-bottom: 4px;
    text-align: left;
    margin-top: 0;
    text-transform: uppercase;
    
`

export const PixPayment = styled.button`
    display: flex ;
    gap:30px ;
    align-items: center ;
    justify-content:space-evenly ;
    border-radius: 8px ;
    border: none ;
    width: 80% ;
    height: 40px ;
    padding: 1px 8px ;
    
    font-size: 1rem ;
    background-color: #0B0F16 ;
    color: white ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #F12C4C ;
    }
`

export const CardPayment = styled.button`
    display: flex ;

    gap: 5px ;
    justify-content: space-evenly ;
    align-items: center ;
    border-radius: 8px ;
    border: none ;
    width: 80% ;
    height: 40px ;
    padding: 1px 8px ;
    

    font-size: 1rem ;
    margin-top: 10px ;
    background-color: #0B0F16 ;
    color: white ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #F12C4C ;
    }
`

export const CloseButtonDeposit = styled.button`
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    border-radius: 8px ;
    border: none ;
    width: 200px ;
    height: 40px ;
    
    margin-top: 10px ;
    font-size: 1rem ;
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