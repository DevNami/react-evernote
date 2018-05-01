import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const New = asyncRoute(() => import('./New'));
