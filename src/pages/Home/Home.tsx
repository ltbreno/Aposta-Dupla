
import { Header } from "../../Components/Header/Header"
import * as S from './styles'

export const Home: React.FC = () => {

    return (
        <>
        <Header />

            <S.Content>

                <S.ImageHome />

                <S.SearchBar>
                    <S.SearchInput type="text" class="search-input" placeholder="Pesquisar" />
                </S.SearchBar>

                <S.GameIcons> {/* Espaço reservado para os jogos */}

                </S.GameIcons>
            </S.Content>

        </>
    )
}