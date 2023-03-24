import { memo, ReactNode } from 'react';

interface HeadingProps {
    children: ReactNode
    className?: string
}
const Heading = memo((props: HeadingProps) => {
    return (
        <h1
            className={props.className}
        >
            {props.children}
        </h1>
    );
});

export default Heading;