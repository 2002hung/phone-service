import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage')),
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/Shop/Shop')),
    },
    {
        path: '/service',
        component: lazy(() => import('@pages/Service/Service')),
    },
];

export default routers;
