
import { HeaderLogged } from "../../Components/HeaderLogged/HeaderLogged"
import * as S from './styles'

import { IoPerson } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { GiPresent } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { BiSolidWallet } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { Tiger } from "../../Components/Tiger/Tiger";


export const Logged: React.FC = () => {

    const navigate = useNavigate() ;

    const handleDeposit = () => {
        navigate('/deposit')
    }

    const handleAccountPage = () => {
        navigate('/accountpage')
    }

    const handleAccountBalance = () => {
        navigate('/accountbalance')
    }

    const handleWithDraw = () => {
        navigate('/withdraw')
    }

    const handleExit = () => {
        navigate('/')
    } 


    const additionalItems = [
        <S.Wrapper>
            <S.AccountButton onClick={handleAccountPage}>
                <IoPerson size={15} />
                Conta
            </S.AccountButton>

            <S.AccountButton onClick={handleAccountBalance}>
                <GiPresent size={15} />
                Meu saldo
            </S.AccountButton>

            <S.AccountButton onClick={handleDeposit}>
                <GiWallet size={15} />
                Depositar
            </S.AccountButton>

            <S.AccountButton onClick={handleWithDraw}>
                <BiSolidWallet size={15} />
                Sacar
            </S.AccountButton>

            <S.AccountButton onClick={handleExit}>
                <RiLoginBoxLine size={15} />
                Sair
            </S.AccountButton>

        </S.Wrapper>
      ];
    return (
        <>
            <HeaderLogged additionalItems={[additionalItems]} />
            <S.Game>
                <Tiger />
            </S.Game>
        </>
    )
}