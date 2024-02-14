import * as S from './styles'

import { FaArrowUpLong } from "react-icons/fa6";

interface RightProps {
    showRight: boolean ;
}

export const ChatRightBar: React.FC<RightProps> = ({showRight}) => {
    return (
        <>
        <S.Container key={1} showRight={showRight}>
            <S.ChatContainer />
            <S.ChatMensageSubmit>
                <S.MensageInput type='text' placeholder=' Digite sua mensagem' id='textmensage' name='textmensage' />
                <S.ButtonSubmit> <FaArrowUpLong size={20} color='black' /> </S.ButtonSubmit>
            </S.ChatMensageSubmit>
        </S.Container>
        </>
    )
}