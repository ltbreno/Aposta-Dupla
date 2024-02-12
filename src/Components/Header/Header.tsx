import * as S from './styles' ;
import { IoChatboxOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {

    const navigate = useNavigate() ;

    const handleLogin = () => {

        navigate('/login')
        console.log("login bem sucedido")
    }

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
                    <S.ButtonWrapper>
                        <S.AuthButton onClick={handleLogin}>
                            <RiLoginBoxLine />
                            Login | Cadastro</S.AuthButton>
                        <S.ChatButton>
                            <IoChatboxOutline />
                        </S.ChatButton>
                    </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}