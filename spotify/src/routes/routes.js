import React from 'react';
import GeneralLayout from '../layout/GeneralLayout';
import Home from '../pages/Home';
import Search from '../pages/Search';

export default [
    {
        path: "/",
        layout: GeneralLayout,
        component: Home,
        exact: true,
    },
    /* {
        path: "/search",
        layout: GeneralLayout,
       component: Search,
        exact: false,
      }, */
]