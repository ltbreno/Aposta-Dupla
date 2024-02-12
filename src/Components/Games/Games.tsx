import * as S from './styles' ;
import { Game } from '../Game/Game';



export const Games: React.FC = () => {
    return ( 
    <S.Wrapper>
        <S.OriginsGames>
            Originais
            <Game img={'💣'} text={'Mines'}  />
            <Game img={'🎲'} text={'Dice'}  />
            <Game img={'🎲'} text={'Dice'}  />
        </S.OriginsGames>
        <hr />
        <br />
        <S.OriginsGames>
            Cassino
            <Game img={'🎰'} text={'Slots'}  />
            <Game img={'🎰'} text={'Slots'}  />
            <Game img={'🎰'} text={'Slots'}  />
        </S.OriginsGames>
        <hr />
    </S.Wrapper>
    )
}