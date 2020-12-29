import { createRouter, createWebHistory } from 'vue-router'

import Register from '../components/Register.vue'
import History from '../components/History.vue'
import Menu from '../components/Menu.vue'
import Game from '../components/Game.vue'

const routes = [
    {
        path: '/game',
        name: 'game',
        component: Game
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/history',
        name: 'history',
        component: History
    },
    {
        path: '/',
        name: 'menu',
        component: Menu
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})