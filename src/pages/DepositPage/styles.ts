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
    backdrop-filter: blur(10px) ;
`;

export const ContentDeposit = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    width: 700px;
    height: 550px;
    background-color: #161E2C ;
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
    width: 100% ;
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
    margin-top: 5px ;
    text-transform: uppercase;
    
`

export const Title = styled.h2`
    margin-bottom: 30px ;
    font-size:1.5rem ;
    color:white ;
`

export const PixPayment = styled.button`
    display: flex ;
    gap:30px ;
    align-items: center ;
    justify-content:space-evenly ;
    border-radius: 8px ;
    border: none ;
    width: 50% ;
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
        background-color: gold ;
    }
`

export const CardPayment = styled.button`
    display: flex ;

    gap: 5px ;
    justify-content: space-evenly ;
    align-items: center ;
    border-radius: 8px ;
    border: none ;
    width: 50% ;
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
        background-color: gold ;
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
        background-color: #F12C4C ;
    }
`