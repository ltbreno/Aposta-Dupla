import React, { useState } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import * as S from './styles'
import { Header } from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { LeftBar } from '../../Components/LeftBar/LeftBar';


export const Login : React.FC = () => {

    const navigate = useNavigate() ;

    const handleForgetPassword = () => {

        navigate('/forgetpassword')
    }

    const handleRegisterAccount = () => {
        navigate('/registeraccount')
    }

    function msg() {
        alert("Tratar a logica de login"); //Logica do login ser efetuado ou falhar
      }
    
    const [showContent, setShowContent] = useState(false);

    return (
        <>
        <Header />
        <LeftBar showLeft={false} />
        <S.Container onMouseEnter={() => setShowContent(true)}>
            <S.Content showContent={showContent}>

                <S.Title>
                    Entrar
                </S.Title>
                <S.WrapperLogin>
                    <S.TitleInput>Digite seu email ou nome de usuario *</S.TitleInput>
                    <S.LoginInput id='login' placeholder=' Login' required />
                    <S.TitleInput>Digite sua senha *</S.TitleInput>
                    <S.LoginInput type='password' id='password' placeholder=' Password ' required/>
                </S.WrapperLogin>
                <S.SubmitButton type='submit' id='submit' name='submit' onClick={msg}>Enviar</S.SubmitButton>
                <S.DivisorText>------- OU -------</S.DivisorText>

                <S.ForgetPassword onClick={handleForgetPassword}>Esqueceu a senha ?</S.ForgetPassword>
                <S.RegisterAccount onClick={handleRegisterAccount}>Crie sua conta 🔥</S.RegisterAccount>
            </S.Content>
        </S.Container>

        <GlobalStyles />
        </>
    )
}