import { memo, ChangeEvent } from 'react';

import cls from './Select.module.scss'

export interface Option {
    value: string
    name: string
}

interface SelectProps {
    options: Option[]
    className?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select = memo(({options, className, value, onChange}: SelectProps) => {
    return (
        <select
            value={value}
            className={[cls.Select, className].join(' ')}
            onChange={onChange}
        >
            {options.map(option => 
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
});

export default Select;