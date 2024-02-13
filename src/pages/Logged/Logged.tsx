
import { HeaderLogged } from "../../Components/HeaderLogged/HeaderLogged"
import * as S from './styles'

import { IoPerson } from "react-icons/io5";
import { GiPresent } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { LiaWalletSolid } from "react-icons/lia";

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

            <S.AccountButton>
                <LiaWalletSolid size={15} />
                Sacar
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