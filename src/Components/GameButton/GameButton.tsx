import * as S from './styles'
import { IoMdFootball } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { LuCherry } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { FaBomb } from "react-icons/fa6";
import { IoPawSharp } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaSpaceAwesome } from "react-icons/fa6";
import { GiCardAceDiamonds } from "react-icons/gi";
import { GiAbstract103 } from "react-icons/gi";

export const GameButton: React.FC = () => {
    return (
        <>
        <S.GameWrapper>

            <S.ButtonTextWrapper>
            <S.GameButton>
                <IoMdFootball size={40} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Esportes</S.GameButtonTitle>
            </S.ButtonTextWrapper>

            <S.ButtonTextWrapper>
            <S.GameButton>
                <FaVideo size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Apostas</S.GameButtonTitle>
            </S.ButtonTextWrapper>

            <S.ButtonTextWrapper>
            <S.GameButton>
                <LuCherry size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Cassino</S.GameButtonTitle>
            </S.ButtonTextWrapper>

            <S.ButtonTextWrapper>
            <S.GameButton>
                <IoGameController size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>E-sports</S.GameButtonTitle>
            </S.ButtonTextWrapper>
            
            <S.ButtonTextWrapper>
            <S.GameButton>
                <FaBomb size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Mines</S.GameButtonTitle>
            </S.ButtonTextWrapper>
            
            <S.ButtonTextWrapper>
            <S.GameButton>
                <IoPawSharp size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Tiger</S.GameButtonTitle>
            </S.ButtonTextWrapper>
                
            <S.ButtonTextWrapper>
            <S.GameButton>
                <MdAirplanemodeActive size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Aviator</S.GameButtonTitle>
            </S.ButtonTextWrapper>
                
            <S.ButtonTextWrapper>
            <S.GameButton>
                <FaSpaceAwesome size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Spaceman</S.GameButtonTitle>
            </S.ButtonTextWrapper>
            
            <S.ButtonTextWrapper>
            <S.GameButton>
                <GiCardAceDiamonds size={30} color='#03C6FC' />
            </S.GameButton> 
            <S.GameButtonTitle>Blackjack</S.GameButtonTitle>
            </S.ButtonTextWrapper>
            
            <S.ButtonTextWrapper>
            <S.GameButton>
                <GiAbstract103 size={30} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Roleta</S.GameButtonTitle>
            </S.ButtonTextWrapper>
            
            <S.ButtonTextWrapper>
            <S.GameButton>
                <IoMdFootball size={40} color='#03C6FC' />
            </S.GameButton>
            <S.GameButtonTitle>Futebol</S.GameButtonTitle>
            </S.ButtonTextWrapper>
        
        </S.GameWrapper>
        </>
    )
}