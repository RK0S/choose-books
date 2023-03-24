import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { setupStore } from './app/providers/StoreProvider/config/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App /> 
        </Provider>
    </BrowserRouter>
);
