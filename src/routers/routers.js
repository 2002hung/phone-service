import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@pages/HomePage/HomePage'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/Shop/Shop')),
    },
    {
        path: '/service',
        component: lazy(() => import('@pages/Service/Service')),
    },
    {
        path: '/blog',
        component: lazy(() => import('@pages/Blog/Blog')),
    },
    {
        path: '/login',
        component: lazy(() => import('@pages/Auth/LoginForm')),
    },
    {
        path: '/register',
        component: lazy(() => import('@pages/Auth/RegisterForm')),
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/AboutUs/AboutUs')),
    },
    {
        path: '/contact',
        component: lazy(() => import('@pages/Contact/Contact')),
    },
    {
        path: '/:id',
        component: lazy(() => import('@pages/DetailProduct/DetailProduct')),
    }
]

export default routers;
