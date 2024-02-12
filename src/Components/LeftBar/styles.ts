import styled from "styled-components";

export const AuthButton = styled.button`
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
    padding : 0 1rem ;
    background-color: #101620 ;
    color: white ;
    margin: 1rem auto ;

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

export const LeftSection = styled.div`
    display: flex ;
    flex-direction: column ;

    background-color: #121825 ; 
    height: 100vh ;
    width: 300px ;
    position: absolute ;
    left: 0 ;
`


export const WrapperButton = styled.div`
    display:flex ;
`
