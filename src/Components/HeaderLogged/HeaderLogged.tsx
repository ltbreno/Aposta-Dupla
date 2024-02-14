import React, { useState } from 'react';

import { IoChatboxOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import * as S from './styles';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { TfiAlignJustify } from 'react-icons/tfi';
import { LeftBar } from '../LeftBar/LeftBar';
import { ChatRightBar } from '../ChatRightBar/ChatRightBar';

interface ExpandableButtonProps {
    additionalItems: React.ReactNode[];
  }

export const HeaderLogged: React.FC<ExpandableButtonProps> = ({ additionalItems }) => {
    const [showAdditionalItems, setShowAdditionalItems] = useState(false);

    const handleButtonClick = () => {
        setShowAdditionalItems(!showAdditionalItems);
      };

    const navigate = useNavigate();

    const handleDeposit = () => {
        navigate('/deposit');
    }

    const [showLeft, setShowLeft] = useState(false) ;

    const [showRight, setShowRight] = useState(false) ;

    return (
    
        <S.StyledHeader>
            <S.Wrapper>
                <S.WrapperTitle>
                        <S.ButtonLeft key={1} onClick={() => setShowLeft(!showLeft) }>
                            <TfiAlignJustify size={25} color='white' />
                        </S.ButtonLeft>
                    <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
                </S.WrapperTitle>    
                <S.ButtonWrapper>

                        <S.ExpandButtonContainer >
                            <S.AuthButton onClick={handleButtonClick}>
                                <RiLoginBoxLine />
                                Bem vindo!
                                </S.AuthButton>
                                {showAdditionalItems && (
                                    <S.additionalItemsContainer>
                                        {additionalItems.map((item, index) => (
                                            <S.AdditionalItem key={index}>
                                                {item}
                                            </S.AdditionalItem>
                                            ))}
                                    </S.additionalItemsContainer>
                                )}
                        </S.ExpandButtonContainer>
                            <S.ValueAccount>
                                <S.ValueFound>
                                    R$ 0,00
                                </S.ValueFound>
                            </S.ValueAccount>

                            <S.DepositButton onClick={handleDeposit}>
                                <GiWallet />
                                Deposito
                            </S.DepositButton>
                  
                
                    <S.ChatButton key={1} onClick={() => setShowRight(!showRight) }>
                        <IoChatboxOutline />
                    </S.ChatButton>
                </S.ButtonWrapper>
                <LeftBar showLeft={showLeft} />
                <ChatRightBar showRight={showRight} />
            </S.Wrapper>
        </S.StyledHeader>

    )
}
