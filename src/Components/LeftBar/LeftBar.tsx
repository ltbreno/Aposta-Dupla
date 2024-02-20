import { useNavigate } from 'react-router-dom';
import * as S from './styles' ;


interface LeftProps {
    showLeft: boolean ;
}

export const LeftBar: React.FC<LeftProps> = ({showLeft}) => {

   const navigate = useNavigate() ;

   const handleBonus = () => {
        navigate('/registeraccount')
   }

    return (
        <S.Container key={1} showLeft={showLeft}>
            <S.WrapperButton>
            </S.WrapperButton>
            <S.Wrapper>
        <S.PromoButton onClick={handleBonus}>
            Resgate 100% de bonus 🎁
        </S.PromoButton>

        <S.OriginsGames>
            Games
        </S.OriginsGames>

        <S.Games>
            <S.GameImage width="20" height="25" src="https://img.icons8.com/external-others-maxicons/62/external-blackjack-gambling-others-maxicons-20.png" alt="external-blackjack-gambling-others-maxicons-20"/>
            
                <S.GameText>BlackJack</S.GameText>
                <S.GoldText>New</S.GoldText>
            
        </S.Games>

        <S.Games>
            <S.GameImage width="20" height="25" src="https://img.icons8.com/color/48/cheap-2--v1.png" alt="cheap-2--v1" />
            
                <S.GameText>Coin Flip 3D</S.GameText>
                <S.GoldText>New</S.GoldText>
        </S.Games>


        <S.Games>
            <S.GameImage width="20" height="25" src="https://img.icons8.com/ios/50/FFFFFF/horse.png" alt="horse" />
            
                <S.GameText>Horse Race </S.GameText>
                <S.GoldText>New</S.GoldText>
        </S.Games>

        <S.Games>
            <S.GameImage width="20" height="25" src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/FFFFFF/external-wheel-of-fortune-party-and-celebrations-smashingstocks-detailed-outline-smashing-stocks.png" alt="external-wheel-of-fortune-party-and-celebrations-smashingstocks-detailed-outline-smashing-stocks" />
            
                <S.GameText>Wheel Fort</S.GameText>
                <S.GoldText>New</S.GoldText>
        </S.Games>

        <S.Games>
            <S.GameImage width="20" height="25" src="https://img.icons8.com/ios/50/FFFFFF/roulette.png" alt="roulette" />
            
                <S.GameText>Roulette 3D</S.GameText>
                <S.GoldText>New</S.GoldText>
        </S.Games>
        
    </S.Wrapper>
        </S.Container>
    )
}
