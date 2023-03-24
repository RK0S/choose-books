import {memo} from 'react';

interface TitleResultProps {
    children: number
    className: string
}

const TitleResults = memo(({children, className}: TitleResultProps) => {
    return (
        <h3 className={className}>Found {children} {children === 1? 'result': 'results'}</h3>
    );
});

export default TitleResults;