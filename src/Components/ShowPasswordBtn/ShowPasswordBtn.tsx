import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import * as S from './styles'

interface ShowPasswordButtonProps {
    id: string;
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const ShowPasswordButton: React.FC<ShowPasswordButtonProps> = ({ id, showPassword, setShowPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.ShowPasswordButton type="button" id={id} onClick={togglePassword}>
      <FaEye size={25} className={isPasswordVisible ? 'FaEyeSlash' : 'FaEye'} />
    </S.ShowPasswordButton >
  );
};

