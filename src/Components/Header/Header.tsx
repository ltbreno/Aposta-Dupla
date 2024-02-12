import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import * as S from './styles';

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

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
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
            </S.Wrapper>
        </S.StyledHeader>
    )
}
