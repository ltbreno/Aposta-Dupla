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
        <hr color='#F12C4C' /> 
        <br />
        <S.OriginsGames>
            Cassino
            <Game img={'🎰'} text={'Slots'} />
            <Game img={'🐯'} text={'Tiger'} />
            <Game img={'🎰'} text={'Slots'} />
        </S.OriginsGames>
        <hr color='#F12C4C' /> 
    </S.Wrapper>
    )
}