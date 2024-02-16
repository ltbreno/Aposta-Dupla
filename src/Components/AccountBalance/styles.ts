import styled from "styled-components";


export const Deposit = styled.div`
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
`;

export const ContentAccountBalance = styled.div`
     width: 500px;
    height: 250px;
    background-color: #121825;
    border-radius: 8px;
    opacity: ${({ showContent }) => (showContent ? 1 : 0)};
    transform: ${({ showContent }) => (showContent ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media only screen and (max-width: 768px) {
        height:450px ;
        justify-content:center;
        align-items:center ;
    }
`

export const WrapperText = styled.h2`
    margin: 10px 0 0 25px;

    font-weight: 400 ;
    color: #FFFFFF ;
    font-size: 1.3rem ;

    @media only screen and (max-width: 768px) {
        display:flex ;
        margin-top: 10px ;
        margin-left: 0 ;
        text-align:center ;
        justify-content:center;
        align-items:center
    }
`

export const Container = styled.div`
    display: flex ;
    gap: 20px ;
    margin-top: 25px ;
    margin-left: 10px ;
    margin-right: 10px ;

    @media only screen and (max-width: 768px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

export const AccountBalance = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:220px;
    height:120px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;

`

export const TextAccount = styled.h2`
    font-size: .9rem;
    font-weight: 400 ;
    color: #BCBFC7 ;
`

export const AccountBonusBalance = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:220px;
    height:120px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;
`

export const AccountBalanceTotal = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    font-size:1.5rem ;
    gap: 10px ;
    width:220px;
    height:120px;
    color: white ;
    background-color:#0B0F16;
    border-radius: 8px ;

`

export const TotalBalance = styled.p`
    font-size: 1rem;
    font-weight: 400 ;
    color: #BCBFC7 ;
`

export const ButtonClose = styled.button`
    height: 40px ;
    padding : 0 1rem ;
    background-color: #f12c4c ;
    color: white ;

    font-size: 1rem ;
    font-weight: 500 ;

    display: flex ;
    align-items: center ;
    justify-content: center;
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

    width: 75px ;

    margin: 10px 0 0 10px;

    @media only screen and (max-width: 768px) {
        display:flex ;
        margin-top: 15px ;
        margin-left: 0 ;
        justify-content:center;
        align-items:center ;
        margin-bottom: 10px ;
    }
`