import React from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';

import { MdOutlinePix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { HeaderLogged } from '../../Components/HeaderLogged/HeaderLogged';
import { SiBitcoinsv } from "react-icons/si";
 


export const DepositPage: React.FC = () => {

    const navigate = useNavigate() ;

    const handleCloseDeposit = () => {
        navigate('/logged');
    }

    const handlePixPayment = () => {
        navigate('/pixpayment')
    }

    const handleCreditPayment = () => {
        navigate('/creditpayment')
    }

    const handleDebitPayment = () => {
        navigate('/debitpayment')
    }

  return (
    <>
    <HeaderLogged additionalItems={[]}/>
    <S.Deposit>
        <S.ContentDeposit>
            <S.Wrapper>
                <S.TitlePaymentoMetod>Selecione o metodo de pagamento</S.TitlePaymentoMetod>
                <S.RecomendPaymentMetod>Recomendado</S.RecomendPaymentMetod>
                    <S.PixPayment onClick={handlePixPayment}>
                        Pix
                        <MdOutlinePix />
                    </S.PixPayment>

                    <S.CardPayment onClick={handleCreditPayment}>
                        Credit
                        <FaCreditCard />
                    </S.CardPayment>

                    <S.CardPayment onClick={handleDebitPayment}>
                        Debito
                        <FaCreditCard />
                    </S.CardPayment>

                    <S.CardPayment>
                        Cripto
                        <SiBitcoinsv />
                    </S.CardPayment>

                <S.CloseButtonDeposit onClick={handleCloseDeposit}>Fechar</S.CloseButtonDeposit>
            </S.Wrapper>
        </S.ContentDeposit>
    </S.Deposit>
    </>
  );
}