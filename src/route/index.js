
import Index from '../pages/Index/Index';

import Soft from '../pages/Soft/Soft'

import Not404 from '../pages/Not404/Not404'

import Game from '../pages/Game/Game'

import Article from '../pages/Article/Article'
export const routers = [
    {
        exact: true,
        path: '/index',
        component: Index,
    }, {
        exact: true,
        path: '/soft',
        component: Soft
    }, {
        exact: true,
        path: '/game',
        component: Game
    }, {
        exact: true,
        path: '/article',
        component: Article
    }, {
        exact: false,
        path: '*',
        component: Not404
    }
]