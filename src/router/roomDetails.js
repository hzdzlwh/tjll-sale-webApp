export default [
    {
        path: '/roomDetails',
        name: 'roomDetails',
        redirect: { name: 'roomDetails_info' },
        component: () => import('@/view/roomDetails'),
        children: [
            {
                name: 'roomDetails_info',
                path: 'info',
                component: () => import('@/view/roomDetails/info')
            },
            {
                name: 'roomDetails_room',
                path: 'room',
                component: () => import('@/view/roomDetails/room')
            }
        ]
    }
];
