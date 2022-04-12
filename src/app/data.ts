import { CustomNavigationInterface } from "./interfaces/custom-navigation.interface";

export const customNavigation: CustomNavigationInterface[] = [
    {
        title: 'DASHBOARD',
        icon: 'dashboard',
        link: '/dashboard'
    },
    {
        title: 'DRAG AND DROP',
        icon: 'drag_indicator',
        link: '/drag-drop'
    },
    {
        collapsable: true,
        title: 'COMPONENTS',
        icon: 'table_chart',
        children: [
            {
                title: 'TABLE',
                icon: 'table_chart',
                link: '/table'
            },
            {
                title: 'FORM',
                icon: 'speaker_notes',
                link: '/forms'
            },
            {
                title: 'LOGIN FORM',
                icon: 'login',
                link: '/login'
            },
        ]
    },
    {
        collapsable: true,
        title: 'PAGES',
        icon: 'feed',
        children: [
            {
                title: '404 PAGE',
                icon: 'error',
                link: '/error404'
            },
            {
                title: 'test PAGE',
                icon: 'error',
                link: '/error404dsadad'
            },
        ]
    },
    {
        title: 'EVAL TEST',
        icon: 'bug_report',
        link: '/eval-test'
    },
    {
        title: 'TEXT EDITOR',
        icon: 'mode_edit',
        link: '/text-editor'
    },
    {
        title: 'LOGOUT',
        icon: 'logout',
        link: '/logout'
    },
    // {
    //     title: 'test1',
    //     icon: 'person'
    // }
]