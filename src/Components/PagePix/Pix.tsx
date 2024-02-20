import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { HeaderLogged } from '../HeaderLogged/HeaderLogged';
 


export const Pix: React.FC = () => {

    const navigate = useNavigate() ;
    
    const handleCloseDeposit = () => {
        navigate('/logged');
    }

    const formatCPF = (value: string) => {
        // Lógica para formatar o CPF conforme necessário
       
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      };

      // Manipulador de mudança para o campo de entrada
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Obtém o valor do campo de entrada
        const inputValue = e.target.value;

        // Formata o valor do CPF
        const formattedValue = formatCPF(inputValue);

        // Você pode realizar validações adicionais aqui, se necessário

        // Atualiza o valor do campo de entrada com a versão formatada
        e.target.value = formattedValue;
    };

    // Manipulador de mudança para o campo de entrada
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limita o número máximo de caracteres permitidos
    const maxValue = 10000; // Substitua pelo valor desejado
    const inputValue = e.target.value.slice(0, String(maxValue).length);

    // Atualiza o valor do campo de entrada com o valor limitado
    e.target.value = inputValue;
  };

    const [showDeposit, setShowDeposit] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleMouseEnter = () => {
        setShowDeposit(true);
        setTimeout(() => {
            setShowContent(true);
        }, 10); // Aguarde a transição do Deposit antes de mostrar o ContentDeposit
    };

  return (
    <>
    <HeaderLogged additionalItems={[]}/>
    <S.Deposit showDeposit={showDeposit} onMouseEnter={handleMouseEnter}>
        <S.ContentDeposit showContent={showContent}>
            <S.Wrapper>
                <S.TitlePaymentoMetod>Insira as informações de Pix</S.TitlePaymentoMetod>
                <S.RecomendPaymentMetod>Detalhes do pagamento</S.RecomendPaymentMetod>
                    <S.WrapperForm>
                        <S.Input type='text' placeholder=' Digite seu CPF' onChange={handleChange} maxLength={14} required/>
                        <S.WrapperName>
                            <S.Input type='text' placeholder=' Primeiro Nome' required/>
                            <S.Input type='text' placeholder=' Ultimo Nome' required/>
                        </S.WrapperName>
                        <S.WrapperValue>
                            <S.Input type='number' placeholder=' Valor' onChange={handleChangeNumber} maxLength={10} required/>
                        </S.WrapperValue>
                        <S.InputSubmit type='submit' id='submit' name='submit'>Depositar</S.InputSubmit>
                    </S.WrapperForm>
                <S.CloseButtonDeposit onClick={handleCloseDeposit}>Fechar</S.CloseButtonDeposit>
            </S.Wrapper>
        </S.ContentDeposit>
    </S.Deposit>
    </>
  );
}