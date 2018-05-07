import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const Notebook = asyncRoute(() => import('./Notebook'));
export const New = asyncRoute(() => import('./New'));
