import { Header } from "../../Components/Header/Header"
import { LeftBar } from "../../Components/LeftBar/LeftBar"
import { GlobalStyles } from "../../styles/GlobalStyles"
import * as S from './styles' ; 


export const RegisterAccount: React.FC = () => {
    return (
        <>
            <Header />
            <LeftBar showLeft={false} />
            <S.Container>
                <S.Content>

                    <S.Title>
                        Crie sua conta
                    </S.Title>
                    <S.WrapperLogin>
                        <S.TitleInput>Digite seu email ou nome de usuario *</S.TitleInput>
                        <S.LoginInput id='login' placeholder=' Login' required />
                        <S.TitleInput>Digite sua senha *</S.TitleInput>
                        <S.LoginInput type='password' id='password' placeholder=' Password ' minLength={3} required/>
                        <S.TitleInput>Data de nascimento </S.TitleInput>
                        <S.LoginInput type='date' id='date' required/>
                    </S.WrapperLogin>
                    <S.SubmitButton type='submit' id='submit' name='submit'>Comece já 🔥</S.SubmitButton>
                </S.Content>
            </S.Container>

        <GlobalStyles />
        </>
    )
}