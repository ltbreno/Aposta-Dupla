import styled from "styled-components";


export const Container = styled.div`
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
    backdrop-filter: blur(10px);
`

export const Content = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    margin-top: 40px;
    justify-content: center ;
    width: 800px;
    height: 650px;
    background-color: rgba(0, 0, 0, 0.95) ;
    border-radius: 8px;
    opacity: ${({ showContent }) => (showContent ? 1 : 0)};
    transform: ${({ showContent }) => (showContent ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const Title = styled.h2`
    margin-top: 5px;
    font-size:1.2rem ;
    color:white ;
`

export const LoginInput = styled.input` 
    width: 300px ;
    height: 35px ;
    border-radius: 8px ;
    background-color: #0f1621 ;
    color: white ;
    font-weight: 400 ;
    border: none ;


    padding: 5px 8px;
    font-size: .9rem ;
    outline: none;
    
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
    background-color: #F12C4C ;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #A81E35 ;
        filter: brightness(1.3) ;
    }
`

export const DivisorText = styled.h4`
    margin-top: .7rem ;
    color: #7A869A ;
    font-weight: 500 ; 
`

export const ForgetPassword = styled.button`
    margin-top: 10px ;
    color: black ;

    background-color: gold ;
    border-radius: 8px ;
    border: none ;
    width: 300px ;
    height: 35px ;
    font-size: 1rem ;


    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: brightness(1.3) ;
    }

`

export const RegisterAccount = styled.button`
    margin-top: 20px ;
    color: black ;

    background-color: gold ;
    border-radius: 8px ;
    border: none ;
    width: 300px ;
    height: 35px ;
    font-size: 1rem ;

    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: brightness(1.3) ;
    }
`