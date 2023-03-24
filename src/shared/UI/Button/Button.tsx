import React, { ReactNode } from 'react';

import cls from './Button.module.scss'

interface ButtonProps {
    children: ReactNode
    onClick: () => void
}

const Button = ({children, onClick}: ButtonProps) => {
    return (
        <button className={cls.btn} onClick={onClick}>{children}</button>
    );
};

export default Button;