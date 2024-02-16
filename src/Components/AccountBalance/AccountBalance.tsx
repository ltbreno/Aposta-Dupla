import { useEffect, useState } from "react";
import { HeaderLogged } from "../HeaderLogged/HeaderLogged"
import * as S from './styles'
import { useNavigate } from "react-router-dom";
import { Logged } from "../../pages/Logged/Logged";



export const AccountBalance: React.FC = () => {

    const navigate = useNavigate() ;

    const handleClose = () => {
        navigate('/logged')
    }

    const [backendBalance, setBackendBalance] = useState<number>(0);
    const [backendBonusBalance, setBackendBonusBalance] = useState<number>(0);
    const [soma, setSoma] = useState<number | null>(null);
  
    useEffect(() => {
      // Simulando chamada à API para obter o primeiro dado (substitua pela chamada real à sua API)
      fetch('')
        .then(response => response.json())
        .then(data => setBackendBalance(data.value))
        .catch(error => console.error('Erro ao buscar dado balance:', error));
  
      // Simulando chamada à API para obter o segundo dado (substitua pela chamada real à sua API)
      fetch('')
        .then(response => response.json())
        .then(data => setBackendBonusBalance(data.value))
        .catch(error => console.error('Erro ao buscar dado bonusbalance:', error));
    }, []);
  
    useEffect(() => {
      // Calcula a soma quando ambos os dados estão disponíveis
      if (backendBalance !== null && backendBonusBalance !== null) {
        setSoma(backendBalance + backendBonusBalance);
      }
    }, [backendBalance, backendBonusBalance]);

    const [showContent, setShowContent] = useState(false);


    return (
        <>
            <Logged />
            <S.Deposit onMouseEnter={() => setShowContent(true)}>
                <S.ContentAccountBalance showContent={showContent}>
                    <S.WrapperText>Meu Saldo</S.WrapperText>
                    <S.Container>

                        <S.AccountBalance>
                            <S.TextAccount>Saldo da conta</S.TextAccount>
                        💰 R$ 0,00                    {/*{backendData.balance}*/}
                        </S.AccountBalance>

                        <S.AccountBonusBalance>
                            <S.TextAccount>Dinheiro de Bonus</S.TextAccount>
                        💰 R$ 0,00                    {/*{backendData.bonusbalance}*/}
                        </S.AccountBonusBalance>

                        <S.AccountBalanceTotal>
                            <S.TextAccount>Dinheiro de Bonus</S.TextAccount>
                            💰 R$ 0,00 
                                        {/* {soma !== null ? (
                                                    <S.TotalBalance>{soma}</S.TotalBalance>
                                                ) : (
                                                    <p>Carregando...</p>
                                                )} */}
                        </S.AccountBalanceTotal>

                    </S.Container>
                    <S.WrapperButton>
                    <S.ButtonClose onClick={handleClose}>Fechar</S.ButtonClose>
                    </S.WrapperButton>
                </S.ContentAccountBalance>
            </S.Deposit>
            </>
    )
}