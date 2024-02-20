import React, { useState } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import * as S from './styles'

import { useNavigate } from 'react-router-dom';


import { Home } from '../Home/Home';
import { ShowPasswordButton } from '../../Components/ShowPasswordBtn/ShowPasswordBtn';


export const Login : React.FC = () => {

    const navigate = useNavigate() ;

    const handleForgetPassword = () => {

        navigate('/forgetpassword')
    }


    function msg() {
        alert("Tratar a logica de login"); //Logica do login ser efetuado ou falhar
      }
    
    const [showContent, setShowContent] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        <Home />
        <S.Container onMouseEnter={() => setShowContent(true)}>
            <S.Content showContent={showContent}>

                <S.Title>
                    Aposta dupla 🔥
                </S.Title>
                <S.WrapperLogin>
                    <S.TitleInput>Digite seu email ou nome de usuario *</S.TitleInput>
                    <S.LoginInput id='login' placeholder=' Login' required />
                    <S.TitleInput>Digite sua senha *</S.TitleInput>
                    <S.LoginInput type={showPassword ? 'text' : 'password'} id="password" placeholder=" Password " minLength={3} required />
                    <ShowPasswordButton id="togglePassword" showPassword={showPassword} setShowPassword={setShowPassword} />
                </S.WrapperLogin>
                <S.SubmitButton type='submit' id='submit' name='submit' onClick={msg}>Enviar</S.SubmitButton>
                <S.DivisorText>------- OU -------</S.DivisorText>

                <S.ForgetPassword onClick={handleForgetPassword}>Esqueceu a senha ?</S.ForgetPassword>
            </S.Content>
        </S.Container>

        <GlobalStyles />
        </>
    )
}