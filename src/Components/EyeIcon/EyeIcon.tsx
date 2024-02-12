// EyeIcon.tsx
import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface EyeIconProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const EyeIcon: React.FC<EyeIconProps> = ({ isVisible, toggleVisibility }) => {

  return (
    <div onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
      {isVisible ? <FiEye /> : <FiEyeOff />}
    </div>
  );
};

