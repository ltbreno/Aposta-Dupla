
import { Header } from "../../Components/Header/Header"
import { LeftBar } from "../../Components/LeftBar/LeftBar"
import { Tiger } from "../../Components/Tiger/Tiger"
import * as S from './styles'

export const Home: React.FC = () => {

    return (
        <>
        <Header />
        <LeftBar />
        
        <S.Game>
            <Tiger />
        </S.Game>
        </>
    )
}