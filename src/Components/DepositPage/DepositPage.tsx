import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { HeaderLogged } from '../HeaderLogged/HeaderLogged';
 


export const DepositPage: React.FC = () => {

    const navigate = useNavigate() ;
    const handleCloseDeposit = () => {
        navigate('/logged');
    }

  return (
    <>
    <HeaderLogged additionalItems={[]}/>
    <S.Deposit>
        <S.ContentDeposit>
            <S.Wrapper>
                <S.TitlePaymentoMetod>Selecione o metodo de pagamento</S.TitlePaymentoMetod>
                <S.RecomendPaymentMetod>Recomendado</S.RecomendPaymentMetod>
                    <S.PixPayment>
                        Pix Metod
                        <MdOutlinePix />
                    </S.PixPayment>

                    <S.CardPayment>
                        Credit Card
                        <FaCreditCard />
                    </S.CardPayment>

                    <S.CardPayment>
                        Debit Card
                        <FaCreditCard />
                    </S.CardPayment>

                <S.CloseButtonDeposit onClick={handleCloseDeposit}>Fechar</S.CloseButtonDeposit>
            </S.Wrapper>
        </S.ContentDeposit>
    </S.Deposit>
    </>
  );
}