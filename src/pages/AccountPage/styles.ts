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
    width: 500px;
    height: 230px;
    background-color: #121825;
    border-radius: 8px;
    opacity: ${({ showContent }) => (showContent ? 1 : 0)};
    transform: ${({ showContent }) => (showContent ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media only screen and (max-width: 768px) {
        height: 340px;
    }
    
`;

export const WrapperText = styled.h2`
    margin: 10px 0 0 25px;

    font-weight: 400 ;
    color: #FFFFFF ;
    font-size: 1.2rem ;

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
    height: 40px ;
    margin: 10px 0 0 25px;
    background-color: #0B0F16 ;
    color: white ;
    border: none ;
    border-radius: 8px ;
    padding: 5px 8px;
    font-size: 1rem;
    outline: none;

    @media only screen and (max-width: 768px) {
        margin: 10px 0 0 0;
    }
`

export const ButtonWrapper = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between ;
    width: 470px ;

    @media only screen and (max-width: 768px) {
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        margin: 0 ;
    }
`

export const ButtonSubmit = styled.button`
    height: 35px ;
    width: 75px ;
    margin: 10px 0 0 25px;
    padding : 0 1rem ;
    background-color: #F12C4C ;
    color: white ;

    font-size: 1rem ;
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

    @media only screen and (max-width: 768px) {
        width: 200px ;
    }
`

export const ButtonClose = styled.button`
    height: 35px ;
    padding : 0 1rem ;
    background-color: #0B0F16 ;
    color: white ;

    font-size: 1rem ;
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
        background-color: #2980b9;
    }

    @media only screen and (max-width: 768px) {
        width: 200px ;
    }

    width: 75px ;

    margin: 10px 0 0 25px;
`