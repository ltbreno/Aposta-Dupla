
import { useEffect, useState } from "react";
import { HeaderLogged } from "../../Components/HeaderLogged/HeaderLogged"
import * as S from './styles'
import { useNavigate } from "react-router-dom";


export const AccountPage: React.FC = () => {

    function msg() {
        alert("Alteração feita com sucesso"); //Logica de funcionar ou não a alteração
      }

    const navigate = useNavigate() ;
    
    const handleClose = () => {
        navigate('/logged');
    }

    const [dataFromBackend, setDataFromBackend] = useState('');
  
    useEffect(() => {
    // Simulando uma chamada à API (substitua isso pela chamada real à sua API)
    fetch('')
      .then(response => response.json())
      .then(data => setDataFromBackend(data.nome)); // Supondo que "nome" seja o campo que você deseja exibir
    }, []);

    return (
        <>
        <HeaderLogged additionalItems={[]} />
            <S.Deposit>
                <S.ContentDeposit>
                <S.WrapperText>Informações da sua conta</S.WrapperText>
                    <S.ContentInput>
                        <S.Input type="text" placeholder=" Dados do Backend (Nome)" value={dataFromBackend}readOnly />
                        <S.Input type="text" placeholder=" Dados do Backend (Email)" value={dataFromBackend}readOnly />
                    </S.ContentInput>

                    <S.ContentInput>
                        <S.Input type="text" placeholder=" Dados do Backend (Senha)" value={dataFromBackend}readOnly />
                        <S.Input type="Number" placeholder=" Dados do Backend (CPF)" value={dataFromBackend}readOnly />
                    </S.ContentInput>

                    <S.ButtonSubmit type="submit" id="submit" name="submit" onClick={msg}>
                        Enviar
                    </S.ButtonSubmit>
                    <S.ButtonClose onClick={handleClose} >
                        Fechar
                    </S.ButtonClose>

                </S.ContentDeposit>
            </S.Deposit>
    </>
    )
}