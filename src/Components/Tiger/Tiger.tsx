import React from "react";
import * as S from './styles'


export const Tiger: React.FC = () => {

    const iframeUrl = 'http://65.108.11.125/games/tiger/index.html?token=cb956ff5-d75f-41a2-93db-10266ab1b37f' ;

    const img = 'https://cdn.hub88.io/pgsoft/pgs_fortunetiger.jpg'
    return (
        <>
            
                <S.TigerIframe src={iframeUrl} />
                <S.GameStats>
                    <S.GameTitle>
                        🐯 Fortune Tiger
                    </S.GameTitle>
                    <S.TigerImg src={img} />
                    <S.DivGameTips>
                        <S.GameTips>
                            Comissao da casa: 3.19% <br/>
                            Slots <br />
                            3x3 <br />
                            Oriental <br />
                            Carvanal 
                        </S.GameTips>
                    </S.DivGameTips>
                </S.GameStats>

        </>
      );
}