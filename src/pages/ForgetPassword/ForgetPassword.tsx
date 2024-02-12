import { Header } from "../../Components/Header/Header"
import { LeftBar } from "../../Components/LeftBar/LeftBar"

import * as S from './styles'

export const ForgetPassword: React.FC = () => {

    function msg() {
        alert('Redefinição de senha enviada para o seu email')
    }

    return (
        <>
            <Header />
            <LeftBar />
            <S.Container>
                <S.Content>

                    <S.Title>
                        Esqueceu sua senha ?
                    </S.Title>
                    <S.WrapperLogin>
                        <S.TitleInput>Digite seu email *</S.TitleInput>
                        <S.LoginInput id='login' placeholder=' Login' required />
                    </S.WrapperLogin>
                    <S.SubmitButton type='submit' id='passwordrequest' name='passwordrequest' onClick={msg}>Enviar</S.SubmitButton>
            </S.Content>
            </S.Container>
           </>
    )
}