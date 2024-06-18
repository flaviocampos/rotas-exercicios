/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Ajuste from "./components/configuracao/Ajuste";

import Usuario from "./components/usuario/Usuario";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
import UsuarioEditar from "./components/usuario/UsuarioEditar";
import UsuarioLista from "./components/usuario/UsuarioLista";

import Pagina404 from "./components/Pagina404.vue";
import Menu from "./components/template/Menu.vue";
import MenuIngles from "./components/template/MenuIngles.vue";

Vue.use(Router);

const router = new Router({
    mode: "hash", // Isso remove o hash (#)  da URL -- history
    scrollBehavior(to, from, savePosition) {

        console.log(`From: ${from}`)

        if (savePosition) {
            return savePosition
        } else if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }

    },

    // scrollBehavior() {
    //     return { x: 0, y: 1000 };
    // },
    routes: [
        {
            path: "/",
            name: "Inicio",
            //component: Inicio
            components: {
                default: Inicio,
                menu: Menu,
            },
        },
        {
            path: "/usuario",
            //component: Usuario,
            components: {
                default: Usuario,
                menu: MenuIngles,
            },
            props: true,
            children: [
                { path: "", component: UsuarioLista, name: "UsuarioLista" },
                {
                    path: ":id", component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        next()
                        console.log('Antes da rota -> usuário detalhe')
                    }
                },
                { path: ":id/editar", component: UsuarioEditar, name: "editarUsuario", props: true },
            ],
        },
        {
            path: "/configuracao",
            name: "configuracao",
            components: {
                default: Ajuste,
                menu: Menu,
                menuInferior: MenuIngles,
            },
            //component: Ajuste
        },
        {
            path: "/redirecionar",
            redirect: "/usuario",
        },
        {
            path: "*",
            component: Pagina404,
            //redirect: '/'
        },
    ],
});

//Interceptar de foram GLOBAL -  Aula 275
router.beforeEach((to, from, next) => {
    console.log(`Interceptar Global: ${to.fullPath}`)
    // if (to.path !== '/usuario')
    //     next('/usuario')
    // else {
    //     next()
    // }
    next()
})
export default router