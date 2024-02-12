
import { HeaderLogged } from "../../Components/HeaderLogged/HeaderLogged"



export const Logged: React.FC = () => {
    const additionalItems = [
        <ul>
            <button>Conta</button>
        </ul>
      ];
    return (
        <>
            <HeaderLogged additionalItems={[additionalItems]} />
        </>
    )
}