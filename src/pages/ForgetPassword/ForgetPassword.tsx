import { useEffect, useState } from "react"
import { isMobile } from 'react-device-detect';
import { Header } from "../../Components/Header/Header"
import { LeftBar } from "../../Components/LeftBar/LeftBar"

import * as S from './styles'
import { Home } from "../Home/Home";

export const ForgetPassword: React.FC = () => {

    function msg() {
        alert('Redefinição de senha enviada para o seu email')
    }

    const [showContent, setShowContent] = useState(false);


    useEffect(() => {
        const closeContentOnMobile = () => {
            if (isMobile && showContent) {
                setShowContent(false);
            }
        };

        window.addEventListener('resize', closeContentOnMobile);

        return () => {
            window.removeEventListener('resize', closeContentOnMobile);
        };
    }, [showContent]);

    return (
        <>
            <Home />
            <S.Container onMouseEnter={() => setShowContent(true)}>
            <S.Content showContent={showContent}>

                    <S.Title>
                        Esqueceu sua senha ?
                    </S.Title>
                    <S.WrapperLogin>
                        <S.TitleInput>Digite seu email *</S.TitleInput>
                        <S.LoginInput id='login' placeholder=' Endereço de email' required />
                    </S.WrapperLogin>
                    <S.SubmitButton type='submit' id='passwordrequest' name='passwordrequest' onClick={msg}>Enviar</S.SubmitButton>
            </S.Content>
            </S.Container>
           </>
    )
}