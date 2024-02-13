import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa 100% da altura da viewport */
    margin: 0; 

`

export const Content = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    margin: auto ;
    border: 3px solid #161E2C ;
    width: 450px;
    height: 330px;    
    border-radius: 8px ;
    background-color: #161E2C ;
`

export const Title = styled.h2`
    margin-top: 5px;
    font-size:1.2rem ;
    color:white ;
`

export const LoginInput = styled.input` 
    width: 300px ;
    height: 30px ;
    border-radius: 8px ;
    background-color: #101620 ;
    color: white ;
    font-weight: 300 ;
    border: none ;
    outline: none ;
    transition: border-color 0.3s ease;
`

export const TitleInput = styled.h3`
    color: #7A869A ;
    font-size: .8rem ;
    margin-top: 15px ;
    margin-bottom: 5px ;
`

export const WrapperLogin = styled.div`
    align-items:center ;
    justify-content:center ;
`

export const SubmitButton = styled.button`
    margin-top: 20px ;
    width: 300px ;
    height:35px ;

    border: none ;
    color: white ;

    font-weight: 500 ;
    font-size: 1rem ;

    border-radius: 8px ;
    background-color: #101620 ;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #2980b9 ;
        filter: brightness(1.3) ;
        transform: scale(1.1);
    }
`

export const DivisorText = styled.h4`
    margin-top: .7rem ;
    color: #7A869A ;
    font-weight: 500 ; 
`

export const ForgetPassword = styled.button`
    margin-top: 10px ;
    color: white ;

    background-color: #2980b9 ;
    border-radius: 8px ;
    border: none ;
    width: 170px ;

    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: brightness(1.3) ;
        transform: scale(1.1);
    }

`

export const RegisterAccount = styled.button`
    margin-top: 20px ;
    color: white ;

    background-color:  #2980b9 ;
    border-radius: 8px ;
    border: none ;
    width: 170px ;

    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: brightness(1.3) ;
        transform: scale(1.1);
    }
`