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

export const ValueAccount = styled.div`
    display: flex ;
    background-color: #101620 ;
    border-radius: 8px ;
    justify-content: center ;
    align-items: center ;

    width: 80px ;
`

export const ValueFound = styled.h2`
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;
`


export const AuthButton = styled.button` 
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
    }

`

export const ExpandButtonContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const additionalItemsContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width:120px ;
    margin-top: 10px ;
    border-radius: 8px ;

    display: flex ;
    justify-content: center ;
    align-items: center ;
    background-color: #fff; /* Adapte conforme necessário */
    border: 1px solid #ccc; /* Adapte conforme necessário */
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adapte conforme necessário */
`

export const AdditionalItem = styled.div`
    margin-bottom: 10px;
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
    gap: 10px ;
`

export const HeaderTitle = styled.h2`
    color:white ;
`
export const DepositButton = styled.button`

height: 30px ;
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