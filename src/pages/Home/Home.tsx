
import { Header } from "../../Components/Header/Header"
import { Tiger } from "../../Components/Tiger/Tiger"
import * as S from './styles'

export const Home: React.FC = () => {

    return (
        <>
        <Header />

        
        <S.Game>
            <Tiger />
        </S.Game>
        </>
    )
}