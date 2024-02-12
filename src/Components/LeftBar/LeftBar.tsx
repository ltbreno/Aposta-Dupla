import * as S from './styles' ;
import { Games } from '../Games/Games';



export const LeftBar: React.FC = () => {
    return (
        <S.LeftSection>
            <S.WrapperButton>
            <S.AuthButton> Ganhe R$ 100,00 grátis </S.AuthButton>
            </S.WrapperButton>
                <Games />
        </S.LeftSection>
    )
}