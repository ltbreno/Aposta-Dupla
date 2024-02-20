import styled from "styled-components";

interface ContainerProps {
    showRight: boolean ;
}

export const Container = styled.aside<ContainerProps>`
    position: absolute ;
    top: 30px ;
    right: ${ (props) => (props.showRight ? 
    '0' : '-350px ')} ; 

    width: 300px ;
    height: 1130px  ;
    background-color: #161E2C ;

    margin-top: 3.75rem ;
    padding: 2rem ;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25) ;

    transition: 0.3s ease-in ;

    @media only screen and (max-width: 768px) {
    display: none ;
  }
`



export const ChatContainer = styled.div`
    width: 250px;
    height: 80vh ;
    background-color: #101620 ;
    margin-right: 10px ;
    border-radius: 8px ;

`

export const ChatMensageSubmit = styled.div`
    display: flex ;
    gap: 20px ;
    margin-top: 20px ;
    width: 250px ;

    @media only screen and (max-width: 768px) {
        display: flex ;
        flex-direction: space-around ;
        width: 350px ;
    }
`

export const MensageInput = styled.input`
    border: none ;
    border-radius: 8px ;
    padding: 5px 8px;
    font-size: 14px;
    outline: none;
`

export const ButtonSubmit = styled.button`
    height: 30px ;
    padding : 0 1rem ;
    background-color: #F12C4C ;
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;

    display: flex ;
    align-items: center ;
    justify-content: center ;
    gap: 0.3rem ;

    width: 60px ;
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