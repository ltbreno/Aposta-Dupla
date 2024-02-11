import * as S from './styles' ;
import { IoChatboxOutline } from "react-icons/io5";

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
                    <S.ButtonWrapper>
                        <S.AuthButton>Login | Cadastro</S.AuthButton>
                        <S.ChatButton>
                            <IoChatboxOutline />
                        </S.ChatButton>
                    </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}