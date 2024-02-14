import * as S from './styles'

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
                <S.ButtonSubmit>Enviar</S.ButtonSubmit>
            </S.ChatMensageSubmit>
        </S.Container>
        </>
    )
}