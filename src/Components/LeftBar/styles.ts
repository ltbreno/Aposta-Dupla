import styled from "styled-components";

interface ContainerProps {
    showLeft: boolean ;
}

export const Container = styled.aside<ContainerProps>`
    position: absolute ;
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
    width: 100%;
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

export const GameImage = styled.img`
    width:30px ;
`
export const GameText = styled.h2`
    font-size: .9rem ;
    margin-left: 10px ;
    font-weight: 600 ;
`

export const TextWrapper = styled.div`
    display: flex ;
    align-items: center ;
    gap: 90px  ;
`
export const GoldText = styled.h2`
    color: #FFD00E ;
    font-size: .8rem ;
`

export const WrapperButton = styled.div`
    display:flex ;
`

export const Wrapper  = styled.div`
    display: flex ;
    flex-direction: column ;
    margin: 0 5px ;
`

export const OriginsGames = styled.h3`
    color: #5B677D ;
    font-size: 1.1rem ;
    font-weight: 600 ; 
    text-align: left ;
    margin-bottom: 15px;
`

export const Games = styled.button`
    display: flex ;
    margin: 5px 0 ;

    width: 100%;
    align-items: center ;
    text-align: center ;
    justify-content: space-around ;
    border: none ;
    border-radius: 5px ; 
    height: 30px ;
    padding : 0 ;
    background-color: #121825 ;
    color: white ;

    font-size: .80rem ;
    font-weight: 500 ;
    gap: 5px ;

    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, transform 0.3s ease;
    
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0;
    background-color: #F12C4C;
    transition: width 0.3s ease-out;
  }

  &:hover::before {
    width: 5%;
  }

`