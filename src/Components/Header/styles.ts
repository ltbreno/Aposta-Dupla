import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #161E2C ;
    
`

export const Wrapper = styled.div`
    display: flex ;
    justify-content: space-between ;
    align-items: center ;

    max-width: 1240px ;
    margin: 0 auto ;
    padding: 0 2rem ;
    height: 60px ;
`



export const AuthButton = styled.button`
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
    padding : 0 1rem ;
    background-color: #121825 ;
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
        transform: scale(1.1);
    }

`

export const ChatButton = styled.button`
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
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
        transform: scale(1.1);
    }
`

export const ButtonWrapper = styled.div`
    display: flex ;
    gap: 10px
`

export const HeaderTitle = styled.h2`
    color:white ;
    animation: moveInfinite 2s linear infinite;
    
@keyframes moveInfinite {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(30px);
    }
    100% {
        transform: translateX(0);
    }
}
`

