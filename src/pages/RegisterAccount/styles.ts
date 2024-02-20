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
    opacity: 1;
    backdrop-filter: blur(7px);
`;

export const Content = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    margin: auto ;
    width: 700px;
    height: 550px;
    background-color: #161E2C ;
    border-radius: 8px;
    opacity: ${({ showContent }) => (showContent ? 0.94 : 0)};
    transform: ${({ showContent }) => (showContent ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

export const SubTitle = styled.h2`
    margin-top: 15px;
    font-weight: 500 ;
    font-size: .8rem ;
    color:white ;
`
export const SubTitle1 = styled.h2`
    font-weight: 500 ;
    font-size: .8rem ;
    color:white ;
`

export const InputDiv = styled.div`
    position: relative ;
`

export const Title = styled.h2`
    margin-top: 5px;
    font-size:1.5rem ;
    color:white ;
`

export const LoginInput = styled.input` 
    width: 300px ;
    height: 40px ;
    border-radius: 4px ;
    background-color: #101620 ;
    color: white ;
    font-weight: 500 ;
    border: none ;
    transition: border-color 0.3s ease;
    padding: 5px 8px;
    font-size: 14px;
    outline: none;
`

export const TitleInput = styled.h3`
    color: #7A869A ;
    font-size: .8rem ;
    margin-top: 15px ;
    margin-bottom: 2px ;
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
    background-color: gold ;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: brightness(1.2) ;
    }
`

export const DivisorText = styled.h4`
    margin-top: .7rem ;
    color: #7A869A ;
    font-weight: 500 ; 
`

export const ShowPasswordButton = styled.button`
    border: none ;
    background-color: #161E2C ;
    align-items: center ;
    justify-content: center ;
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

export const WrapperViewPassword = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
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