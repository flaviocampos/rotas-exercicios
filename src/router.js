import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Ajuste from './components/configuracao/Ajuste'

import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioLista from './components/usuario/UsuarioLista'

import Pagina404 from './components/Pagina404.vue'
import Menu from './components/template/Menu.vue'
import MenuIngles from './components/template/MenuIngles.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash', // Isso remove o hash (#)  da URL -- history
    routes: [{
        path: '/',
        name: 'Inicio',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu

        }
    },
    {
        path: '/usuario',
        //component: Usuario,
        components: {
            default: Usuario,
            menu: MenuIngles
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista, name: 'UsuarioLista' },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, name: 'editarUsuario', props: true }
        ]
    },
    {
        path: '/configuracao',
        name: 'configuracao',
        components: {
            default: Ajuste,
            menu: Menu,
            menuInferior: MenuIngles
        },
        //component: Ajuste
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '*',
        component: Pagina404
        //redirect: '/'
    }

    ]

})