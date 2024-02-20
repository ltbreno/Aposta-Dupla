import React, { useState } from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';

import { MdOutlinePix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { HeaderLogged } from '../../Components/HeaderLogged/HeaderLogged';
import { SiBitcoinsv } from "react-icons/si";
import { Logged } from '../Logged/Logged';
 


export const DepositPage: React.FC = () => {

    const [showContent, setShowContent] = useState(false);

    const navigate = useNavigate() ;

    const handleCloseDeposit = () => {
        navigate('/logged');
    }

    const handlePixPayment = () => {
        navigate('/pixpayment')
    }

  // eslint-disable-next-line no-lone-blocks
  {/*  const handleCreditPayment = () => {
        navigate('/creditpayment')
    }

    const handleDebitPayment = () => {
        navigate('/debitpayment')
    } */}

  return (
    <>
    <Logged />
    <S.Deposit onMouseEnter={() => setShowContent(true)}>
        <S.ContentDeposit showContent={showContent}>
            <S.Wrapper>
                
                <S.Title>Aposta dupla 🔥</S.Title>

                <S.TitlePaymentoMetod>Selecione o metodo de pagamento</S.TitlePaymentoMetod>

                <S.RecomendPaymentMetod>Recomendado</S.RecomendPaymentMetod>
                    <S.PixPayment onClick={handlePixPayment}>
                        Pix
                        <MdOutlinePix />
                    </S.PixPayment>

                    <S.CardPayment>
                        Credit
                        <FaCreditCard />
                    </S.CardPayment>

                    <S.CardPayment>
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