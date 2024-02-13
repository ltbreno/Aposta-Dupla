import { useNavigate } from 'react-router-dom';
import { HeaderLogged } from '../HeaderLogged/HeaderLogged';
import * as S from './styles' ;
import { useEffect, useState } from 'react';

export const WithDraw: React.FC = () => {

    const navigate = useNavigate() ;

    const handleClose = () => {
        navigate('/logged')
    }

    const [dataFromBackend, setDataFromBackend] = useState('');
  
    useEffect(() => {
    // Simulando uma chamada à API (substitua isso pela chamada real à sua API)
    fetch('')
      .then(response => response.json())
      .then(data => setDataFromBackend(data.cpf)); // Supondo que "nome" seja o campo que você deseja exibir
    }, []);
    
    const [backendBalance, setBackendBalance] = useState<number>(0);

    useEffect(() => {
        // Simulando chamada à API para obter o primeiro dado (substitua pela chamada real à sua API)
        fetch('')
          .then(response => response.json())
          .then(data => setBackendBalance(data.value))
          .catch(error => console.error('Erro ao buscar dado balance:', error));
    
    }, []);

    return (
    <>
            <HeaderLogged additionalItems={[]}/>
            <S.Deposit>
                <S.ContentDeposit>
                    <S.Wrapper>
                        <S.TitlePaymentoMetod>Insira as informações de Pix</S.TitlePaymentoMetod>
                        <S.RecomendPaymentMetod>Detalhes do Saque</S.RecomendPaymentMetod>

                            <S.WrapperForm>
                                <S.Input type="Number" placeholder=" Dados do Backend (CPF)" value={dataFromBackend}readOnly />
                            </S.WrapperForm>

                            <S.WrapperName>
                                <S.InputName type='text' placeholder=' First Nome' required/>
                                <S.InputName type='text' placeholder=' Last Nome' required/>
                            </S.WrapperName>
                        
                            <S.TextBalance>Saldo disponivel: R$ {backendBalance} </S.TextBalance>
                        <S.InputSubmit type='submit' id='submit' name='submit' />
                        <S.CloseButtonDeposit onClick={handleClose}>Fechar</S.CloseButtonDeposit>
                    </S.Wrapper>
                </S.ContentDeposit>
            </S.Deposit>
    </>
     
    );
}