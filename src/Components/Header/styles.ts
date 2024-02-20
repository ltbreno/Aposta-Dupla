import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #161E2C ;
    
`

export const Wrapper = styled.div`
    display: flex ;
    justify-content: space-between ;
    align-items: center ;

    gap: 20px ;
    max-width: 100vw ;
    margin: 0 auto ;
    padding: 0 2rem ;
    height: 90px ;
    
`

export const WrapperTitle = styled.div`
    display: flex ;
    gap: 20px ;
`

export const ButtonLeft = styled.button`
    background-color: #161E2C ;
    border: none ;
`

export const RegisterButton = styled.button`
    padding : 0 1rem ;
    background-color: #161E2C ;
    color: white ;

    font-size: 1rem ;
    font-weight: 500 ;

    display: flex ;
    align-items: center ;
    gap: 0.3rem ;

    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #F12C4C ;
    }

    @media only screen and (max-width: 768px) {
        height: 40px ;
        width: 140px ;
    }
`

export const AuthButton = styled.button` 
    height: 40px ;
    padding : 0 1rem ;
    background-color: #121825 ;
    color: white ;

    font-size: 1rem ;
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

    @media only screen and (max-width: 768px) {
        height: 40px ;
        width: 140px ;
    }

`

export const ChatButton = styled.button`
    border: none ;
    border-radius: 5px ; 
    height: 40px ;
    padding : 0 1rem ;
    background-color: #121825 ;
    color: white ;

    font-size: 1rem ;
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
    @media only screen and (max-width: 768px) {
        display: none ;
    }
`

export const ButtonWrapper = styled.div`
    display: flex ;
    gap: 10px ;
`

export const HeaderTitle = styled.h2`
    color:white ;
    align-items:center ;
    font-weight: 600 ;

    @media only screen and (max-width: 768px) {
        font-size: 1rem ;
    }
`

