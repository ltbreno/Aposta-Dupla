import * as S from './styles' ;
import { Games } from '../Games/Games';


interface LeftProps {
    showLeft: boolean ;
}

export const LeftBar: React.FC<LeftProps> = ({showLeft}) => {


    return (
        <S.Container key={1} showLeft={showLeft}>
            <S.WrapperButton>
            </S.WrapperButton>
                <Games />
        </S.Container>
    )
}
