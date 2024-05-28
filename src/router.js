import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Ajuste from './components/configuracao/Ajuste.vue'
import Informacoes from './components/usuario/Informacoes'
import Usuario from './components/usuario/Usuario'


Vue.use(Router)

export default new Router({
    mode: 'hash', // Isso remove o hash (#)  da URL -- history
    routes: [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/usuario/usuario/:id',
        name: 'usuario',
        component: Usuario
    },
    {
        path: '/usuario/Informacoes',
        name: 'informacoes',
        component: Informacoes
    },
    {
        path: '/configuracao',
        name: 'configuracao',
        component: Ajuste
    }
    ]

})