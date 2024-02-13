import { useNavigate } from 'react-router-dom';
import { HeaderLogged } from '../HeaderLogged/HeaderLogged';
import * as S from './styles'

import { FaAddressCard } from "react-icons/fa6";

export const DebitPayment: React.FC = () => {

    const navigate = useNavigate() ;

    const handleClose = () => {
        navigate('/logged')
    }

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Limita o número máximo de caracteres permitidos
        const maxValue = 1000; // Substitua pelo valor desejado
        const inputValue = e.target.value.slice(0, String(maxValue).length);
    
        // Atualiza o valor do campo de entrada com o valor limitado
        e.target.value = inputValue;
      };

    function msg() {
        alert('Pagamento Enviado, Aguarde aprovação')
    }

    return (
        <>
            <HeaderLogged additionalItems={[]} />
            <S.Contain>
                <S.ContentCreditPayment>
                    <S.WrapperText>Insira as informações do cartão <FaAddressCard size={20} /></S.WrapperText>
                    <S.RecomendPaymentMetod>Detalhes do pagamento</S.RecomendPaymentMetod>
                    <S.WrapperForm>
                        <S.Input type='text' placeholder=' Nome no Cartão' id='cardname' name='cardname'/>
                        <S.InputNumber type='number' placeholder=' Numero do Cartão' id='cardnumber' name='cardnumber'/>
                        <S.WrapperName>
                            <S.InputCard type='number' placeholder=' CVC' id='CVC' name='CVC' onChange={handleChangeNumber} required/>
                            <S.InputCardDate type='date' placeholder=' Data de expiração' id='carddate' name='carddate' required/>
                        </S.WrapperName>
                    </S.WrapperForm>

                    <S.WrapperFormButton>

                        <S.ButtonSubmit type='submit' id='submit' name='submit' onClick={msg} >
                            Enviar
                        </S.ButtonSubmit>

                        <S.ButtonClose onClick={handleClose}>
                            Fechar
                        </S.ButtonClose>
                    </S.WrapperFormButton>
                </S.ContentCreditPayment> 
            </S.Contain>
        </>
    )
}