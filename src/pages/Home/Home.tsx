
import { GameButton } from "../../Components/GameButton/GameButton"
import { Header } from "../../Components/Header/Header"
import * as S from './styles'

export const Home: React.FC = () => {

    return (
        <>
        <Header />

            <S.Content>

                <S.ImageHome src="https://t.ctcdn.com.br/QEWxnN-25j10sXF66n20avR_oX8=/1500x844/smart/i831491.jpeg" />

                <S.SearchBar>
                    <S.SearchInput type="text" class="search-input" placeholder="Pesquisar" />
                </S.SearchBar>

                <S.GameIcons> {/* Espaço reservado para os jogos */}
                    <GameButton />
                </S.GameIcons>
                
                <S.RecommendedGames>
                    <S.WrapperTitle>
                        <S.RecommendedTitle>Recomendados</S.RecommendedTitle>
                    </S.WrapperTitle>
                    <S.WrapperBestGames>
                        <S.BestGames src="https://cdn2.softswiss.net/i/s3/relax/FortuneTiger.webp" />
                        <S.BestGames src="https://cdn2.softswiss.net/i/s3/relax/FortuneTiger.webp" />
                        <S.BestGames src="https://cdn2.softswiss.net/i/s3/relax/FortuneTiger.webp" />
                    </S.WrapperBestGames>
                </S.RecommendedGames>

            </S.Content>

        </>
    )
}