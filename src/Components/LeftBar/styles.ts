import styled from "styled-components";

interface ContainerProps {
    showLeft: boolean ;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed ;
    top: 30px ;
    left: ${ (props) => (props.showLeft ? 
    '0' : '-350px ')} ; 

    width: 300px ;
    height: 100vh ;
    background-color: #161E2C ;


    margin-top: 3.75rem ;
    padding: .8rem ;                // padding: 2rem ; padding antigo
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25) ;

    transition: 0.3s ease-in ;

    @media only screen and (max-width: 768px) {
    width: 150px;
    height: 100vh ;
    border-bottom-right-radius: 8px ;
  }
`



export const AuthButton = styled.button`
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
    padding : 0 1rem ;
    background-color: #101620 ;
    color: white ;
    margin-bottom: 15px ;
    margin-left: 15px ;
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

    @media only screen and (max-width: 768px) {

    }

`


export const WrapperButton = styled.div`
    display:flex ;
`