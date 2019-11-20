import React from 'react';
import Home from '../views/Home';
import Create from '../views/Create';
import EditNotify from '../views/EditNotify';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/create',
        exact: false,
        main: () => <Create />
    },
    {
        path: '/edit/:id',
        exact: false,
        main: ({match}) => <EditNotify match={match}/>
    },
    {
        path: '',
        exact: false
    }
]
export default routes;
