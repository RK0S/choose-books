import { RouteProps } from 'react-router-dom';
import { BookPage } from 'src/pages/BookPage';
import { MainPage } from 'src/pages/MainPage';

export enum AppRoutes {
    MAIN_PAGE = 'main_page',
    BOOK_PAGE = 'book_page',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN_PAGE]: '/',
    [AppRoutes.BOOK_PAGE]: '/book/:id',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN_PAGE]: {
        path: RoutePath.main_page,
        element: <MainPage />,
    },
    [AppRoutes.BOOK_PAGE]: {
        path: RoutePath.book_page,
        element: <BookPage />,
    },
};
