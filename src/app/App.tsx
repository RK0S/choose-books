import { FC } from 'react';

import { AppRouter } from './providers/router';

import './styles/index.scss'

const App: FC = () => {
    return (
        <div className='container'>
            <AppRouter />
        </div>
    );
};

export default App;
