import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import * as S from './styles';
import { TfiAlignJustify } from "react-icons/tfi";
import { LeftBar } from '../LeftBar/LeftBar';
import { ChatRightBar } from '../ChatRightBar/ChatRightBar';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Verificar se está na página inicial
    const isHome = location.pathname === '/';

    const handleRegister = () => {
        navigate('/registeraccount')
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleHome = () => {
        navigate('/')
    }

    const [showLeft, setShowLeft] = useState(true) ;
    const [showRight, setShowRight] = useState(true) ;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.WrapperTitle>
                    <S.ButtonLeft onClick={() => setShowLeft(!showLeft) }>
                        <TfiAlignJustify size={25} color='white' />
                    </S.ButtonLeft>
                    <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
                </S.WrapperTitle>
                <S.ButtonWrapper>
                    {isHome ? (
                        <>
                            <S.RegisterButton onClick={handleRegister}>
                                Registre-se
                            </S.RegisterButton>

                            <S.AuthButton onClick={handleLogin}>
                                <RiLoginBoxLine />
                                Login
                            </S.AuthButton>
                        </>
                    ) : (
                        <S.AuthButton onClick={handleHome}>
                                <RiLoginBoxLine />
                                Home
                            </S.AuthButton>
                    )}
                    <S.ChatButton key={1} onClick={() => setShowRight(!showRight) }>
                        <IoChatboxEllipsesOutline size={20} />
                    </S.ChatButton>
                </S.ButtonWrapper>
                <LeftBar showLeft={showLeft} /> 
                <ChatRightBar showRight={showRight} />
            </S.Wrapper>
        </S.StyledHeader>
    )
}
