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
        component: Inicio
    },
    {
        path: '/usuario/usuario',
        component: Usuario
    },
    {
        path: '/usuario/Informacoes',
        component: Informacoes
    },
    {
        path: '/configuracao',
        component: Ajuste
    }
    ]

})