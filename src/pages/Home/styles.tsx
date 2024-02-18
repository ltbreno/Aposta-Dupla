import styled from "styled-components";


export const Content = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`

export const ImageHome = styled.img` // DIV QUE REPRESENTA O LUGAR AONDE A IMAGEM VAI FICAR
    display: flex ;
    justify-content: flex-end ;
    margin-top: 60px ;

    width: 1100px ;
    height: 300px ;
    background-color: red ;

    border-radius: 8px ;

     @media only screen and (max-width: 768px) {
        width: 400px ;
     }
`

export const SearchBar = styled.div`
    display: flex;
    align-items: center;

    margin-top: 30px ;

    @media only screen and (max-width: 768px) {
        width: 350px ;
    }
`

export const SearchInput = styled.input`
    width: 1100px ;
    padding: 1px 8px ;
    font-size: 16px;
    border: none;
    border-radius: 8px ;
    outline: none ;
    
`

export const GameIcons = styled.div`
    margin-top: 25px ;

    @media only screen and (max-width: 768px) {
        display: none ;
    }

`

export const RecommendedGames = styled.div`
    margin-top: 25px ;
    display: flex ;
    flex-direction : column ;
    width: 1100px ;
    height: 250px ;
    background-color: #101620 ;

    @media only screen and (max-width: 768px) {
        width: 400px ;
        display: flex ;
        flex-direction: column ;
    }
`

export const WrapperTitle = styled.div`
    @media only screen and (max-width: 768px){
         display: flex;
         align-items: center ;
        justify-content: center ;
    }
`

export const WrapperBestGames = styled.div`
    display: flex ;
    justify-content: space-between ;

    @media only screen and (max-width: 768px) {
        width: 400px ;
        display: flex ;
        flex-direction: column ;
        align-items: center ;
        justify-content: center ;
    }
`

export const RecommendedTitle = styled.h2`

`

export const BestGames = styled.img`
    margin-top: 50px ;
    width: 350px ;
    height: 150px ;
`