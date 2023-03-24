import { memo, useState, useCallback, ChangeEvent } from 'react';
import Input from 'src/shared/UI/Input/Input';
import { querySlice } from '../../models/slice/querySlice';

import cls from './SearchWrapper.module.scss'
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface searchWrapperProps {
    className?: string
    getInfo: () => void
}

const SearchWrapper = memo(({className, getInfo}: searchWrapperProps) => {
    const { setQuery } = querySlice.actions
    const dispatch = useAppDispatch()
    const [searchQuery, setSearchQuery] = useState<string>('')

    const changeSearchQuery = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)
        dispatch(setQuery(query))
    }, [searchQuery])

    const handleClick = () => {
        getInfo()
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getInfo()
        }
    }

    return (
        <div className={[cls.SearchWrapper, className].join(' ')}>
            <Input onKeyDown={onKeyDown} placeholder='Search a book' onChange={changeSearchQuery} value={searchQuery} />
            <img onClick={handleClick} className={cls.SearchWrapper__btn} src={require("../../../../shared/assets/search-icon.png")} alt="search-icon" />
        </div>
    );
});

export default SearchWrapper;