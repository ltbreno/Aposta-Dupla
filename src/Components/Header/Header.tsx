import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import * as S from './styles';
import { TfiAlignJustify } from "react-icons/tfi";
import { LeftBar } from '../LeftBar/LeftBar';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Verificar se está na página inicial
    const isHome = location.pathname === '/';

    const handleLogin = () => {
        navigate('/login');
    }

    const handleHome = () => {
        navigate('/')
    }

    const [showLeft, setShowLeft] = useState(false) ;

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
                            <S.AuthButton onClick={handleLogin}>
                                <RiLoginBoxLine />
                                Login | Cadastro
                            </S.AuthButton>
                    ) : (
                        <S.AuthButton onClick={handleHome}>
                                <RiLoginBoxLine />
                                Home
                            </S.AuthButton>
                    )}
                    <S.ChatButton>
                        <IoChatboxOutline />
                    </S.ChatButton>
                </S.ButtonWrapper>
                <LeftBar showLeft={showLeft} /> 
            </S.Wrapper>
        </S.StyledHeader>
    )
}
