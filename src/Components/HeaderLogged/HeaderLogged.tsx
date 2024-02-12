import React, { useState } from 'react';

import { IoChatboxOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import * as S from '../HeaderLogged/styles';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

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

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Aposta dupla 🔥</S.HeaderTitle>
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
                  
                
                    <S.ChatButton>
                        <IoChatboxOutline />
                    </S.ChatButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}
