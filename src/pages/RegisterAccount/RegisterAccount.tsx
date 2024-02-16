import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header"
import { LeftBar } from "../../Components/LeftBar/LeftBar"
import { ShowPasswordButton } from "../../Components/ShowPasswordBtn/ShowPasswordBtn";
import { GlobalStyles } from "../../styles/GlobalStyles"
import * as S from './styles' ; 
import { isMobile } from "react-device-detect";
import { Home } from "../Home/Home";


export const RegisterAccount: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);

    const formatCPF = (value: string) => {
        // Lógica para formatar o CPF conforme necessário
       
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      };

      // Manipulador de mudança para o campo de entrada
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Obtém o valor do campo de entrada
        const inputValue = e.target.value;

        // Formata o valor do CPF
        const formattedValue = formatCPF(inputValue);

        // Você pode realizar validações adicionais aqui, se necessário

        // Atualiza o valor do campo de entrada com a versão formatada
        e.target.value = formattedValue;
    };

    // Manipulador de mudança para o campo de entrada
        const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Limita o número máximo de caracteres permitidos
        const maxValue = 10000; // Substitua pelo valor desejado
        const inputValue = e.target.value.slice(0, String(maxValue).length);

        // Atualiza o valor do campo de entrada com o valor limitado
        e.target.value = inputValue;
    };
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const closeContentOnMobile = () => {
            if (isMobile && showContent) {
                setShowContent(false);
            }
        };

        window.addEventListener('resize', closeContentOnMobile);

        return () => {
            window.removeEventListener('resize', closeContentOnMobile);
        };
    }, [showContent]);


    return (
        <>
        <Home />
        <S.Container onMouseEnter={() => setShowContent(true)}>
            <S.Content showContent={showContent}>

                    <S.Title>Crie sua conta</S.Title>
                    <S.WrapperLogin>
                        <S.TitleInput>Digite seu email ou nome de usuario *</S.TitleInput>
                        <S.LoginInput id="login" placeholder=" Login" required />
                        <S.TitleInput>Digite sua senha *</S.TitleInput>
                            <S.WrapperViewPassword>
                                <S.LoginInput type={showPassword ? 'text' : 'password'} id="password" placeholder=" Password " minLength={3} required />
                                <ShowPasswordButton id="togglePassword" showPassword={showPassword} setShowPassword={setShowPassword} />
                            </S.WrapperViewPassword>
                        <S.TitleInput>Verifique sua senha *</S.TitleInput>
                        <S.WrapperViewPassword>
                            <S.LoginInput type={showPassword ? 'text' : 'password'} placeholder=' Password ' minLength={3} required />
                            <ShowPasswordButton id="togglePassword" showPassword={showPassword} setShowPassword={setShowPassword} />
                        </S.WrapperViewPassword>
                        <S.TitleInput>Numero do CPF </S.TitleInput>
                        <S.LoginInput type='text' placeholder=' Digite seu CPF' onChange={handleChange} maxLength={14} required/>
                        <S.TitleInput>Data de nascimento </S.TitleInput>
                        <S.LoginInput type='date' id='date' required />
                    </S.WrapperLogin>
                    <S.SubmitButton type='submit' id='submit' name='submit'>Comece já 🔥</S.SubmitButton>
                </S.Content>
            </S.Container>
        <GlobalStyles />
        </>
    )
}