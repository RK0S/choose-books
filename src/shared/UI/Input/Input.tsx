import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import cls from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = memo((props: InputProps) => {
    return (
        <input onKeyDown={props.onKeyDown} placeholder={props.placeholder} type="text" onChange={props.onChange} className={[cls.Input, props.className].join(' ')} value={props.value} />
    );
});

export default Input;