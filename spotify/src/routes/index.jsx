import React from 'react';
import GeneralLayout from '../layout/GeneralLayout';
import Home from '../pages/Home';

export default [
    {
        path: "/",
        layout: GeneralLayout,
        component: Home,
        exact: true
    }
]