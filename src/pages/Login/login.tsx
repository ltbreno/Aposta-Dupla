import React from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import * as S from './styles'
import { Header } from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';

export const Login : React.FC = () => {

    const navigate = useNavigate() ;

    const handleForgetPassword = () => {

        navigate('/forgetpassword')
    }

    return (
        <>
        <Header />
        <S.Container>
            <S.Content>

                <S.Title>
                    Entrar
                </S.Title>
                <S.WrapperLogin>
                    <S.TitleInput>Digite seu email ou nome de usuario *</S.TitleInput>
                    <S.LoginInput id='login' placeholder=' Login' required />
                    <S.TitleInput>Digite sua senha *</S.TitleInput>
                    <S.LoginInput id='password' placeholder=' Password' required />
                </S.WrapperLogin>
                <S.SubmitButton type='submit' id='submit' name='submit'>Enviar</S.SubmitButton>
                <S.DivisorText>------- OU -------</S.DivisorText>

                <S.ForgetPassword onClick={handleForgetPassword}>Esqueceu a senha ?</S.ForgetPassword>
                <S.RegisterAccount>Crie sua conta 🔥</S.RegisterAccount>
            </S.Content>
        </S.Container>

        <GlobalStyles />
        </>
    )
}